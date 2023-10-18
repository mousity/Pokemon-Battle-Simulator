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

// Generate moves function. ONLY generates moves with not-null power, resulting in too-high load times
// Planning on using a dictionary to provide a list of excluded moves instead of checking power
async function generateMoves(pokemon) {
    const moves = [];
    try {
        for(let i = 0; i < 4; i++) {
            const randomNum = Math.floor(Math.random() * (pokemon.moves.length - 1) + 1);
            let moveData = pokemon.moves[randomNum].move;
            const moveDetails = await axios.get(`${moveData.url}`);
            if(moveDetails.data.power == null) {
                i--;
            } else {
                moves.push({
                    name: moveDetails.data.name,
                    power: moveDetails.data.power
                });
            }
        }

        return moves;
    } catch (error) {
        console.error("Error generating moves!", error);
        return null;
    }
}

async function checkIfEvolved(pokemon) {
    try {

    } catch (error) {
        console.error("Cannot check if evolved!", error);
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
    // Team array to return to the frontend. Max and min signify the range of pokemon
    const team = []
    const max = 152, min = 1;

    // Fill a team with 6 pokemon, needs to be changed later
    for(let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * (max - min) + min);
        const pokemon = await getPoke(randomNum);
        const moves = await generateMoves(pokemon);
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
            moves: [moves]
        })
    }

    return res.json(team);
})

module.exports = router;





