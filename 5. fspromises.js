var fspr= require('fs').promises;



var textPromise= fspr.readFile("./textFiles/example.txt").then(buffer=>buffer.toString());

textPromise.then(text=>{
    console.log(text);
})