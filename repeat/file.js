const fs = require("fs")
/*
fs.readFile("../content.txt", (err, data) => {
if(err) {
    console.log(err)
} 
console.log(data.toString())
})
console.log("me first")

fs.readFile("../source.txt", (err,data) => {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
})

fs.writeFile("../content.txt", "written by me", (err) => {
    if(err) {
        console.log(err)
    }
    console.log("success!")
})
*/
if(!fs.existsSync("./test")) {
    fs.mkdir("./test", (err) => {
       if (err) {
        console.log(err)
       } 
       console.log("folder created")
       fs.writeFile("./test/blog.txt", "hello friedns!", (err) => {
           if (err) {
               console.log(err)
           }
           console.log("file created successfully")
       })
    })
}
 else {
   // console.log("folder exists")
   if(fs.existsSync("./test/blog.txt")) {
       fs.unlink("./test/blog.txt", (err) => {
           if (err) {
               console.log(err)
           }
           console.log("file deleted")
       })
       fs.rmdir("./test", (err) => {
           if (err) {
               console.log(err)
            } 
            console.log("folder deleted")
        })
    }
}