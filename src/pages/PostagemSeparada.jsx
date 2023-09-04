import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


function PostagemSeparada({}) {
  const {i} = useParams()
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
      <div className='flex items-center justify-center'>
        <img className='w-[60rem] rounded-lg' src={postagem && postagem.thumbImage} alt="" />
      </div>
      <div>
      <p className='p-4 pb-8'>{postagem && postagem.description}</p>
      </div>
    </section>
  );
  
}

export default PostagemSeparada;