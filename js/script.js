/* 
    define object that takes url as parameter and 
    returns Promise with the response for the get and post requests made
    the object should have 2 properties 
    - get
    - post

    the properties should return Promise that should resolve 
    for success or reject with error

*/






// create object of the Promise driven HTTP client and ensure following code works

//given code:

const httpClient = new http('http://localhost:3000/posts');


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
//my line:
var record = contact;  

//my code:
function http(url){
   
   this.post =  () => new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send (JSON.stringify(record));
            xhr.onload = (e) => {
                if (xhr.status===201)
                    resolve(xhr.response);
                 else
                    console.log(`Loaded: ${xhr.status} ${xhr.response}`);  
            };
            xhr.onerror = (e) => {
                console.log(`Network error: ${xhr.status}`);
                reject(xhr.state);  
            }}, record);
   
   this.get = () => new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send ();
            xhr.onload = (e) => {
                if (xhr.status===200)
                    resolve(xhr.response);
                else
                    console.log(`loading error: ${xhr.status}`);
             }; 
            xhr.onerror = (e) => {
                reject(xhr.state);  
            }}); 
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

