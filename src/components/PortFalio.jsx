import React from 'react'
import Title from './whati is do/Title'
import PortFalioCart from './PortFalioCart'

function PortFalio() {
  return (
    <>
    <div className='container mx-auto'>
        <Title title={"My portfalio"} />
        <div className='grid grid-cols-12 justify-center items-center gap-5 rounded-md'>
            <PortFalioCart image={"https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc"} />
            <PortFalioCart image={"https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc"} />
            <PortFalioCart image={"https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc"} />
            <PortFalioCart image={"https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc"} />
            <PortFalioCart image={"https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc"} />
            <PortFalioCart image={"https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc"} />

        </div>

    </div>
      
    </>
  )
}

export default PortFalio
