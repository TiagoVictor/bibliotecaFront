import { Link } from "react-router-dom";
import Button from "../Button";
import HeaderLogo from "./HeaderLogo";
import Footer from "../Footer";

const Header = () => {
    return (
        <nav className="w-full h-20 bg-teal-500">
            <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
                <div className="ml-4">
                    <HeaderLogo />
                </div>

                <div className="mr-4">
                <Link to="/book">
                    <Button name={"Livros"} />
                </Link>
                </div>
                <Footer />
            </div>
        </nav>
    )
}

export default Header;
