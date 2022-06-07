fetch('https://projectmoahamed.herokuapp.com/')
  .then(response => response.json())
  .then(json => console.log(json))