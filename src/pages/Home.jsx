import React from 'react'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const Home = () => {
    return (
        <>
            <section className=" pb-16 flex px-40  items-center justify-center">
                <div className="flex flex-row items-center">
                    <div className=" w-96">
                        <h1 className=" text-3xl font-extrabold pb-2 ">Read the most interesting articles</h1>
                        <h4 className=" text-base">From year to year we strive to invent the most innovative technology that is
                            used by both small progress enterprises and space cagaoo Read the most interesting articles
                            From year to year we strive to invent the most innovative technology that is
                            used by both small progress enterprises and space cagaoo Read the most interesting articles
                            From year to year we strive to invent the most
                        </h4>
                        <div className=' pt-3'>
                            <button className=' h-10 p-5 flex items-center  text-white rounded-xl bg-black'>Ler mais</button>
                        </div>
                    </div>
                    <div className=" w-26">
                        <img className="z-10" src="https://i.pinimg.com/564x/d8/d0/7e/d8d07e450d6e57e97eee91117330fdc1.jpg" alt="" />
                    </div>
                </div>
            </section>
            <div className=' flex items-center justify-center px-40 flex-col  '>
                <div className='font-extrabold text-3xl'>
                    <h1>Read one of the best articles in the world</h1>
                </div>
                <div className='p-3'>
                    <h4 className="  text-center text-base">From year to year we strive to invent the most innovative technology that is
                        used by both small progress enterprises and space cagaoo Read the most interesting articles
                        From year to year we strive to invent the most innovative technology that is
                        used by both small progress enterprises and space cagaoo Read the most interesting articles
                        From year to year we strive to invent the most
                    </h4>
                </div>
                <div>
                    <img className='w-[28em]' src="https://i.pinimg.com/564x/45/84/79/458479d0e778b8d77cc95d0f098bee67.jpg" alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center pb-8 pt-10'>
                <h1 className=' text-3xl font-extrabold'>Here are some of the most read</h1>
               
            </div>

        </>
    )
}

export default Home