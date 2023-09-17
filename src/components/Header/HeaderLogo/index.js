import { Link } from "react-router-dom";

const HeaderLogo = () => {
    return (
        <Link to="/">
            <p className="text-2xl">
                My<span className="font-bold italic">Library</span>
            </p>
        </Link>
    )
}

export default HeaderLogo;