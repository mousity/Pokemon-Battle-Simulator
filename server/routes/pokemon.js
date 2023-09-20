const express = require('express');
const router = express.Router();
const axios = require('axios');

async function getPoke() {
    try {
        let ditto = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
        return ditto.data;  // Return the data property of the response
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        return null;
    }
}

router.get("/", async (req, res) => {  // Mark the callback as async
    const pokeData = await getPoke();  // Await the result of getPoke()
    
    if (pokeData) {
        return res.json(pokeData);
    } else {
        return res.status(500).json({ error: "Failed to fetch Pokémon data" });
    }
});

module.exports = router;





