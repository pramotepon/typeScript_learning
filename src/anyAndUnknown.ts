function formatNumber(num:number) {
    return num.toFixed(2);
}

// Any & Unknown
let fname: any = "Pramote"
console.log(fname);
fname = "Hi Pramote";
console.log(fname);

let myNum: any = 2.23110;
// myNum = "2.23110"
console.log(formatNumber(myNum));

let unNum: unknown = "50.21231";
unNum = 50.21231
if(typeof unNum === "number"){
    console.log(formatNumber(unNum));
}
