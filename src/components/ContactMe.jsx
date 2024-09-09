import React from 'react'
import Title from './whati is do/Title'

function ContactMe() {
    return (
        <>
            <div className='container mx-auto my-6'>
                <div className='w-3/5 mx-auto flex flex-col gap-9'>
                    <Title title={"Contact Me"} />
                    <p className='text-white text-center'>Please fill out the form below to discuse any work opurtunity</p>
                    <div>
                        <input
                            type="text"
                            name="name"
                            id=""
                            placeholder='Enter your name'
                            className='w-full bg-white outline-none border-black py-2 rounded-md'

                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="name"
                            id=""
                            placeholder='Enter your name'
                            className='w-full bg-white outline-none border-black py-2 rounded-md'

                        />

                    </div>

                    <div>

                        <textarea
                            name=""
                            id=""
                            placeholder='ennter your message'
                            className='w-full bg-white outline-none border-black py-2 rounded-md'

                        ></textarea>
                    </div>


                </div>

            </div>


        </>
    )
}

export default ContactMe
