import React from 'react'

const HomeFlex = () => {
  return (
    <>
        <div className='w-full bg-[#171717] flex justify-center'>
            <div className='w-11/12'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 mb-16'>
                    <div className='grid-items text-white flex flex-col justify-center items-center w-full'>
                        <div className='text-2xl md:text-5xl font-semibold tracking-wider'>Pichai <br/> Sundararajan
                            <div className='text-xl my-6 position-text'>CEO of&nbsp;
                            <span>G</span>
                            <span>o</span>
                            <span>o</span>
                            <span>g</span>
                            <span>l</span>
                            <span>e</span>
                            </div>
                        </div>
                    </div>
                    <div className='grid-items'>
                        <img className='rounded-full w-[500px] h-[500px] object-cover' src="./images/Sundar.webp" alt="" />
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default HomeFlex