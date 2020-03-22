var mod= require("./require/promiseexample.js");

var pr= mod.func(65);

pr.then(value=>{
    console.log(value);
})

