let printNumTwo;
let i =3;
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
const user = { name: 'John Doe', age: 34 };
const { name, aged } = user;
console.log(name);
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => console.log(result));
makeServerRequest.then();