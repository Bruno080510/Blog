import React from 'react';
import { TERipple } from 'tw-elements-react';
import { useEffect, useState } from "react"
import {Routes, Route, useNavigate} from 'react-router-dom';


export default function Card() {
    const [user, setUser] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://api-rest-post-diegocandido.herokuapp.com/postagens/', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then((res) => res.json())
        .then((json) => setUser(json))
    }, [])


    function navigateTo(id) {
        navigate('/postagem');
      }
      

    return (
        <div className=' pt-28 px-24 pb-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {Boolean(user.length) && user.map((e, i) => (
                <div key={i} className="rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <TERipple>
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                            <div className="  w-auto h-44"> {/* Contêiner para definir o tamanho da imagem */}
                                <img className=" h-auto  w-auto rounded-t-lg" src={e.thumbImage} alt="" />
                            </div>
                            <a href="#!">
                                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                            </a>
                        </div>
                    </TERipple>
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {e.title}
                        </h5>
                        <TERipple >
                            <div className=''>
                            <button type="button" 
                            onClick={() => navigateTo(e.id)}
                            className="inline-block  rounded bg-slate-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                Ler mais
                            </button>
                            </div>
                            
                        </TERipple>
                    </div>
                </div>
            ))}
        </div>
    );
}
