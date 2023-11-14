import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import DisplayComments from '../pages/DisplayComments';
import { supabase } from '../client'; 
import './PlayerCard.css';




const PlayerCard = (props) => {

    const [likes, setLikes] = useState(props.likes); 

    const updateLikes = async () => {
        const newLikes = likes + 1;
        const { error } = await supabase
            .from('Players')
            .update({ likes: newLikes })
            .eq('id', props.id); 

        if (error) {
            throw error;
        }

        setLikes(newLikes); 
    }

    return (
        <div className="PlayerCard">
            <h2> {props.name} </h2>
            <h3> {props.skill} </h3>
            <p> {props.requirement} </p>
            <img src={props.image} alt={`${props.name}`} />
            <button onClick={updateLikes}>Likes ❤️ {likes}</button>
            <Link to={`/edit/${props.id}`}>Edit Player's Post</Link>
            <DisplayComments playerId={props.id} />
        </div>
    );
};

export default PlayerCard;
