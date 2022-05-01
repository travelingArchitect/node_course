const fs = require("fs")

const readStream = fs.createReadStream("./source.txt", { encoding: "utf8"})
const writeStream = fs.createWriteStream("./result.txt")

readStream.pipe(writeStream)