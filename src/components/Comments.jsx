import { fetchComments } from "../api";
import React, { useState, useEffect } from 'react'
import loadingAnimation from '../assets/loadingAnimation.json'
import Lottie from "lottie-react"

function Comments({ article_id }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
        fetchComments(article_id)
          .then((fetchedComments) => {
            console.log("Fetched Comments:", fetchedComments);
            setComments(fetchedComments);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsError(true);
            setIsLoading(false);
          });
      }, [article_id]);
  
    if (isLoading) {
      return <Lottie animationData={loadingAnimation} className="loading-animation" />;
    }
  
    if (isError) return <p>Error loading comments.</p>;
  
    return (
        <div className="article-comments">
          <h3>Comments</h3>
          {comments && comments.length > 0 ? (
            <ul className="comments-list">
              {comments.map((comment) => (
                <li key={comment.comment_id} className="comment-card">
                  <div className="comment-title">
                    <p>Author: {comment.author}</p>
                    <p>Date: {new Date(comment.created_at).toLocaleDateString()}</p>
                  </div>
                  <p className="comment-body">{comment.body}</p>
                  <div className="comment-votes">
                    <p>Votes: {comment.votes}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet for this article.</p>
          )}
        </div>
      );
    }
  
  export default Comments;