import React from 'react'
import Cart from './Cart'
import Title from './Title'

function WhatiIDo() {
  return (
    <>
    <div className='container mx-auto'>
        <div className=''>
            <Title title = {"What i Do"} />
            <p className='text-white text-center px-14'>I am a skilled and passionate web designer with experience in creating visually appending and user-friendly website, i have a strong understanding of design and a keep eye for detail. i am profieient in HTML, CSS and javasript as well as design software such as adobe photoshop and illustrator</p>
            <Cart />
            <Cart />
            <Cart />
        </div>
    </div>
      
    </>
  )
}

export default WhatiIDo
