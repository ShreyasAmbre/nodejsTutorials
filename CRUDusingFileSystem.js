/*
    1. Create a folder 
    2. create a file inside that folder
    3. add more data inside that file
    4. Read data form that file without getting buffer data at first
    5. Rename the file 
    6. Delet both the file and folder  
*/

const fs = require("fs")

fs.mkdirSync("CRUDOperation", { recursive: true }) 
fs.writeFileSync("CRUDOperation/sampleFile", 'This file is created inside one folder for CRUD Operation')
const fileData = fs.readFileSync("CRUDOperation/sampleFile").toString()
console.log("File Data :- ", fileData)
fs.renameSync("CRUDOperation/sampleFile", "CRUDOperation/sampleFile2")
// fs.rmdir("CRUDOperation")
