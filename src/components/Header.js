import { Link } from "react-router-dom";
import Button from "./Button";
import HeaderLogo from "./HeaderLogo";
import Footer from "./Footer";

const Header = () => {
    return (
        <nav className="w-full h-20 bg-teal-500">
            <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
                <HeaderLogo />

                <Link to="/new-book">
                    <Button name={"Cadastrar Livro"} />
                </Link>
                <Footer />
            </div>
        </nav>
    )
}

export default Header;
