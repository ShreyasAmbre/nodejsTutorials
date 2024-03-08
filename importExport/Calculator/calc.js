function addition(n1, n2) {
    return n1 + n2
}

function substract(n1, n2) {
    return n1 - n2
}

function division(n1, n2) {
    return n1 / n2
}

// One way to export multiple methods
// module.exports.add = addition 
// module.exports.sub = substract 
// module.exports.divi = division

// Other way to export multiple methods 
module.exports = { addition, substract, division }