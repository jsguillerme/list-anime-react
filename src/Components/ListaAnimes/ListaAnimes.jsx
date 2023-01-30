import { useState } from 'react';
import Input from '../Input/Input';
import Animes from '../Animes/Animes'
import './ListaAnime.css';

const ListaAnimes = (props) => {
    const [anime, setAnime] = useState('');

    if (props.situacao === 'Assistindo' && props.animes.length > 0) {
        const modifyTextSituation = 'Assistindo atualmente';
        return (
            <section className='lista-animes'>
                <div className='lista-text-search'>
                    <h3>{modifyTextSituation}</h3>
                    <Input
                        label=""
                        valor={anime}
                        obrigatorio={false}
                        placeholder="Pesquise o anime"
                        aoAlterado={valor => setAnime(valor)}
                    />
                </div>
                <div className='animes'>
                    {props.animes.map(anime => <Animes
                        key={anime.nome}
                        nome={anime.nome}
                        imagem={anime.imagem}
                        estrela={anime.estrela}
                    />)}
                </div>
            </section>
        )
    } else if (props.situacao === 'Concluído' && props.animes.length > 0) {
        const modifyTextSituation = 'Animes concluídos';
        return (
            props.animes.length > 0 && <section className='lista-animes'>
                <div className='lista-text-search'>
                    <h3>{modifyTextSituation}</h3>
                    <Input
                        label=""
                        valor={anime}
                        obrigatorio={false}
                        placeholder="Pesquise o anime"
                        aoAlterado={valor => setAnime(valor)}
                    />
                </div>
                <div className='animes'>
                    {props.animes.map(anime => <Animes
                        key={anime.nome}
                        nome={anime.nome}
                        imagem={anime.imagem}
                        estrela={anime.estrela}
                    />)}
                </div>
            </section>
        )
    }


}

export default ListaAnimes;