const http= require ("http")
const fs= require ("fs")
const events= require ("events")
const newsletter= new Events.EventEmitter()
http.createServer(function (req,res){
const {url, method}= req
let chunks=[]
req.on("data",(){
    chunks.push(data)
})

res.on("end",function(){
    let {name, email}= JSON.parse(Buffer.concat(chunks).toString())
    if( url == "/newsletter-signup"&& method== "POST"){
    newsletter.emit("signup",`\n${name},${email}`)
    }
    else {res.writeHead404}
res.writeHead(200){"Content-Type":"text/Html"}
} )
    

})
.listen(8080(){
    console.log("Annie are you okay")
})