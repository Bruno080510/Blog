import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function PostagemSeparada() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [postagem, setPostagem] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagens/${id}`)
        .then((res) => res.json())
        .then((json) => setPostagem(json));
    }
  }, [id]);

  return (
    <section className=" pt-32 pb-16 flex flex-col px-10  items-center justify-center">
      
      <div>
        <h1 className=' text-7xl font-bold p-4 pb-8'>Após 28 anos, Brigada Militar está perto de deixar a segurança do Presídio Central</h1>
      </div>
        <div className='flex items-center justify-center '>
        <img className='className= w-[60rem] rounded-lg'  src="https://www.rbsdirect.com.br/filestore/4/1/8/0/7/7/4_ec60a8066b0aa69/4770814_a517b08eec4e672.jpg?w=700&rv=2-10-05&safari" alt="" />
        </div>
       <div>
        <p className=' px-24 pt-8 text-base'>O motim mais violento promovido no Presídio Central, no gélido inverno de 1994, ganhou as ruas de Porto Alegre na noite de 8 de julho. A fuga cinematográfica de 10 presos, com nove reféns na mira de armas dentro de veículos, culminou em perseguição, tiroteio e morte, incluindo a invasão de um hotel de luxo no centro da Capital. A perigosa e sangrenta caçada aos foragidos encerrou com quatro criminosos e um policial civil mortos a tiros.
    O episódio promovido por integrantes da Falange Gaúcha — primeira facção a se formar no Estado — marcou a série de motins que tomou o Central entre 1987 e 1994. Um ano depois, após novas 
    rebeliões, uma delas que levou à maior fuga em massa ocorrida no Rio Grande do Sul, com 45 fugitivos, e troca de governo, foi adotada nova estratégia: entregar à Brigada Militar o controle da cadeia. A medida adotada em 25 de julho de 1995 deveria ser temporária, de seis meses. Vinte e oito anos depois, 
    cerca de 200 policiais militares ainda atuam na agora chamada Cadeia Pública. Mas isso está perto de acabar</p>
    <p className='px-24 pt-2 text-base'>O episódio promovido por integrantes da Falange Gaúcha — primeira facção a se formar no Estado — marcou a série de motins que tomou o Central entre 1987 e 1994. Um ano depois, após novas rebeliões, uma delas que levou à maior fuga em massa ocorrida no Rio Grande do Sul, com 45 fugitivos, e troca de governo, foi adotada nova estratégia: entregar à Brigada Militar o controle da cadeia. A medida adotada em 25 de julho de 1995 deveria ser temporária, de seis meses. Vinte e oito anos depois, cerca de 200 policiais militares ainda atuam na agora chamada Cadeia Pública. Mas isso está perto de acabar.

Segundo o secretário de Sistemas Penal e Socioeducativo, Luiz Henrique Viana, a data deve ser definida até o fim da semana. O intuito é de que o retorno dos agentes da Superintendência dos Serviços Penitenciários (Susepe) ocorra em setembro. Conforme a Secretaria da Segurança Pública do Estado (SSP-RS), os PMs que deixarão a segurança da cadeia serão remanejados. Devem passar a atuar no policiamento tanto da Capital como de outros municípios, preferencialmente para os considerados prioritários pelo RS Seguro.</p>
       </div>
      </section>
  );
}

export default PostagemSeparada;
