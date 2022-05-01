const express = require("express")
const app = express()

//listen to requests"
app.listen(3000)

app.get("/", (req, res) => {

//res.send("<p> This page</p>")
res.sendFile("./pages/index.html", {root: __dirname})
console.log("page loaded")
})

app.get("/about", (req, res) => {
    res.sendFile("./pages/about.html", {root: __dirname})
})

//redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about")
})

//404 pages
app.use((req, res) => {
    res.sendFile("./pages/404.html", {root: __dirname})
})
