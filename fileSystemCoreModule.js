// Working on Core Modules

const fs = require('fs')

fs.writeFileSync("dummyMsg", "Hi, This file is created using fs Core Module")

fs.appendFileSync("dummyMsg", " This statement in udapted using appendFileSyn method")


const buff_data = fs.readFileSync("dummyMsg")

console.log("File Data :- ", buff_data)
// OutPut :- File Data :-  <Buffer 48 69 2c 20 54 68 69 73 20 66 69 6c 65 20 69 73 20 63 72 65 61 74 65 64 20 75 73 69 6e 67 20 66 73 20 43 6f 72 65 20 4d 6f 
// 64 75 6c 65 20 54 68 69 73 ... 48 more bytes>
/*
    Nodejs include additional data type called buffer
    Not available in browser Javascript
    Buffer is mainly used to store binary data
    while reading from file or receiving packets over a network
*/
const fileDataInStr = buff_data.toString()
console.log("File Data in string :- ", fileDataInStr)

// It takes 2 arguments ('old path of file', 'new path of file')
fs.renameSync('dummyMsg', 'dummyMsg2')