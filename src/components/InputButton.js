const InputButton = ({labelValue}) => {
    return (
        <div className="mt-4 ml-12 pb-5">
            <input type="submit" value={labelValue} className="bg-teal-600 rounded w-20" />
        </div>
    )
}

export default InputButton;