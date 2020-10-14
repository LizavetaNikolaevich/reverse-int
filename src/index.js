module.exports = function reverse (n) {
    let str = Math.abs(n).toString();
    let newArr = str.split('').reverse()
    let newSrt = newArr.join('')
    return parseInt(newSrt)
}
