import react, { useEffect, useState } from "react";
import './HomePage.css';
import { useSocket } from "../contexts/SocketContext";

function HomePage(){
    const socket = useSocket();
    const [roomId, setRoomId] = useState(0);
    const [team, setTeam] = useState([]);

    const handleRoomJoin = (e) => {
        e.preventDefault();
        socket.emit("joinRoom", roomId)
    }

    const generateTeam = async(e) => {
        const data = await fetch("http://localhost:4000/api/pokemon/generateTeam")
        const teamdata = await data.json();
        setTeam(teamdata);
    }

    useEffect(()=>{
        console.log(team);
    }, [team])

    return (
        <div className="homepage">
            <div className="introBox">
                <h1>Welcome to my battle sim!</h1>
                <p>Every pokemon battle is random, consisting of generations 1 and 2 thus far.
                    Though not perfect, an basic algorithm is in place to generate decent movesets for your pokemon. Enter a room to connect with a friend!
                    Not functional as of yet.</p>
                <form onSubmit={handleRoomJoin}>
                    <input type="number" name="roomNumber" className="roomNumber" value={roomId} placeholder="Room Number..." onChange={(e) => setRoomId(e.target.value)}/>
                    <input type="submit"/>
                </form>
            </div>
            <div className="introBox">
                <p>Prepping testing on the home page for team generation</p>
                <button onClick={generateTeam}>Generate Team</button>
                <div className="teamBox">
                    {team.map(team => (
                        <p>{team.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage;