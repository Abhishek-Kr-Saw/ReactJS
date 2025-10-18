import RightCardContent from './RightCardContent'

function RightCard(props) {
  console.log(props.users);
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
        <img className='h-full w-full object-cover bg-transparent relative' src={props.img} alt="" />
        <RightCardContent key={props.id} id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard