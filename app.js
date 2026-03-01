const express = require("express")
const app = express()
const port = 3000
const appUrl = `http://localhost:${port}`

app.get("/", (req, res) => {
    res.send("Server del mio Blog")
})

app.use(express.static("public"))

app.get("/bacheca", (req, res) => {
    const menu = [{
        title: "Ciambellone",
        content: "Dolce tipico",
        image: "/images/ciambellone.jpeg",
        tags: ["farina", "uova"],
    },
    {
        title: "Cracker alla Barbabietola",
        content: "Una ricetta imperdibile",
        image: "/images/cracker_barbabietola.jpeg",
        tags: ["cracker", "barbabietola"],
    },
    {
        title: "Pane Fritto Dolce",
        content: "Pane per golosi",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: ["pane", "zucchero"],
    },
    {
        title: "Pasta alla Barbabietola",
        content: "Un piatto sano e buono!",
        image: "/images/pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola"],
    },
    {
        title: "Torta Paesana",
        content: "Meglio di quella della nonna",
        image: "/images/torta_paesana.jpeg",
        tags: ["farina", "cioccolata"],
    }]
    const responseData = {
        result: menu,
        success: true,
    }
    res.json(responseData)
})

app.listen(port, () => {
    console.log(`Server listening on ${appUrl}`)
})