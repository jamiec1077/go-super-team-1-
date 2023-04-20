
/* Declare the varaible*/
var muscleInputFinder = document.getElementById("muscle-finder");
const muscleUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';
var muscle = ''; // empty muscle string


/**get the exercise name from exercise api* */
muscleInputFinder.addEventListener('change', function () {
  muscle = muscleInputFinder.value; // update muscle string when user selects an option
  const url = muscleUrl + muscle;
  console.log("This is the Link used to fetch the exercise name" + url);
  /*name https://api.api-ninjas.com/v1/exercises?muscle=biceps */


  //header is a part of the message sent from a client to a server(Get request)
  //X-Api-Key (required) 
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
      // Loop through the fetched exercise data only first 10 values
      for (let i = 0; i <= 10; i++) {

        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        // Create a header element for the exercise name
        var exerciseName = document.createElement("h3");
        exerciseName.textContent = data[i].name;
        cardDiv.appendChild(exerciseName);

        // Create an element for the exercise image
        var exerciseImg = document.createElement("img")
        exerciseImg.src = data[i].image;
        cardDiv.appendChild(exerciseImg);

        // Add the card to the output div
        outputDiv.appendChild(cardDiv);
      }
    });

});

/*Create Function to get the nutritional information from the nutritional api*/
const searchBtn = document.getElementById("search-button");
const foodInput = document.getElementById("food-search");
const nutritionDiv = document.getElementById("nutrition");

/*create function */
function searchFood() {
  food = foodInput.value;
  const url = `https://api.api-ninjas.com/v1/nutrition?query=${food}`;
  console.log("nutrition link is " + url)
  fetch(url, {
    headers: {
      'X-Api-Key': 'UmNZAX6e1hikqDIu1+4duQ==iSisMXMwBdRo7BpX'
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Do something with the nutrition data, e.g. display it in a div element
      console.log(data);
      console.log(data[0]);
      nutritionDiv.innerHTML = JSON.stringify(data);

      const nutritionInfo = `
              <p>Name: ${data[0].name}</p>
              <p>Serving size: ${data[0].serving_size_g} g</p>
              <p>Calories: ${data[0].calories}</p>
              <p>Total fat: ${data[0].fat_total_g} g</p>
              <p>Saturated fat: ${data[0].fat_saturated_g} g</p>
              <p>Cholesterol: ${data[0].cholesterol_mg} mg</p>
              <p>Sodium: ${data[0].sodium_mg} mg</p>
              <p>Total carbohydrates: ${data[0].carbohydrates_total_g} g</p>
              <p>Dietary fiber: ${data[0].fiber_g} g</p>
              <p>Sugars: ${data[0].sugar_g} g</p>
              <p>Protein: ${data[0].protein_g} g</p>
              <p>Potassium: ${data[0].potassium_mg} mg</p>
            `;

      nutritionDiv.innerHTML = nutritionInfo;

    })
    .catch(function (error) {
      console.error('Error fetching nutrition data:', error);
    });
}
//call the function when the serach button clicked
searchBtn.addEventListener("click", searchFood);



