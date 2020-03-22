module.exports={
    func:(x)=>{
        return new Promise((resolve,reject)=>{
            resolve(x*2)
        })
    }
}