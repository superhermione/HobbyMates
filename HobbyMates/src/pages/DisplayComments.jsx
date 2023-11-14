import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import './DisplayComments.css'

const DisplayComments = ({ playerId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchComments();
    }, [playerId]);

    const fetchComments = async () => {
        try {
            const { data, error } = await supabase.from('Comments')
                .select("*")
                .eq('user_id', playerId) 
                .order('created_at', { ascending: true });

            if (error) {
                throw error;
            }

            setComments(data);
        } catch (err) {
            console.error('Error fetching comments:', err.message);
            setError('Error fetching comments');
        }
    }

    const handleAddComment = async (e) => {
        
        try {
            const { data, error } = await supabase.from('Comments')
                .insert([{ body: newComment, user_id: playerId }]); 

            if (error) {
                throw error;
            }

            setComments([...comments, data[0]]);
            setNewComment('');
        } catch (err) {
            console.error('Error adding comment:', err.message);
            setError('Error adding comment');
        }
    }

    const handleDeleteComment = async(commentId) => {
        try{
            const{error} = await supabase
                .from('Comments')
                .delete()
                .match({id: commentId});
            if(error){
                throw error;
            }
            setComments(comments.filter(comment => comment.id !== commentId));
        }catch(err){
            console.error(err.message);
        }
    }

    return (
        <div className='comments'>
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleAddComment}>
                <input 
                    type="text" 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment" 
                />
                <button type="submit" className='add-comment-btn'>Post Comment</button>
            </form>
            {comments.length > 0 ? (
                comments.map(comment => (
                    <div key={comment.id} className="comment-container">
                        <p>Comment ID: {comment.id}</p> {/* Display comment ID */}
                        <p className="comment-body">Posted on: {new Date(comment.created_at).toLocaleString()}</p>
                        <p>{comment.body}</p>
                        <button onClick ={() => handleDeleteComment(comment.id)} className="delete-comment-btn">Delete</button>
                    </div>
                ))
            ) : (
                <p>No comments available.</p>
            )}
        </div>
    );
}

export default DisplayComments;
