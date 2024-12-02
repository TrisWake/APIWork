const URL = 'https://dog.ceo/api/breeds/image/random'
const button = document.querySelector('#button')
button.addEventListener('click', ()=>{
    fetch(URL)
    .then((data) => data.json())
    .then((response) => {
        console.log("Hello")
       document.querySelector('#image').src = response.message
    })
    .catch((error) => console.log(error));
})

const Pokemon = 'https://pokeapi.co/api/v2/pokemon/ditto'
document.querySelector('#button').addEventListener('click', ()=>{
    const pokeText = document.querySelector('#pokeText').value
    const pokeDex = `https://goweather.herokuapp.com/weather/${pokeText}`
    fetch(pokeDex)
    document.querySelector('#temperature')
    document.querySelector('#wind')
    document.querySelector('#description')
})  