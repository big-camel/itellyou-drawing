# 文本绘图工具 [drawing.yanmao.cc](http://drawing.yanmao.cc)
### 本项目可以生成以下svg格式的工程图
+ [PlantUml](http://plantuml.com) 是一个开源项目，支持快速绘制时序图、用例图、类图、活动图、组件图、状态图、对象图、部署图等。同时还支持非 UML 图的甘特图、架构图等。采用 [node-plantuml](https://github.com/markushedvall/node-plantuml) 库生成
+ Latex 采用[mathjax](https://www.mathjax.org/) 库生成 LaTeX 数学公式
+ [Graphviz](http://www.graphviz.org/documentation/) 采用 [node-plantuml](https://github.com/markushedvall/node-plantuml) 库生成，本地需要安装[相关Graphviz包](http://www.graphviz.org/download/) 支持
+ [Flowchart](http://flowchart.js.org/) 在 [electronjs](http://electronjs.org/) 支持下，采用 [https://github.com/adrai/flowchart.js](https://github.com/adrai/flowchart.js) 库生成
+ [Mermaid](https://mermaidjs.github.io/#/) 在 [electronjs](http://electronjs.org/) 支持下，采用 [https://github.com/knsv/mermaid](https://github.com/knsv/mermaid) 库生成
### 运行
```
npm install
```
```
node app.js
```

### 访问地址
PlantUml 生成：
```
localhost:3000/puml
POST eg:
{"content":"@startuml\n\nactor A\nactor B\n\nA -up-> (up)\nA -right-> (center)\nA -down-> (down)\nA -left-> (left)\n\nB -up-> (up)\nB -left-> (center)\nB -right-> (right)\nB -down-> (down)\n\n@enduml"}
```
返回 
```
{"success":true,"svg":"<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" contentScriptType=\"application/ecmascript\" contentStyleType=\"text/css\" height=\"287px\" preserveAspectRatio=\"none\" style=\"width:364px;height:287px;\" version=\"1.1\" viewBox=\"0 0 364 287\" width=\"364px\" zoomAndPan=\"magnify\"><defs><filter height=\"300%\" id=\"f1ns2gr0kyxuxs\" width=\"300%\" x=\"-1\" y=\"-1\"><feGaussianBlur result=\"blurOut\" stdDeviation=\"2.0\"/><feColorMatrix in=\"blurOut\" result=\"blurOut2\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .4 0\"/><feOffset dx=\"4.0\" dy=\"4.0\" in=\"blurOut2\" result=\"blurOut3\"/><feBlend in=\"SourceGraphic\" in2=\"blurOut3\" mode=\"normal\"/></filter></defs><g><!--entity A--><ellipse cx=\"93.5\" cy=\"107\" fill=\"#FEFECE\" filter=\"url(#f1ns2gr0kyxuxs)\" rx=\"8\" ry=\"8\" style=\"stroke: #A80036; stroke-width: 2.0;\"/><path d=\"M93.5,115 L93.5,142 M80.5,123 L106.5,123 M93.5,142 L80.5,157 M93.5,142 L106.5,157 \" fill=\"none\" filter=\"url(#f1ns2gr0kyxuxs)\" style=\"stroke: #A80036; stroke-width: 2.0;\"/><text fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacingAndGlyphs\" textLength=\"9\" x=\"89\" y=\"180.0439\">A</text><!--entity B--><ellipse cx=\"257.5\" cy=\"107\" fill=\"#FEFECE\" filter=\"url(#f1ns2gr0kyxuxs)\" rx=\"8\" ry=\"8\" style=\"stroke: #A80036; stroke-width: 2.0;\"/><path d=\"M257.5,115 L257.5,142 M244.5,123 L270.5,123 M257.5,142 L244.5,157 M257.5,142 L270.5,157 \" fill=\"none\" filter=\"url(#f1ns2gr0kyxuxs)\" style=\"stroke: #A80036; stroke-width: 2.0;\"/><text fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacingAndGlyphs\" textLength=\"9\" x=\"253\" y=\"180.0439\">B</text><ellipse cx=\"175.3807\" cy=\"22.5046\" fill=\"#FEFECE\" filter=\"url(#f1ns2gr0kyxuxs)\" rx=\"17.3807\" ry=\"14.5046\" style=\"stroke: #A80036; stroke-width: 1.5;\"/><text fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacingAndGlyphs\" textLength=\"16\" x=\"167.3807\" y=\"28.5646\">up</text><ellipse cx=\"175.2843\" cy=\"140.02\" fill=\"#FEFECE\" filter=\"url(#f1ns2gr0kyxuxs)\" rx=\"31.2843\" ry=\"16.52\" style=\"stroke: #A80036; stroke-width: 1.5;\"/><text fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacingAndGlyphs\" textLength=\"40\" x=\"155.2843\" y=\"146.08\">center</text><ellipse cx=\"175.3345\" cy=\"259.52\" fill=\"#FEFECE\" filter=\"url(#f1ns2gr0kyxuxs)\" rx=\"26.3345\" ry=\"16.52\" style=\"stroke: #A80036; stroke-width: 1.5;\"/><text fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacingAndGlyphs\" textLength=\"33\" x=\"158.8345\" y=\"265.58\">down</text><ellipse cx=\"24.2661\" cy=\"140.2129\" fill=\"#FEFECE\" filter=\"url(#f1ns2gr0kyxuxs)\" rx=\"18.2661\" ry=\"15.2129\" style=\"stroke: #A80036; stroke-width: 1.5;\"/><text fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacingAndGlyphs\" textLength=\"19\" x=\"14.7661\" y=\"146.273\">left</text><ellipse cx=\"330.299\" cy=\"140.02\" fill=\"#FEFECE\" filter=\"url(#f1ns2gr0kyxuxs)\" rx=\"22.799\" ry=\"16.52\" style=\"stroke: #A80036; stroke-width: 1.5;\"/><text fill=\"#000000\" font-family=\"sans-serif\" font-size=\"14\" lengthAdjust=\"spacingAndGlyphs\" textLength=\"28\" x=\"316.299\" y=\"146.08\">right</text><!--link up to A--><path d=\"M164.121,39.528 C149.694,59.849 124.771,94.954 108.719,117.563 \" fill=\"none\" id=\"up-A\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><polygon fill=\"#A80036\" points=\"167.033,35.426,158.5604,40.4475,164.1378,39.5025,165.0828,45.0798,167.033,35.426\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><!--link A to center--><path d=\"M108.555,140 C118.576,140 128.597,140 138.618,140 \" fill=\"none\" id=\"A-center\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><polygon fill=\"#A80036\" points=\"143.858,140,134.858,136,138.858,140,134.858,144,143.858,140\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><!--link A to down--><path d=\"M108.54,162.551 C123.993,184.6946 147.805,218.8149 162.477,239.8393 \" fill=\"none\" id=\"A-down\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><polygon fill=\"#A80036\" points=\"165.463,244.1179,163.5921,234.4484,162.6013,240.0178,157.0319,239.027,165.463,244.1179\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><!--link left to A--><path d=\"M48.2997,140 C58.2475,140 68.1953,140 78.143,140 \" fill=\"none\" id=\"left-A\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><polygon fill=\"#A80036\" points=\"43.0977,140,52.0977,144,48.0977,140,52.0977,136,43.0977,140\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><!--link up to B--><path d=\"M186.879,39.528 C201.306,59.849 226.229,94.954 242.281,117.563 \" fill=\"none\" id=\"up-B\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><polygon fill=\"#A80036\" points=\"183.967,35.426,185.9172,45.0798,186.8622,39.5025,192.4396,40.4475,183.967,35.426\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><!--link center to B--><path d=\"M212.401,140 C222.327,140 232.252,140 242.178,140 \" fill=\"none\" id=\"center-B\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><polygon fill=\"#A80036\" points=\"207.211,140,216.211,144,212.211,140,216.211,136,207.211,140\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><!--link B to right--><path d=\"M272.613,140 C282.498,140 292.382,140 302.267,140 \" fill=\"none\" id=\"B-right\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><polygon fill=\"#A80036\" points=\"307.436,140,298.436,136,302.436,140,298.436,144,307.436,140\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><!--link B to down--><path d=\"M242.46,162.551 C227.007,184.6946 203.195,218.8149 188.523,239.8393 \" fill=\"none\" id=\"B-down\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><polygon fill=\"#A80036\" points=\"185.537,244.1179,193.9681,239.027,188.3987,240.0178,187.4079,234.4484,185.537,244.1179\" style=\"stroke: #A80036; stroke-width: 1.0;\"/><!--\n@startuml\r\nactor A\r\nactor B\r\n\r\nA -up-> (up)\r\nA -right-> (center)\r\nA -down-> (down)\r\nA -left-> (left)\r\n\r\nB -up-> (up)\r\nB -left-> (center)\r\nB -right-> (right)\r\nB -down-> (down)\r\n@enduml\r\n\nPlantUML version 1.2018.14(Sat Dec 22 00:33:16 CST 2018)\n(GPL source distribution)\nJava Runtime: Java(TM) SE Runtime Environment\nJVM: Java HotSpot(TM) 64-Bit Server VM\nJava Version: 1.8.0_171-b11\nOperating System: Windows 10\nOS Version: 10.0\nDefault Encoding: GBK\nLanguage: zh\nCountry: CN\n--></g></svg>"}
```
Latex 生成
```
localhost:3000/latex
参数形式与返回值与上方一样
```
Graphviz 生成
```
localhost:3000/graphviz
参数形式与返回值与上方一样
```
Flowchart 生成
```
localhost:3002/flowchart
参数形式与返回值与上方一样
```
Mermaid 生成
```
localhost:3001/mermaid
参数形式与返回值与上方一样
```

### 使用方式
项目搭建好后，使用反向代理就可以方便的使用文本生成相关svg图片了
```
location ^~/api/flowchart {
    proxy_pass http://localhost:3002/flowchart/;
}

location ^~/api/mermaid {
    proxy_pass http://localhost:3001/mermaid/;
}

location ^~/api/latex {
    proxy_pass http://localhost:3000/latex/;
}

location ^~/api/graphviz {
    proxy_pass http://localhost:3000/graphviz/;
}

location ^~/api/puml {
    proxy_pass http://localhost:3000/puml/;
}
```
