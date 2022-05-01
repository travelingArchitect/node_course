const fs = require("fs")

//read
/*
fs.readFile("./content.txt", (err, data) => {
if(err) {
    console.log(err)
}
console.log(data.toString())
} )
*/
//modify
/*
fs.writeFile("./content.txt", "Hi there!", () => {
    console.log("File written!")
    } )
*/
//create  folder
/*
if (!fs.existsSync("./repeat")) {
    fs.mkdir("./repeat", (err) =>{
        if(err) {
            console.log(err)
        }
        console.log("Folder created!")
    })
} else {
    console.log("Folder exists!")
}
*/

//delete file
/*
if (fs.existsSync("./blog.txt")) {
fs.unlink("./blog.txt", (err) => {
    console.log(err)
})
console.log("file deleted!")
}
*/
//delete folder
/*
if (fs.existsSync("./assets")) {
fs.rmdir("./assets", (err) => {
    console.log("Folder deleted!")
})
} else {
    console.log("Folder does not exist!")
}
*/

