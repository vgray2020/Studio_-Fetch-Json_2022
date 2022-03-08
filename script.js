window.addEventListener('load', function () {
  fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);

      let container = document.getElementById('container');
      let count = document.getElementById('count');
      count.innerHTML += `${json.length}`;
      let astronauts = '';
      json.sort(function (a, b) {
        return a.hoursInSpace > b.hoursInSpace ? -1 : 1;
      });
      //use FOR OF loop
      for (let astronaut of json) {
        astronauts += `<div class = "astronaut">
          <div class = "bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li style = "color:${astronaut.active ? 'green' : 'black'}">Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills.join(', ')}</li>
            </ul>
          </div>
          <img src ="${astronaut.picture}" alt="" class= "avatar"/>
        </div>`;
      }

      container.innerHTML = astronauts;
    });
});

