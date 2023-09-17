const Input = ({ type, name, placeHolder, setPropertie, value }) => {
    return (
        <input id={name} type={type} name={name} placeholder={placeHolder} onChange={(e) => setPropertie((e.target.value))} value={value} className="rounded"/>
    )
}

export default Input;