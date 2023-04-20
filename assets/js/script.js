

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
       
        console.log("my data is " + data[i].name);
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
      console.log(data);
      //display as a chart using library
      const chartDiv = document.createElement('div');
      chartDiv.style.width = '500px';
      chartDiv.style.height = '500px';
      chartDiv.classList.add('nutritionChartDiv');
      
      document.getElementById('nutritionChartDiv').appendChild(chartDiv);
      
      const canvas = document.createElement('canvas');
      canvas.setAttribute('id', 'myChart');
      canvas.setAttribute('width', '500');
      canvas.setAttribute('height', '500');
      
      chartDiv.appendChild(canvas);
      
      new Chart(canvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: [
            'Total Fat',
            'Saturated Fat',
            'Cholesterol',
            'Sodium',
            'Total Carbohydrates',
            'Dietary Fiber',
            'Sugars',
            'Protein',
            'Potassium'
          ],
          datasets: [
            {
              label: 'Nutrient Values',
              data: [
                data[0].fat_total_g,
                data[0].fat_saturated_g,
                data[0].cholesterol_mg,
                data[0].sodium_mg,
                data[0].carbohydrates_total_g,
                data[0].fiber_g,
                data[0].sugar_g,
                data[0].protein_g,
                data[0].potassium_mg
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
      
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
      
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
 
      
      
    })
     
          
      
    
    .catch(function (error) {
      console.error('Error fetching nutrition data:', error);
    });
}
//call the function when the serach button clicked
searchBtn.addEventListener("click", searchFood);



