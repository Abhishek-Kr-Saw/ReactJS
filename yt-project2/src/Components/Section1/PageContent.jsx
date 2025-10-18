import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function PageContent(props) {
  

  return (
    <div className='w-full h-[90vh] flex'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default PageContent