import { useState } from 'react';
import Banner from './Components/Banner/Banner'
import Description from './Components/Description/Description'
import Form from './Components/Form/Form'
import ListaAnimes from './Components/ListaAnimes/ListaAnimes'

import './App.css'

function App() {

  const situacoes = [
    {
      situacao: 'Assistindo',
    },
    {
      situacao: 'Concluído',
    }
  ]

  const estrelas = [
    {
      id: 1,
      quantidade: '★'
    },
    {
      id: 2,
      quantidade: '★★'
    },
    {
      id: 3,
      quantidade: '★★★'
    },
    {
      id: 4,
      quantidade: '★★★★'
    },
    {
      id: 5,
      quantidade: '★★★★★'
    }
  ]

  const [animes, setAnimes] = useState([]);

  const aoNovoAnimeAdicionado = (anime) => {
    setAnimes([...animes, anime])
  }

  console.log(...animes)

  return (
    <div className="App">
      <Banner />
      <aside className='content-menu'>
        <Form situacoes={situacoes.map(situacao => situacao.situacao)} estrela={estrelas.map(estrela => estrela.quantidade)} aoAnimeCadastrado={anime => aoNovoAnimeAdicionado(anime)}/>
        <Description />
      </aside>
      {situacoes.map(situacao => <ListaAnimes
          key={situacao.situacao}
          situacao={situacao.situacao}
          animes={animes.filter(anime => anime.situacao === situacao.situacao)}
        />)}
    </div>
  )
}

export default App
