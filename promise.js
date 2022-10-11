let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolve done'), 300 )

}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})