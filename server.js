const http = require("http")
const fs = require("fs")
const _ = require("lodash")

const server = http.createServer((req, res) => {
console.log("request made")

//lodash

res.setHeader("Content-Type","text/html")
let path = "./pages/"
switch(req.url) {
    case"/": path += "index.html"
    res.statusCode = 200
    break;
    case"/about": path+= "about.html"
    res.statusCode = 200
    break;
    case"/about-us":
    //redirect
    res.statusCode = 301
    res.setHeader("Location", "/about")
    break;
    default: path += "404.html"
    res.statusCode = 404
    break;
}
fs.readFile(path, (err,data) => {
    if(err) {
        console.log(err)
        res.end()
    } else {
        res.write(data)
        res.end()
    } 

})
// res.write("<h1>Hello World!</h1>")
})
server.listen(3000, "localhost", () => {
    console.log("listening to requests") 
})