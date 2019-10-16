const express = require('express')
const crypto = require('crypto')
const appExpress = express()
const bodyParser = require('body-parser')
appExpress.use(bodyParser.json({limit: '10mb'}))
appExpress.use(bodyParser.urlencoded({            
    extended: false
}))
appExpress.disable('x-powered-by')
const appConfig = require('../config')
appExpress.all('*',async (req,res,next) => {
    res.setHeader("Content-Type","application/json;charset=utf-8")
    res.setHeader("Access-Control-Allow-Origin",appConfig.ALLOW_ORIGIN)
    res.setHeader("Access-Control-Allow-Method",appConfig.ALLOW_METHOD)
    res.setHeader("Access-Control-Allow-Credentials",appConfig.ALLOW_CREDENTIALS)
    res.setHeader("Access-Control-Allow-Headers",appConfig.ALLOW_HEADERS)
    next()
})

const { app, BrowserWindow } = require('electron')
app.disableHardwareAcceleration()
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

let mainWindow = null
app.on('ready',() => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 1000,
        show: false
    })
    mainWindow.webContents.closeDevTools()
    mainWindow.loadURL('file://' + __dirname + '/index.html')
    mainWindow.on('closed',() => {
        mainWindow = null
    })
})
function flowchart(hex,content){
    const id = "text-" + (hex || "diagram")
    const code = 'var svg = null;'+
            'var div = document.createElement("div");div.id="' + id + '";document.body.appendChild(div);' +
            'try{'+
            'var chart = flowchart.parse(\'' + content + '\');' + 
            'chart.drawSVG(\'' + id + '\');' + 
            'var data = document.getElementById(\'' + id + '\').innerHTML;' + 
            'svg = {result:true,data:data};' +
            '}catch(error){svg={result:false,message:error.message}}'+
            'document.body.removeChild(document.getElementById(\'' + id + '\'));' +
            'svg'

    return new Promise((resolve, reject) => {
        try {
            mainWindow.webContents.executeJavaScript(code,false,jsonResult => {
                resolve(jsonResult)
            })
        } catch (error) {
            reject({
                result:false,
                message:error
            })
        }
    })
} 

appExpress.all('/flowchart',async (req,res) => {
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
        parseContent += inputArray[str] + '\\n'
    }
    const md5 = crypto.createHash('md5')
    const hex = md5.update(parseContent).digest('hex')
    const jsonResult = await flowchart(hex,parseContent.replace('\'','\\\''))
    if(!jsonResult.result){
        return res.json({
            success:false,
            message:jsonResult.message
        })
    }
    res.json({
        success:true,
        svg:jsonResult.data
    })
})

appExpress.listen(3002, () => console.log('Flowchart listening on port 3002!'))