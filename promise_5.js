//Convertire la seguente funzione basata su callback in una funzione basata su Promise.

/*function callback_BasedFunction(arg1, arg2, callback) { 
  setTimeout(() => { 
  const result = arg1 + arg2; 
  if (result % 2 !== 0) { 
  callback(null, result); 
  } else { 
  callback(new Error('Result is not odd!'), null); } }, 1000);
  }*/

function promise_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
            resolve(result)
        } else {reject(new Error('Il numero non è dispari!'))}
        }, 1000)
    })
};

promise_BasedFunction(4,6).then((data) => {console.log(data)}).catch((error) => {console.log(error.message)})