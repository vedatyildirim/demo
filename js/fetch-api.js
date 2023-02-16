async function fetchapi(url, param, type, data){

  const request = await fetch(url + param, { method: type, data })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error("Error:", error));

}
