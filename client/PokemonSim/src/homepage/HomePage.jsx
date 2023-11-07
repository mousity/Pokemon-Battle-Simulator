import react, { useEffect, useState } from "react";
import './HomePage.css';
import { useSocket } from "../contexts/SocketContext";

function HomePage(){
    const socket = useSocket();
    const [roomId, setRoomId] = useState(0);
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleRoomJoin = (e) => {
        e.preventDefault();
        socket.emit("joinRoom", roomId)
    }

    const generateTeam = async() => {
        setLoading(true);
        const data = await fetch("http://localhost:4000/api/pokemon/generateTeam")
        const teamdata = await data.json();
        setTeam(teamdata);
        setLoading(false);
    }

    useEffect(()=>{
        console.log(team);
    }, [team])

    return (
        <div className="homepage">
            <div className="left">
            <div className="introBox">
                <h1>Welcome to my battle sim!</h1>
                {loading ? <h2>loading...</h2> : <h2>done!</h2>}
                <p>Every pokemon battle is random, consisting of generations 1 and 2 thus far.
                    Though not perfect, an basic algorithm is in place to generate decent movesets for your pokemon.
                    
                    Generate a team! Once you're ready, enter a room to join with your team. Your first pokemon is your lead.</p>
                
            </div>
            <div className="pokeBox">
                {team == null ? null : <><div className="teamBox">
                    {team.map(team => (
                        <div className="pokeCard">
                            <img src={team.sprite}/>
                            <p className="pokeName">{team.name}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <form onSubmit={handleRoomJoin}>
                    <input type="number" name="roomNumber" className="roomNumber" value={roomId} placeholder="Room Number..." onChange={(e) => setRoomId(e.target.value)}/>
                    <input type="submit"/>
                </form>
                </div></>}
                <button onClick={generateTeam} className="generateTeamButton">Generate Team!</button>
                
            </div>
            </div>
            </div>
    )
}

export default HomePage;