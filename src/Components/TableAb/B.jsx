import React from 'react'
import './Box.css'


const myComponent = {
  width: '300px',
  height: '300px',
  overflow: 'scroll',
  overflowX: 'hidden',
};
const B = (props) => {
  
 const {set} = props
 console.log('recive',set)
  return (
    
    <div className='box'>
       Table B
      
      <ul>
      {set}
        </ul>
      
       
      
       </div>
  )
}

export default B