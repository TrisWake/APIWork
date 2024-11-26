# APIWork

In this project, we'll be creating two mini projects on one page that use both Bootstrap and API requests. The first is a random dog generator and the second is pokemon application.

## Part 1 - Random Dog Generator

In the first part of this assignment, you'll add a button to your webpage that
when clicked, will cause a random dog image to display. You'll use the Dog API (https://dog.ceo/dog-api/) to get a random dog image URL.

#### 1A) Update your HTML

Lets start by creating a `<button>` and an empty `<img>` in the HTML. 

Make the button look like [a nice Bootstrap button](https://getbootstrap.com/docs/5.0/components/buttons/). 

Additionally, put both your button and image in a Bootstrap "card"
component. Read the Bootstarp documentation to figure out how to do this: https://getbootstrap.com/docs/5.0/components/card/

#### 1B) Handle Button Click

Now, lets make it so that when the button is clicked, a random dog image is displayed.

To get a random dog image URL, we'll make a GET request to this url: `https://dog.ceo/api/breeds/image/random`. The Dog API will then send us a response which will be
an object formatted like:
```
{ 
  "message": "https:\/\/images.dog.ceo\/breeds\/otterhound\/n02091635_1860.jpg",
  "status": "success"
}
```

We can see that the message field contains the random dog image! Grab that URL, then set
your image's source to be that URL.

Everytime you click the button, you should see a new random dog image appear!

## Part 2 - Pokedex

In this part, you'll allow a user to enter the name of a pokemon into a text input,
then press a button to submit. Your application will check the look up the pokemon,
then display the results to the user.

#### 2A) Update your HTML

Start off by creating a text input and a submit button in the Pokemon app section of your
HTML. Make these look nice with Bootstrap (https://getbootstrap.com/docs/5.0/forms/overview/).

#### 2B) Handling Button Click

Now, when the submit button is pressed. Take the text entered into the input box
and make an API request to look up the pokemon requested.

This can be done using this pokemon API: https://pokeapi.co/api/v2/pokemon/ditto

To check the pokemon in a city, make a GET request to `https://pokeapi.co/api/v2/pokemon/{pokemonName}`,
substituting `{pokemonName}` with the name of the pokemon you want to look up.

You'll receive a response object that has many options in it for data. It is recommended that you take a look through the object and decide on what you're looking to display. 

Take the type, name, and a sprite (picture) of your choice from this response and display them
somewhere on the page. You'll want to create new HTML elements in `index.html` that
will store this information.

## Stretch goals

* Create a third sub-project with an different API. A list of public
APIs is available here: https://github.com/public-apis/public-apis. A good tip here is aim to 
use one that requires no authentication/key. 

* For each project, put the content returned from the API in a Bootstrap carousel.
Everytime the user makes a new API request, add a new slide to the carousel. The user
should be able to look through the carousel to see the results of all their requests.
