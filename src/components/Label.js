const Label = ({labelFor, value}) => {
    return (
        <label htmlFor={labelFor}>{value}</label>
    )
}

export default Label;