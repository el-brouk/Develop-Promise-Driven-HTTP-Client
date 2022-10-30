/* 
    define object that takes url as parameter and 
    returns Promise with the response for the get and post requests made
    the object should have 2 properties 
    - get
    - post

    the properties should return Promise that should resolve 
    for success or reject with error

*/

//my code:

function http(url){
   let xhr = new XMLHttpRequest();
   
   this.post = new Promise((resolve, reject) => {
            xhr.open('POST', url)
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.onload = (e) => {
                 resolve(xhr.response)
            }
            xhr.send (JSON.stringify(data));
            xhr.onerror = (e) => {
                reject(xhr.state)  
            }});
   
   this.get = new Promise((resolve, reject) => {
            xhr.open('GET', url)
            xhr.onload = (e) => {
                resolve(xhr.response)
             } 
            xhr.send ();
            xhr.onerror = (e) => {
                reject(xhr.state)  
            }}); 
} 



// create object of the Promise driven HTTP client and ensure following code works

//given code:

const httpClient = new http('http://localhost:3000/contacts');


let contact = {
    // add properties as per the data structure of the data fetched and retrieved
    "firstName": "jones",
    "lastName": "christi",
    "email": "jones.c@gmail.com",
    "homeNo": "+1 890 765 3210",
    "workNo": "",
    "birthDate": "2001-16-9",
    "company": "",
    "jobTitle": "",
    "notes": "nth contact",
    "contactAddedOn": "2021-05-23T12:19:11.235Z"
  }

httpClient
.post(record)
.then(response=>{
    alert('record added')
    console.log(response);
})
.catch(err=>{
    console.log(err);
});

httpClient
.get()
.then((response)=>{
    let data = '<ul>'
    let records = JSON.parse(response);
    records.forEach(r => {
        data+= `<li>${r.firstName}.${r.lastName}</li>`
    })
    data+='</ul>'
    document.body.innerHTML += data;
    console.log(response);
})
.catch(err=>{
    document.write(response);
    console.log(err)
});

