import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


function PostagemSeparada({ }) {
  const { i } = useParams()
  const [postagem, setPostagem] = useState();
  console.log(i)

  useEffect(() => {
    if (i) {
      fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagem/${i}`)
        .then((res) => res.json())
        .then((json) => setPostagem(json))
        .catch((error) => {
          console.error('Erro ao buscar a postagem:', error);
        });
    }
  }, [i]);
  return (
    <section className="pt-32 pb-16 flex flex-col px-10 items-center justify-center">

      <div>
        <h1 className='text-7xl font-bold p-4 pb-8'>{postagem?.title}</h1>
      </div>
      <div className=' flex flex-row'>
        <div className='flex items-center justify-center'>
         <img className=" h-[40rem] max-w-full" src={postagem?.thumbImage} alt="" />
       </div>
       <div className='flex flex-col'>
          <div>
            <p className='p-4 pb-8'>{postagem && postagem.description}</p>
          </div>
          <div className=' flex flex-row justify-end'>
            <p className='pe-4 pb-8'>Escrito por: {postagem?.profileName}</p>
            <p className='pe-4 pb-8'> {postagem?.postDate}</p>
          </div>
       </div>
      </div>
     
    </section>
  );

}

export default PostagemSeparada;