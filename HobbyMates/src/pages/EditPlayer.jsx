import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import './EditPlayer.css'

const EditPlayer = () => {
    let params = useParams();
    const[player, setPlayer] = useState(null);

    useEffect(() => {
        fetchPlayer();
    }, [])

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(player);
        setPlayer( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const fetchPlayer = async () => {
        const {data} = await supabase.from('Players').select().eq('id', params.id);
        console.log(data[0]);
        setPlayer(data[0]);
    }

    const deletePlayer = async (event) => {
        event.preventDefault();
        await supabase.from('Players').delete().eq('id', params.id);
        window.location = '/';
    }

    const updatePlayer = async (event) => {
        event.preventDefault();

        await supabase.from('Players').update(
            {
                name: player.name, 
                skill: player.skill, 
                requirement: player.requirement,
                image: player.image
            }).eq('id', params.id);

        window.location = '/';
    }

    return(
        <div className="editPlayerWrapper">
            <h3> Edit Player </h3>
            {player && 
            <form onSubmit={updatePlayer} onChange={handleChange}>
                <label for='name'> Name</label> <br/>
                <input type="text" id = "name" name = "name" value = {player.name}/> <br/>

                <label for='skill'> Skill</label> <br/>
                <input type="text" id = "skill" name = "skill" value = {player.skill}/> <br/>

                <label for='requirement'> Looking for someone...</label> <br/>
                <textarea rows="5" cols="50" type="text" id = "requirement" name = "requirement" value = {player.requirement}/> <br/>

                <label for = 'image'> User Image </label>
                <input type="url" name="image" value={player.imagel} onChange={handleChange}/>

                <input type = "submit" value = "submit"/>
                <button className="deleteButton" onClick={deletePlayer}> Delete Player </button>

            </form>
            }
        
        </div>
    )
}

export default EditPlayer