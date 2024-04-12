import React from 'react'
import { Facebook, Instagram, Linkedin, X, Youtube } from 'react-feather'

const Footer = (props) => {
  return (
    <>
    <div className='w-full flex justify-center'>
            <div className='w-10/12'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-16 mt-16'>
                    <div className='grid-items flex flex-col justify-center w-full'>
                        <div className='text-2xl w-6/12 text-gray-800'>
                            {props.quote}
                        </div>
                        <div className='text-2xl font-semibold my-4 tracking-wider'>Sundar Pichai</div>
                    </div>
                    <div className='grid-items'>
                        <div className='text-3xl'>
                            Watch Sundar Pichai
                        </div>
                        <div className='my-4'>
                            <button className='text-2xl border border-black px-16 py-3 rounded-xl my-4 flex justify-center items-center'>
                                <div>watch on Youtube</div>
                                <div className='ml-2'> <Youtube color='red' size={28}/> </div>
                            </button>
                            <button className='text-2xl border border-black px-16 py-3 rounded-xl my-4 flex justify-center items-center'>
                                <div>watch on Linked In</div>
                                <div className='ml-2'> <Linkedin color='blue' size={28}/> </div>
                            </button>
                        </div>
                        <div className='flex w-4/12 justify-between'>
                            <Instagram/>
                            <X/>
                            <Facebook/>
                        </div>
                    </div>
                </div>
            
            </div>

        </div>
    </>
  )
}

export default Footer