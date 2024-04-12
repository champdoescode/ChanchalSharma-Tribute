import React from 'react'
import Footer from '../HomePage/Footer'
import { ArrowLeft } from 'react-feather'
import { NavLink } from 'react-router-dom'
import AllRightsReserved from '../HomePage/AllRightsReserved'

const FunFacts = () => {
  return (
    <>
        <div className='mt-28  h-[calc(100%_-_1rem)]'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full'>
                <div className='gird-items bg-neutral-800 py-6 flex justify-center'>
                    <img className='h-full rounded-xl grayscale' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/440px-Sundar_Pichai_-_2023_%28cropped%29.jpg" alt="" />

                </div>
                <div className='grid-items bg-neutral-200'>
                    <div className='flex justify-between items-center px-8 py-2'>
                        <div className='text-5xl text-neutral-800'>Pichai Sundararajan</div>
                        <NavLink to='/' className='bg-neutral-800 rounded-full'><ArrowLeft color='white' size={34}/> </NavLink>
                    </div>
                    <div className='px-8 w-7/12 text-sm text-neutral-600 mt-8'>
                    Pichai Sundararajan, better known as Sundar Pichai, is an Indian-born American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Pichai began his career as a materials engineer.
                    </div>
                    <div className='text-3xl px-8 text-neutral-600 mt-16'>
                        Fun Facts
                    </div>
                    <div className='flex w-full'>

                        <div className='px-8 w-6/12 text-sm'>
                        Sundar Pichai's journey from a modest upbringing in Chennai, India, to the pinnacle of the tech industry as the CEO of Google and Alphabet is an inspiring tale of determination and achievement. From a young age, Pichai displayed a keen interest in technology, which eventually led him to pursue advanced studies in the United States. His academic achievements, including scholarships and prestigious awards, underscored his intellect and dedication. Pichai's rise through the ranks at Google, from working on software products to overseeing key initiatives like Chrome and Android, highlights his exceptional leadership skills and vision for the future of technology. 

                        </div>
                        <div className='px-8 w-6/12 text-sm'>
                        Despite his high-profile position, Pichai remains grounded and approachable, embodying the values of humility and empathy. Beyond his professional accomplishments, Pichai's passion for cricket, multilingualism, and enthusiasm for artificial intelligence add depth to his personality, making him not only a respected CEO but also a relatable figure admired by many.
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer quote="'Let yourself feel insecure from time, it will help you grow as an individual.'"/>
        <AllRightsReserved/>
    </>
  )
}

export default FunFacts