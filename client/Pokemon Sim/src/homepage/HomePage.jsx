import react, { useState } from "react";
import './HomePage.css';
import { useSocket } from "../contexts/SocketContext";

function HomePage(){
    const socket = useSocket();
    const [roomId, setRoomId] = useState(0);

    const handleRoomJoin = () => {
        socket.emit("joinRoom", roomId)
    }

    return (
        <div>
            <h2>Welcome to my battle sim!</h2>
            <p>Every pokemon battle is random, consisting of generations 1 and 2 thus far.
                Though not perfect, an basic algorithm is in place to generate decent movesets for your pokemon. Enter a room to connect with a friend!
                Not functional as of yet.</p>
            <form>
                <input type="number" name="roomNumber" className="roomNumber" value={roomId} placeholder="Room Number..." onChange={(e) => setRoomId(e.target.value)}/>
                <input type="submit" onClick={handleRoomJoin}/>
            </form>
        </div>
    )
}

export default HomePage;