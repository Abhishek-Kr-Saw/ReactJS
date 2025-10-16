import {Bookmark} from 'lucide-react'

function Card(props) {
  return (
    <div className="card">
          <div className="header">
            <img src={props.logo} alt="amazon-logo" />
            <button>Save <Bookmark size={16} strokeWidth={1.75} /></button>
          </div>
          <div className="section">
            <h1>{props.company} <span className='amz'>{props.date}</span></h1>
            <h2>Senoir UI/UX Design</h2>
            <div className='button'>
              <button>{props.tag1}</button>
              <button>{props.tag2}</button>
            </div>
          </div>
          <div className="footer">
            <div className="left-btm">
              <h3>{props.pay}</h3>
              <h6>{props.location}</h6>
            </div>
            <div className="right-btm">
              <button>Apply now</button>
            </div>
          </div>
        </div>
  )
}

export default Card