import './Input.css'

const Input = (props) => {

    const placeholderModify = `${props.placeholder}...`
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className='input'>
            <label>
                {props.label}
            </label>
            <input
            required={props.obrigatorio}
            value={props.valor}
            onChange={aoDigitado}
            placeholder={placeholderModify}/>
        </div>
    )
}

export default Input;