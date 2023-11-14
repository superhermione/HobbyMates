import { useState } from "react"
import { supabase } from "../client"
import './CreatePlayer.css'



const CreatePlayer = () => {

    const[player, setPlayer] = useState({name: "", skill: "", requirement: "", image: "", likes: "0"});

    const createPlayer = async (event) => {
        event.preventDefault();
        await supabase.from('Players').insert(
            {
                name: player.name, 
                skill: player.skill, 
                requirement: player.requirement,
                image: player.image
            }).select();
        
            window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("key: ", name, " value: ", value);
        setPlayer( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return(
        <div className="createPlayerBox">
            <form>
                <label> Name </label>
                <input type="text" name="name" value={player.name} onChange={handleChange}/>
                <br/>

                <label> Skill </label>
                <input type="text" name="skill" value={player.skill} onChange={handleChange}/>
                <br/>

                <label> Looking for someone...</label>
                <textarea rows="5" cols="50" type="text" name="requirement" value={player.requirement} onChange={handleChange}/>
                <br/>

                <label> User Image </label>
                <input type="url" name="image" value={player.imagel} onChange={handleChange}/>
                <br/>

                <button className="submitButton" onClick={createPlayer}> Submit </button>
            </form>
        </div>
    )
}

export default CreatePlayer