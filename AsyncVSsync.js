// console.log('apple1')
// setTimeout(()=>{
//     console.log('apple2')

// },1000)
// console.log('apple3')
// console.log('apple4')

const fs = require('fs');

// fs.readFile('text/puneet.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data);
//     }
// })

const data = fs.readFileSync('text/puneet.txt','utf-8')
console.log(data)

console.log("done")