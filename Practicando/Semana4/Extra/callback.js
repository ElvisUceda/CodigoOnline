/* const first = () => {
    // simular retardo
    setTimeout(function() {
        console.log(1);
    }, 500);
   
}

const second = () => {
    console.log(2);
}

first();
second(); */

const doHomework =(subject, callback) => {
    console.log(`Starting my ${subject} homework`);
    callback();
}
const alertFinished = () => {
    console.log('Finished my homework');
}
doHomework('math', alertFinished);
   
console.log("---------------");

T.get('search/tweets', params, function(err, data, response) {
    if(!err){
        // Aqui sucede la magia
    } else {
        console.log(err);
    }
})

