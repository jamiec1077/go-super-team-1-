console.log("hello")


fetch("https://api.api-ninjas.com/v1/nutrition")
.then(function(resposne) {
    return Response.json();
})
.then(function(data) {
    console.log(data);
})