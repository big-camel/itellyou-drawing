const express = require('express')
const mathjax = require('mathjax-node')
mathjax.config({
    MathJax: {
      
    }
})
mathjax.start()
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({            
    extended: false
}))
app.disable('x-powered-by')
const appConfig = require('./config')
app.all('*',async (req,res,next) => {
    res.setHeader("Content-Type","application/json;charset=utf-8")
    res.setHeader("Access-Control-Allow-Origin",appConfig.ALLOW_ORIGIN)
    res.setHeader("Access-Control-Allow-Method",appConfig.ALLOW_METHOD)
    res.setHeader("Access-Control-Allow-Credentials",appConfig.ALLOW_CREDENTIALS)
    res.setHeader("Access-Control-Allow-Headers",appConfig.ALLOW_HEADERS)
    next()
})

const plantuml = require('node-plantuml')
const stream = require('stream')
const util = require('util')
function　WritStream(callback){
    stream.Writable.call(this)
    this.callback = callback
    this.content = ''
}
util.inherits(WritStream, stream.Writable)
WritStream.prototype._write = function(chunk, encode, cb){
    if(typeof this.callback === 'function' && chunk.toString().indexOf('Welcome to PlantUML!') > -1 )
        this.callback(this.content)
    this.content += chunk.toString()
    cb()
}
plantuml.useNailgun()
const getUMLEncode = text => {
    return new Promise((resolve, reject) => {
        plantuml.encode(text,{},(_,data) => {
            resolve(data)
        })
    })
}

app.all('/puml',async (req,res) => {
    const content = req.query.content || req.body.content
    if(!content){
        return res.json({
            success:false,
            message:'not empty'
        })
    }
    const inputArray = content.split('\n')
    let parseContent = ''
    for(let str in inputArray){
        parseContent += inputArray[str] + '\n'
    }
    const uml = await getUMLEncode(parseContent)
    const decode = plantuml.decode(uml)
    const gen = plantuml.generate({format: 'svg',charset:'utf-8'})
    decode.out.pipe(gen.in)
    const getSvgContent = () => {
        return new Promise((resolve, reject) => {
            const ws = new WritStream(resolve)
            gen.out.pipe(ws)
        })
    }
    const svgContent = await getSvgContent()
    if(!svgContent){
        return res.json({
            success:false,
            message:'error'
        })
    }
    return res.json({
        success:true,
        svg:svgContent
    })
})

app.all('/latex',async (req,res) => {
    const content = req.query.content || req.body.content
    if(!content){
        return res.json({
            success:false,
            message:'not empty'
        })
    }
    const getSvgContent = () => {
        return new Promise((resolve, reject) => {
            try {
                mathjax.typeset({
                    math: content,
                    format: "TeX", // or "inline-TeX", "MathML"
                    svg:true,      // or svg:true, or html:true
                }, function (data) {
                    if (!data.errors){
                        resolve(data.svg)
                    }else{
                        reject()
                    }
                })
            } catch (error) {
                reject()
            }
        })
    }
    let svgContent = await getSvgContent()
    if(!svgContent){
        return res.json({
            success:false,
            message:'error'
        })
    }
    return res.json({
        success:true,
        svg:svgContent
    }) 
})

app.all('/graphviz',async (req,res) => {
    const content = req.query.content || req.body.content
    if(!content){
        return res.json({
            success:false,
            message:'not empty'
        })
    }
    const inputArray = content.split('\n')
    let parseContent = ''
    for(let str in inputArray){
        parseContent += inputArray[str] + '\n'
    }
 
    const uml = await getUMLEncode(parseContent)
    const decode = plantuml.decode(uml)
    const gen = plantuml.generate({format: 'svg',charset:'utf-8'})
    decode.out.pipe(gen.in)
    const getSvgContent = () => {
        return new Promise((resolve, reject) => {
            const ws = new WritStream(resolve)
            gen.out.pipe(ws)
        })
    }
    const svgContent = await getSvgContent()
    if(!svgContent){
        return res.json({
            success:false,
            message:'error'
        })
    }
    return res.json({
        success:true,
        svg:svgContent
    })
})

require('./flowchart')
require('./mermaid')
app.listen(3000, () => console.log('Puml/Graphviz/Latex listening on port 3000!'))