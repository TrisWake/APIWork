const dogAPI = 'https://dog.ceo/api/breeds/image/random'
const weatherAPI = 'https://goweather.herokuapp.com/weather/'
const button = document.querySelector('#button')
button.addEventListener('click', ()=>{
    fetch(dogAPI)
    .then((data) => data.json())
    .then((response) => {
        console.log("Random Dog")
       document.querySelector('#image').src = response.message
    })
    .catch((error) => console.log(error));

const pokeText = document.querySelector('#pokeText').value
const pokeDex = `${weatherAPI}${pokeText}`
    
fetch(pokeDex)
.then((data) => data.json())
.then((response) => {
    console.log("Weather Loaded", response)
    document.querySelector('#temperature').textContent = `Temperatur:${response.temperature}`;
    document.querySelector('#wind').textContent = `Wind: ${response.wind}`;
    document.querySelector('#description').textContent = `Description: ${response.description}`
})
.catch((error) => console.error("Weather Error:", error))