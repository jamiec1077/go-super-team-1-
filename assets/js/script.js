/* Include in Readme - when i select the search option 
      then it shows all the list
    - when i click the particular list
       then it displays name description from the api in the div element
    - when it matched with parameter of the url https://api.api-ninjas.com/v1/exercises?muscle=
      then design the div*/


      var muscleInputFinder = document.getElementById("muscle-finder");
      const muscleUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';
      var muscle = ''; // empty muscle string
      
      muscleInputFinder.addEventListener('change', function() {
        muscle = muscleInputFinder.value; // update muscle string when user selects an option
        const url = muscleUrl + muscle;
      
        fetch(url, {
          headers: {
            'X-Api-Key': 'UmNZAX6e1hikqDIu1+4duQ==iSisMXMwBdRo7BpX'
          }
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          var outputDiv = document.getElementById("output");
          //outputDiv.innerHTML = ""; // clear any previous content
          for (let i = 0; i < data.length; i++) {
            console.log(data[i]);//fetch all the data
            console.log(data[i].name);//fetch the exercise name
            var exerciseName = document.createElement("h3");
            exerciseName.textContent = data[i].name;//exerciseName 
            outputDiv.appendChild(exerciseName);
          }
        });
      });
      
      
      