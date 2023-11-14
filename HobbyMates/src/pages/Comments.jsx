import React, {useState, useEffect} from 'react'
import {supabase} from '../client'

const Comments =() => {
    const [comments, setComments] = useState([])

    useEffect(() =>{
        fetchComments()
    }, [])

    const fetchComments = async() =>{
        const{data: comments, error} = await supabase.from('Comments')
        .select("*")
        .order('create_at', {ascending: true})

        if (error){
            console.log(error)
        }else{
            setComments}
    }
}

return (
    <div>
        {comments.map(comment =>(
            <div key = {comment.id}>
                <p>{comment.user_id}</p>
                <p>{comment.created_at}</p>
                <p>{comment.body}</p>
            </div>
        ))}
    </div>
)


export default Comments;