import react from "react";

function HomePage(){
return (
    <div>
        <h2>Welcome to my battle sim!</h2>
        <p>Every pokemon battle is random, consisting of generations 1 and 2 thus far.
             Though not perfect, an basic algorithm is in place to generate decent movesets for your pokemon. Enter a room to connect with a friend!
              Not functional as of yet.</p>
        <form>
            <input type="number" name="roomNumber" className="roomNumber" placeholder="Room Number..."/>
            <input type="submit"/>
        </form>
    </div>
)
}

export default HomePage;