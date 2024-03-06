const fs = require("fs");

/*
    Async File System Methods
    Now we are using Async methods of file system where in this it will not
    wait for current operation to complete it can move to next operation.
*/

// fs.writeFile('file_name', 'data', 3rd argument as callback function
// where we can handle what to do if the operation failed)
fs.writeFile("read.txt", "Hi this file is created in Async Manner", (error) => {
    console.log("Error =>", error)
})


// fs.appendFile('file_name', 'data', 3rd argument as callback function
// where we can handle what to do if the operation failed)
fs.appendFile("read.txt", " This is statment is appended using Async fs method", (err) => {
    console.log("Append Task is completed")
})

// We use encoding format as a 2nd argument if we didnt use we will get Buffer Data as output
// fs.appendFile('file_name', 'UTF-8', 3rd argument as callback function
// where we can get data or error)
fs.readFile("read.txt", 'UTF-8', (error, data) => {
    console.log("File Data error :- ", error) // null
    console.log("File Data :- ", data)
})


/*
    ### CHALLENGE :-  Do below task using Asyn File system methods ###
    1. Create a folder
    2. create a file inside that folder
    3. add more data inside that file
    4. Read data form that file without getting buffer data at first
    5. Rename the file
    6. Delet both the file and folder

*/


fs.mkdir("fsAsynFolder", (err, path) => {
    console.log("Folder error :- ", err)
    // console.log("Folder is created :- ", path)
})


fs.writeFile("fsAsynFolder/sampleFile", "Sentence added in fle which is created inside Asyn Folder", (err) => {
    console.log("File write error :-", err)
})


fs.appendFile("fsAsynFolder/sampleFile", " Append Sentence added.", (err) => {
    console.log("File append error :-", err)
})

fs.rename("fsAsynFolder/sampleFile", "fsAsynFolder/sampleFileRenamed", (err) => {
    console.log("File rename error :-", err)
})


// fs.unlink("fsAsynFolder/sampleFileRenamed", (err) => {
//     console.log("File remove error :-", err)
// })




