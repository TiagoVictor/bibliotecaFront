const Button = ({name, variant}) => {
    let bgColor = 'text-black';
    
    if (variant === 'primary'){
        bgColor = 'bg-primary text-white';
    }

    if (variant === 'light'){
        bgColor = 'bg-primaryLight text-white';
    }

    if (variant === 'dark'){
        bgColor = 'bg-primaryDark text-white';
    }

    return(
        <button className={'py-2 px-4 rounded-md font-bold ' + bgColor}>
            {name}
        </button>
    )
}

export default Button;