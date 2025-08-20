import React , {useState} from 'react'
import CommentsForm from './CommentsForm'
import "./comment.css"

    function Comment() {
        let [comment,setComment] = useState([{
            username : "Abhishek",
            remarks : "great job",
            rating : 5
        }]);

    let addNewComment = (comment) => {
        setComment((currComment) => [...currComment , comment]);
    };

  return (
    <>
        <div>
            <h3>All comments</h3>
            {   
                comment.map((comment , idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>
                        &nbsp;
                        <span>(rating is {comment.rating})</span>
                        <p>- {comment.username}</p>
                    </div>
                ))
            }
        </div>
        <hr></hr>
        <CommentsForm addNewComment={addNewComment}/>
    </>
  )
}

export default Comment;