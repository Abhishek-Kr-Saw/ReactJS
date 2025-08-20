import React , {useState} from 'react'

function CommentsForm({addNewComment}) {
    let [formData , setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5
    })

    let handleInputChange = ((event) =>{
        setFormData((currData) => {
            return {...currData , [event.target.name] : event.target.value}
        })
    })

    let handleSubmit = ((event) => {
        event.preventDefault();
        console.log(formData);
        addNewComment(formData);
        setFormData({
            username : "",
            remarks : "",
            rating : 5
        })
    })
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">UserName</label>
            <input type='text' placeholder='Enter your username'
                   onChange={handleInputChange} id='username'
                   name='username' value={formData.username}
            />
            <br></br><br></br>

            <label htmlFor="remark">Remarks</label>
            <input type='text' placeholder='Enter remarks'
                   onChange={handleInputChange} id='remark'
                   name='remarks' value={formData.remarks}
            />
            <br></br><br></br>

            <label htmlFor="rating">Rating</label>
            <input type='number' max={5} min={1} 
                   onChange={handleInputChange} id='rating'
                   name='rating' value={formData.rating}
            />
            <br></br><br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CommentsForm