const express = require('express');
const router = express.Router();
const axios = require('axios');

async function getTestPoke() {
    try {
        let ditto = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
        return ditto.data;  // Return the data property of the response
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        return null;
    }
}

async function getPoke() {
    try {
        let pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
        return pokemon.data;
    } catch (error) {
        console.error("Error fetching pokemon!", error);
        return null;
    }
}

router.get("/ditto", async (req, res) => {  // Mark the callback as async
    const pokeData = await getTestPoke();  // Await the result of getPoke()
    
    if (pokeData) {
        return res.json(pokeData);
    } else {
        return res.status(500).json({ error: "Failed to fetch Pokémon data" });
    }
});

router.get("/generateTeam", async (req, res) => {
    const team = {
        name: ""
    }

    //for(let i = 0; i < 6; i++) {
        const pokemon = await getPoke();
        team.name = pokemon.name;
        console.log(team.name);
    //}

    return res.json(team);
})

module.exports = router;





