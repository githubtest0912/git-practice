let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolve done'), 500 )

}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})