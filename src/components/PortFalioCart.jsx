import React from 'react'

function PortFalioCart({image}) {
    return (
        <>
            <div className='col-span-4 w-full gap-5 border-white mx-auto'>
                <img src={image} alt="portfalio image" />
            </div>
        </>
    )
}

export default PortFalioCart
