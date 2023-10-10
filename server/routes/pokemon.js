const express = require('express');
const router = express.Router();
const axios = require('axios');

// Test function for comparison to normal function
async function getTestPoke() {
    try {
        let ditto = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
        return ditto.data;  // Return the data property of the response
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        return null;
    }
}

// Gets a random pokemon from API to put into a generated team
async function getPoke(num) {
    try {
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
        return pokemon.data;
    } catch (error) {
        console.error("Error fetching pokemon!", error);
        return null;
    }
}

// Sample route to fetch test data
router.get("/ditto", async (req, res) => {  // Mark the callback as async
    const pokeData = await getTestPoke();  // Await the result of getPoke()
    
    if (pokeData) {
        return res.json(pokeData);
    } else {
        return res.status(500).json({ error: "Failed to fetch Pokémon data" });
    }
});

// Random team generator
router.get("/generateTeam", async (req, res) => {
    const team = []
    const max = 152, min = 1;

    for(let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * (max - min) + min);
        const pokemon = await getPoke(randomNum);
        let subcount = 0;
        team.push({
            name: pokemon.name,
            types: pokemon.types,
            stats: [
                {   
                    name: "hp",
                    base_stat: pokemon.stats[subcount].base_stat
                },
                {
                    name: "attack",
                    base_state: pokemon.stats[++subcount].base_stat
                },
                {
                    name: "defense",
                    base_stat: pokemon.stats[++subcount].base_stat
                },
                {
                    name: "special-attack",
                    base_stat: pokemon.stats[++subcount].base_stat
                },
                {
                    name: "special-defense",
                    base_stat: pokemon.stats[++subcount].base_stat
                },
                {
                    name: "speed",
                    base_stat: pokemon.stats[++subcount].base_stat
                }
            ],
            moves: []
        })
    }

    return res.json(team);
})

module.exports = router;





