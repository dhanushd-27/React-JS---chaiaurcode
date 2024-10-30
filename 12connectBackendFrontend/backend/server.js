const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();
const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/api/jokes", (req, res) => {

    const jokes = [
        {
            id: 1,
            title: "The Time-Traveling Chicken",
            content: "Why did the chicken cross the road? To get to the other side... in the future!"
        },
        {
            id: 2,
            title: "The Lazy Scientist",
            content: "Why did the scientist break up with his girlfriend? Because she had no chemistry!"
        },
        {
            id: 3,
            title: "The Forgetful Chef",
            content: "Why did the chef get locked out of his kitchen? Because he lost his thyme!"
        },
        {
            id: 4,
            title: "The Confused Calendar",
            content: "Why did the calendar apply for a job? It wanted to make some days count!"
        },
        {
            id: 5,
            title: "The Unlucky Astronaut",
            content: "Why did the astronaut break up with his partner? Because he needed space!"
        }
    ];
    
    res.send(jokes)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening at server ${ process.env.PORT }`);
})