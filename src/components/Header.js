import { Link } from "react-router-dom";
import Button from "./Button";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
    return (
        <nav className="w-full h-20 bg-gray-100 border-b border-gray-300">
            <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
                <HeaderLogo />

                <Link to="/new-book">
                    <Button name={"Cadastrar Livro"} variant={'dark'} />
                </Link>
            </div>
        </nav>
    )
}

export default Header;
