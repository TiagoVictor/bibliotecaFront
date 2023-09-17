import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Book = () => {

    const [item, setItem] = useState([]);


    useEffect(() => {
        axios({
            method: "get",
            url: "https://localhost:7240/book",
            responseType: "json",
        }).then(function (response) {
            setItem(response.data);
        })
    }, [])

    return (
        <>
            <Header />
            <div className="w-full h-full max-w-4xl m-auto mt-3 flex items-center">
                <Link to={"/new-book"}>
                    <Button name={"Cadastrar livro"} />
                </Link>
            </div>
            <div className="w-full h-full max-w-4xl m-auto flex items-center bg-teal-400 mt-20 rounded">
                <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b font-medium border-black">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Bio</th>
                            <th>Paginas</th>
                            <th>Autor</th>
                            <th>Edição</th>
                            <th>Editora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.map((book) => (
                            <tr className="border-b border-black hover:bg-teal-700" key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.bio}</td>
                                <td>{book.pages}</td>
                                <td>{book.author}</td>
                                <td>{book.edition}</td>
                                <td>{book.publishingCompany}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default Book;