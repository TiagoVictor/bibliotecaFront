import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-teal-500 md:flex md:items-center md:justify-between md:p-6">
            <span class="text-sm text-black sm:text-center">© 2023 <a target="about_blank" href="https://github.com/TiagoVictor/" class="hover:underline">Tiago Victor</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
                <li>
                    <Link to="/about">
                        <p className="mr-4">Sobre</p>
                    </Link>
                </li>
                <li>
                    <Link to="/privacy">
                        <p className="mr-4">Politica de privacidade</p>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contato
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;