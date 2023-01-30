import './OptionList.css'

const OptionList = (props) => {
    return (
        <div className='options-list'>
            <label>
                {props.label}
            </label>
            <select onChange={ event => props.aoAlterado(event.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default OptionList;