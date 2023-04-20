/* Include in Readme - when i select the search option 
      then it shows all the list
    - when i click the particular list
       then it displays name description from the api in the div element
    - when it matched with parameter of the url https://api.api-ninjas.com/v1/exercises?muscle=
      then design the div*/


      var muscleInputFinder = document.getElementById("muscle-finder");
      const muscleUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';
      var muscle = ''; // empty muscle string
      
      muscleInputFinder.addEventListener('change', function () {
      
          muscle = muscleInputFinder.value; // update muscle string when user selects an option
          const url = muscleUrl + muscle;
          //header is a part of the message sent from a client to a server or vice versa ,communication protocol,Headers
          //X-Api-Key (required) - API Key associated with your account.
          fetch(url, {
              headers: {
                  'X-Api-Key': 'UmNZAX6e1hikqDIu1+4duQ==iSisMXMwBdRo7BpX'
              }
          })
              .then(function (response) {
                  return response.json();
              })
      
              .then(function (data) {
                  var outputDiv = document.getElementById("output");
                  outputDiv.innerHTML = "";
      
                  // Loop through the fetched exercise data
                  //for (let i = 0; i < data.length; i++) {
                  for (let i = 0; i <= 10; i++) {
      
                      var cardDiv = document.createElement("div");
                      cardDiv.classList.add("card");
      
                      // Create a header element for the exercise name
                      var exerciseName = document.createElement("h3");
                      exerciseName.textContent = data[i].name;
                      cardDiv.appendChild(exerciseName);
      
                      // Create an element for the exercise image
                      var exerciseImg = document.createElement("img");
      
      
      
                      exerciseImg.src = data[i].image;
                      cardDiv.appendChild(exerciseImg);
      
                      // Create a paragraph element for the exercise description
                      var exerciseDesc = document.createElement("p");
                      exerciseDesc.textContent = data[i].description;
                      cardDiv.appendChild(exerciseDesc);
      
                      // Add the card to the output div
                      outputDiv.appendChild(cardDiv);
                  }
                  
              });
              
      
      });
      const searchBtn = document.getElementById("search-button");
      const foodInput = document.getElementById("food-search");
      const nutritionDiv = document.getElementById("nutrition");
      function searchFood() {
        
        food = foodInput.value;
        const url = `https://api.api-ninjas.com/v1/nutrition?query=${food}`;
      
        fetch(url, {
          headers: {
            'X-Api-Key': 'UmNZAX6e1hikqDIu1+4duQ==iSisMXMwBdRo7BpX'
          }
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Do something with the nutrition data, e.g. display it in a div element
          console.log(data);
          nutritionDiv.innerHTML = JSON.stringify(data);
        })
        .catch(function(error) {
          console.error('Error fetching nutrition data:', error);
        });
      }
      
      searchBtn.addEventListener("click", searchFood);
        /*const searchBtn = document.getElementById("search-btn");
        const foodInput = document.getElementById("food-search");
        const nutritionDiv = document.getElementById("nutrition");
        const foodUrl = `https://api.api-ninjas.com/v1/nutrition?query=`;
        var food= '';

        searchBtn.addEventListener("click", function() {
           food = foodInput.value;
           const url = `https://api.api-ninjas.com/v1/nutrition?query=${food}`;
    

    fetch(url, {
      headers: {
        'X-Api-Key': 'UmNZAX6e1hikqDIu1+4duQ==iSisMXMwBdRo7BpX'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Do something with the nutrition data, e.g. display it in a div element
      console.log(data);
      nutritionDiv.innerHTML = JSON.stringify(data);
    })
    .catch(function(error) {
      console.error('Error fetching nutrition data:', error);
    });
  });*/

        
        
        
        