import react from "react";

function HomePage(){
return (
    <div>
        <h2>Welcome to my battle sim!</h2>
        <p>Every battle is random, consisting of generations 1 and 2 thus far. Enter a room to connect with a friend!</p>
        <form>
            <input type="number" name="roomNumber" className="roomNumber" placeholder="Room Number..."/>
        </form>
    </div>
)
}

export default HomePage;