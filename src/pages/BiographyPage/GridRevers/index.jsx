import React from 'react'

const GridRevers = (props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 mb-16 gap-16'>
        <div className='grid-items'>
            <img className='rounded-3xl ' src={props.image} alt="" />
        </div>
        
        <div className='grid-items text-white flex flex-col justify-center w-full'>
            <div className='text-5xl italic font-semibold tracking-wider'>{props.heading}</div>
            <ul className='list-disc w-10/12 my-4'>
                <li className='my-2'>{props.item1}</li>
                <li className='my-2'>{props.item2}</li>
                <li className='my-2'>{props.item3}</li>
                <li className='my-2'>{props.item4}</li>
                <li className='my-2'>{props.item5}</li>
                
            </ul>
            
        </div>
        
    </div>
  )
}

export default GridRevers