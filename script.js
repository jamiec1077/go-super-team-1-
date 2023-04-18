var apiKey = '730699081eab6183790384191457dec896686423';
var apiUrl = `https://wger.de/api/v2/exercise/?format=json&limit=20&language=2&status=2`;

fetch(apiUrl, {
    headers: {
        'Authorization': `Token ${apiKey}`
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});