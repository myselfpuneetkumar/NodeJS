const fs = require('fs');
//sync fs_method--write
// fs.writeFileSync('files/appless.txt','This is a fruit','utf-8')

// fs delete
// fs.unlinkSync('files/appless.txt')

// fs read operation

// const readData = fs.readFileSync('files/grapes.txt','utf8')
// console.log('created successfully',readData)

//fs update operation

// fs.appendFileSync ('files/grapes.txt',' and this is good for health')


const operation = process.argv[2];
if(operation =='write'){
    const name = process.argv[3];
    const content = process.argv[4];
    fs.writeFileSync("files/" +name+ ".txt",content)
    console.log(operation,name,content)
}
else if(operation =='read'){
    const name = process.argv[3];
    let data = fs.readFileSync('files/'+name+'.txt','utf-8')
    console.log(data);
}
else if(operation =='update'){
    const name = process.argv[3];
        const content = process.argv[4];

   fs.appendFileSync('files/'+name+'.txt',content,'utf-8')
    // console.log(data);
}
else if(operation =='delete'){
    const name = process.argv[3];
        
    fs.unlinkSync('files/'+name+'.txt')
    // console.log(data);
}
console.log(operation,'successfully');
