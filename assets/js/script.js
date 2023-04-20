
var foodList = document.getElementById
var FeedMeButton = document.getElementById('dropdown-menu');

fetch("https://api.api-ninjas.com/v1/nutrition?query=")
    .then(function (resposne) {
        return Response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.name);
        console, log(data.calories);
    })

FeedMeButton.addEventListener('click', function () {
    console.log("yum");
})