const fs = require("fs")

const reader = fs.createReadStream("../source.txt", {encoding: "utf8"})

const writer = fs.createWriteStream( "./newblo2.txt")

reader.on("data", (chunk) => {
    console.log(chunk)
    writer.write(chunk)
})

reader.pipe(writer)

