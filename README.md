# Pokemon-Battle-Simulator

A project currently at the start of development. No technical details will be available yet, but the readme can still be spiced up! My initial plan involves ONLY random battles, with an algorithm to pick out a decent moveset. Later on, I may use a database to add pre-determined movesets for random battles, a user account interface, and saved team compilations. Replays may also be an option in the future.

## Stack

For this project I've decided to use the PERN stack. PostgreSQL will not come into play until later in development, but the ERN part will still apply for now.

For my frontend, I'm planning on using HTML, CSS, JavaScript, and React. Tailwind is something I've been considering but am not sure if I want to implement it into the project, as I prefer raw CSS files.
For my backend, I'm planning on using Node.js, Express.js, PostgreSQL, PokeAPI, and Socket.io. I'm new to using Socket.io, but I want to give players the opportunity to connect with each other using custom rooms. It's also something I'm just interesting in learning!

## How do I Run it?

Easy! If you have a github account, you can use `git clone` on my repository. If you don't have a github account, simple download the code as a ZIP file and unzip it in the directory of your choice. In your terminal, move to the directory `Pokemon-Battle-Simulator` is in. From here, move to the `server` folder, then run `npm install`. Once we've installed dependencies for the server, while we are still in the server folder, run `npm install`. 

The next step is similar; make another terminal (WITHOUT closing the first one!) and move to `Pokemon-Battle-Simulator` again. This time, we'll move further; move to the `client` folder, then move again to the `PokemonSim` folder. Here, run `npm install`. After we've installed our frontend dependencies, run `npm run dev`. Will continue this section when I'm more motivated to do so. `In construction!`

## My Own Quick History

I used to play pokemon competitively. I was never that great! I knew how to build great teams, but I mostly stuck to pokemon I liked, even if it meant having four (4!!!) pokemon out of my 6 being weak to ice. I spent all day breeding for stats, moves, and training for 'extra' stats. At some point, though, I stopped playing. I didn't like the new battle gimmicks of the newer generations, and I haven't bothered to buy the latest game. I didn't stop loving competitive, I just didn't like the direction the games were going in. So, I moved to [Pokemon Showdown!](https://play.pokemonshowdown.com/)

Pokemon Showdown lets you make your own team, adhering to the rules and limitations of whichever generation you prefer. They have their own competitive ladder separate from Pokemon's official format (VGC) and are great to use when you just want to have a good battle in good spirit. No need to breed pokemon for perfect stats or hunt for hard-to-get items; you can make a team in all of 5 minutes. Random battles are great for people who just want to jump into the fun without making their own team, too. Am I rusty? Bad at the game? An awful team builder? Probably! But I've always had fun using Pokemon Showdown, and I wanted to challenge myself to code something like it as a fun project.
