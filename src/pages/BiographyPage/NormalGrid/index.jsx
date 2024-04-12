import React from 'react'

const NormalGrid = (props) => {
  return (
    <div className='biography-grid-item grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 mb-16 gap-16'>
        <div className='heading grid-items order-2 sm:order-2 md:order-1 lg:order:1 text-white flex flex-col justify-center w-full'>
            <div className='text-5xl italic font-semibold tracking-wider'>{props.heading}</div>
            <ul className='list-disc w-10/12 my-4'>
                {props.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            
        </div>
        <div className='image grid-items flex justify-center items-center order-1 sm:order-1 md:order-2 lg:order:2' >
            <img className='rounded-3xl' src={props.image} alt="" />
        </div>
    </div>
  )
}

export default NormalGrid