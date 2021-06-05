let promise = new Promise(function(resolve,reject){
    let isclean = false;
    if(isclean){
        resolve('Clean');
    }else{
        reject('not Clean');
    }
});
promise.then(function(fromResolve){
    console.log('the room is' + fromResolve);
}).catch(function(fromReject){
    console.log('the room is' + fromReject);
})