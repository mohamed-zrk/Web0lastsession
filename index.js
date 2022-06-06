fetch('https://projectmoahamed.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
      students = document.getElementById('Students')
      json.Sheet1.forEach(s => {
          let option = document.createElement('option')
          option.innerHTML = s["A"]
          students.appendChild(option)
      });
  })