const os = require("os")

const computerArchitecture = os.arch()
console.log(`My computer is ${computerArchitecture} bits processor`);


const freeMemory = os.freeMemory()
console.log(`My computer has ${freeMemory} free meomry in bits`)

const totalMemory = os.totalmem()
console.log(`My computer has ${totalMemory} total meomry in bits`)


const myPlatform = os.platform()
console.log(`My computer has ${totalMemory} platform`)
