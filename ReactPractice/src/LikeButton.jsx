import { useState } from 'react'
import './App.css'

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setIsLiked(!isLiked);
  }

  let styles = {color : "red"}

  return (
    <>
      <button onClick={toggleLike}>
        {isLiked ? <i className="fa-solid fa-heart"  style={styles}></i>
                 : <i className="fa-regular fa-heart" ></i>}
        {isLiked ? "Liked" : "Not Liked"}
      </button>
      
    </>
  )
}

export default LikeButton;
