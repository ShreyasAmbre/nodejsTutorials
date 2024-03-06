const path = require("path")

// TO find out the folder name in which this file is present
console.log(path.dirname("D:/Shreyas/Nodejs Express Tutorials/pathMode.js"))

// Find out the extension of the file
console.log(path.extname("D:/Shreyas/Nodejs Express Tutorials/pathMode.js"))

// Find out the name of the file
console.log(path.basename("D:/Shreyas/Nodejs Express Tutorials/pathMode.js"))

// find out all the information above in below single path module method
console.log(path.parse("D:/Shreyas/Nodejs Express Tutorials/pathMode.js"))
