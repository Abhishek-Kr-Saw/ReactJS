import React , {useState} from 'react'

function Form() {
    let [formData , setFormData] = useState({
        fullName : "",
        username : "",
        password : "",

    });

    let hanleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        
        setFormData((currData) => {
            // currData[fieldName] = newValue;
            // return {...currData , [fieldName] : newValue};

            return {...currData , [event.target.name] : event.target.value};
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName : "",
            username : "",
            password : "",
        })
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='fullName'>FullName</label>
            <input type='text' placeholder='Enter your name'
                value={formData.fullName} onChange={hanleInputChange}
                id='fullName' name='fullName'
            />
            <br></br>
            <label htmlFor='username'>UserName</label>
            <input type='text' placeholder='Enter username'
                value={formData.username} onChange={hanleInputChange}
                id='username' name='username'
            />

            <br></br>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter password'
                value={formData.password} onChange={hanleInputChange}
                id='password' name='password'
            />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form