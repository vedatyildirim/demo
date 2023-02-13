let data = { title: 'foo', body: 'bar', userId: 1 }
let type = 'POST';
let header = { 'Content-type': 'application/json; charset=UTF-8' }
//let param = '2'
let url = 'https://jsonplaceholder.typicode.com/posts/' + param;

fetch(url, {
  method: type,
  // body: JSON.stringify(data[0]),
  // body: new Form(data[0]),
  body: JSON.stringify(data),
  headers: {header},
}).then((response) => response.json()).then((json) => console.log(json));
