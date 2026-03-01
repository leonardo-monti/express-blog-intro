const express = require("express")
const app = express()
const port = 3000
const appUrl = `http://localhost:${port}`

app.get("/", (req, res) => {
    res.json({ message: "benvenuto", })
})

app.get("/menu", (req, res) => {
    const menu = [{
        name: "Ciambellone",
        image: "public/images/ciambellone.jpeg",
        ingredients: ["farina , uova"],
    },
    {
        name: "Cracker alla Barbabietola",
        image: "public/images/cracker_barbabietola.jpeg",
        ingredients: ["cracker , barbabietola"],
    },
    {
        name: "Pane Fritto Dolce",
        image: "public/images/pane_fritto_dolce.jpeg",
        ingredients: ["pane , zucchero"],
    },
    {
        name: "Pasta alla Barbabietola",
        image: "public/images/pasta_barbabietola.jpeg",
        ingredients: ["pasta , barbabietola"],
    },
    {
        name: "Torta Paesana",
        image: "public/images/torta_paesana.jpeg",
        ingredients: ["farina , cioccolata"],
    }]
    const responseData = {
        result: menu,
        success: true,
    }
    res.json(menu)
})

app.listen(port, () => {
    console.log(`Server listening on ${appUrl}`)
})