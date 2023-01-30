import { useState } from 'react';
import Botao from '../Botao/Botao';
import Input from '../Input/Input';
import OptionList from '../OptionsList/OptionList';
import './Form.css'

const Form = (props) => {

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [situacao, setSituacao] = useState('');
    const [estrela, setEstrela] = useState('');

    const aoSalvar = (event) => {
        console.log(event)
        event.preventDefault();
        props.aoAnimeCadastrado({
            nome,
            imagem,
            situacao,
            estrela
        })
        setNome('')
        setImagem('')
        setEstrela('')
        setSituacao('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha as informações</h2>
                <h4>Adicione os dados do anime que você está assistindo</h4>
                <Input
                    label=""
                    valor={nome}
                    obrigatorio={true}
                    placeholder="Digite o nome do anime"
                    aoAlterado={valor => setNome(valor)}
                />
                <Input
                    label=""
                    valor={imagem}
                    obrigatorio={true}
                    placeholder="Digite o endereço da imagem"
                    aoAlterado={valor => setImagem(valor)}
                />
                <OptionList 
                    obrigatorio={true}
                    itens={props.situacoes}
                    valor={situacao}
                    aoAlterado={valor => setSituacao(valor)}
                />
                <OptionList
                    label=""
                    obrigatorio={true}
                    itens={props.estrela}
                    valor={estrela}
                    aoAlterado={valor => setEstrela(valor)}
                />
                <Botao>
                    Cadastrar Anime
                </Botao>
            </form>
        </section>
    )
}

export default Form;