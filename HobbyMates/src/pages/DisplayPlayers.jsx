import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { supabase } from "../client"
import PlayerCard from "../components/PlayerCard";
import './DisplayPlayers.css';
import { useOutletContext } from 'react-router-dom';


const DisplayPlayers = ({id}) => {
    const[players, setPlayers] = useState();
    const [error, setError] = useState('');
    const[likes, setLikes] = useState(0);
    


    useEffect(() => {
        fetchPlayers();
    }, [])

    const fetchPlayers = async () => {
        const {data} = await supabase.from('Players').select()
        console.log(data);
        setPlayers(data);
        setLikes(data[0].likes);
    }

    const updateLikes = async () => {
        const {data} = await supabase.from('Players').select()
        .update({likes: likes +1})
        .eq('id', id);
        setLikes(likes + 1);
    }

    return(
        <div className="DisplayPlayersCards">
            {players && players.length > 0 ?
                players.map((player) =>    
                        <PlayerCard
                            id={player.id}
                            name={player.name}
                            skill={player.skill}
                            requirement={player.requirement}
                            image = {player.image}
                            likes = {player.likes}
                        />
                ): <h1> No Posts Found, Please Create a Post</h1>
            }
        </div>
    )
}

export default DisplayPlayers;