const jokeText = document.querySelector('#joke')
const punchlineText = document.querySelector('#punchline')
const button = document.querySelector('button')

button.addEventListener('click', async () => {
    const url = '/api/v1/random-joke'

    const result = await fetch(url)
    const {id, joke, punchline} = await result.json()

    jokeText.textContent = ""
    punchlineText.textContent = ""

    jokeText.textContent = joke
    punchlineText.textContent = punchline
})