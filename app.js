// ELEMENTS
const jokeCard = document.querySelector("#joke_card");
const btn = document.querySelector("#generator_btn");

// FUNCTIONS
const newJoke = async () => {
    const joke = await getJoke();
    jokeCard.innerText = joke;
}

const getJoke = async () => {
    const config = { headers: { Accept: "application/json" } };
    const newJoke = await axios.get("https://icanhazdadjoke.com/", config);
    return newJoke.data.joke
}

// EVENTS
btn.addEventListener("click", newJoke);