import RightCard from './RightCard'

function RightContent(props) {
  
  return (
    <div id='right' className='h-full w-6/10 flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6'>
      {props.users.map(function(ele , idx){
          return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag}color={ele.color}/>
      })}
    </div>
  )
}

export default RightContent