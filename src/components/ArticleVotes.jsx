import { useState } from 'react';
import thumbsdown from '../assets/thumbsdown.jpg';
import thumbsup from '../assets/thumbsup.jpg';

function ArticleVotes({ article }){
    const [votes, setVotes] = useState(article  || 0);

    const handleThumbsUp = ()=> {
        setVotes((votes) => votes + 1)
    }

    const handleThumbsDown = ()=> {
        setVotes((votes) => votes - 1)
    }

    return (
    <div className="button-box">
    <button className="thumbs-down-button" onClick={handleThumbsDown}>
      <img src={thumbsdown} alt="Thumbs down" className="thumbs-down-img" /></button>
      <p className="single-article-votes">{votes}</p>
    <button className="thumbs-up-button" onClick={handleThumbsUp}>
      <img src={thumbsup} alt="Thumbs up" className="thumbs-up-img" />
    </button>  
    </div>
    )

}

export default ArticleVotes;