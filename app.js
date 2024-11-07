const path = require('path')
const express = require('express')
const { request } = require('http')
const app = express()
const port = 3010

const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why don’t skeletons fight each other?",
        punchline: "They don’t have the guts."
    },
    {
        id: 3,
        joke: "Why was the math book sad?",
        punchline: "Because it had too many problems."
    },
    {
        id: 4,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta!"
    },
    {
        id: 5,
        joke: "Why can’t your nose be 12 inches long?",
        punchline: "Because then it would be a foot!"
    },
    {
        id: 6,
        joke: "What do you call cheese that isn't yours?",
        punchline: "Nacho cheese!"
    },
    {
        id: 7,
        joke: "Why don’t oysters share their pearls?",
        punchline: "Because they’re shellfish."
    },
    {
        id: 8,
        joke: "How do you organize a space party?",
        punchline: "You planet."
    },
    {
        id: 9,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired!"
    },
    {
        id: 10,
        joke: "What do you call a pile of cats?",
        punchline: "A meow-tain."
    }
];

const root = path.join(__dirname, 'public')
app.use(express.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const index = Math.floor(Math.random() * jokes.length)
    console.log(index, jokes[index])
    response.send(jokes[index])
})

app.listen(port, () => console.log('http://localhost:' + port))