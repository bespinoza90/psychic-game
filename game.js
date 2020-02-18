console.log("loaded");

var arr = [1,2,3,4,5];
var item = arr[Math.floor(Math.random() * arr.length)]
console.log(item)

function random(){
    item = arr[Math.floor(Math.random() * arr.length)]
    console.log(item) 
}

random()