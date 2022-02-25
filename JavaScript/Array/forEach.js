Array.prototype.forEach = function(fn, thisArg) {
    for (let i = 0; i < this.length; i++) {
        fn.call(thisArg, this[i], i, this)
    }
}

const list = [1,2,3,5];

const obj = {
    a: 'woshi obj'
}
list.forEach(function (item) {
    console.log(this.a)
}, obj)