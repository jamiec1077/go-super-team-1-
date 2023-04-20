muscleInputFinder.addEventListener('change', function() {
  muscle = muscleInputFinder.value;
  const exerciseUrl = muscleUrl + muscle;
  const nutritionUrl = 'https://api.api-ninjas.com/v1/nutrition';
  
  // Clear the previous exercise data from the output div
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  
  fetch(exerciseUrl, {
    headers: {
      'X-Api-Key': 'UmNZAX6e1hikqDIu1+4duQ==iSisMXMwBdRo7BpX'
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (let i = 0; i < data.length; i++) {
      var cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      var exerciseName = document.createElement("h3");
      exerciseName.textContent = data[i].name;
      cardDiv.appendChild(exerciseName);

      var exerciseImg = document.createElement("img");
      exerciseImg.src = imageUrls[muscle];
      cardDiv.appendChild(exerciseImg);

      var exerciseDesc = document.createElement("p");
      exerciseDesc.textContent = data[i].description;
      cardDiv.appendChild(exerciseDesc);

      // Add a button to show the nutrition data
      var nutritionButton = document.createElement("button");
      nutritionButton.textContent = "Show Nutrition";
      nutritionButton.addEventListener("click", function() {
        showNutrition(data[i].id);
      });
      cardDiv.appendChild(nutritionButton);

      outputDiv.appendChild(cardDiv);
    }
  })
  .catch(function(error) {
    console.error('Error fetching exercise data:', error);
  });
  
  function showNutrition(exerciseId) {
    // Clear the previous nutrition data from the output div
    outputDiv.innerHTML = "";
    
    // Fetch the nutrition data for the selected exercise
    const nutritionUrlWithExerciseId = nutritionUrl + "?exercise_id=" + exerciseId;
    fetch(nutritionUrlWithExerciseId, {
      headers: {
        'X-Api-Key': 'UmNZAX6e1hikqDIu1+4duQ==iSisMXMwBdRo7BpX'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Display the nutrition data in the output div
      var nutritionList = document.createElement("ul");
      for (let i = 0; i < data.length; i++) {
        var nutritionItem = document.createElement("li");
        nutritionItem.textContent = data[i].name + ": " + data[i].value;
        nutritionList.appendChild(nutritionItem);
      }
      outputDiv.appendChild(nutritionList);
    })
    .catch(function(error) {
      console.error('Error fetching nutrition data:', error);
    });
  }
});