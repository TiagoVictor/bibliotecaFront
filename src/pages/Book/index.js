import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Book = () => {

    const [item, setItem] = useState([]);

    const fake = [
        {id:1, name:"Tiago", bio:"Bio teste",pages: 3, author: "Editor Teste", edition: 2, publishingCompany: "Editora Teste"},
        {id:2, name:"Victor", bio:"Bio teste 2",pages: 4, author: "Editor Teste 2", edition: 3, publishingCompany: "Editora Teste 2"},
        {id:3, name:"Oliveira", bio:"Bio teste 3",pages: 5, author: "Editor Teste 3", edition: 4, publishingCompany: "Editora Teste 3"}
    ]

    useEffect(() => {
        axios({
            method: "get",
            url: "https://localhost:7240/book",
            responseType: "json",
        }).then(function (response) {
            setItem(response.data);
        }).catch(function (error){
            setItem(fake)
        })
    }, [])

    return (
        <>
            <Header />
            <div className="w-full h-full max-w-4xl m-auto mt-3 flex items-center">
                <div className="mx-4">
                    <Link to={"/new-book"}>
                        <Button name={"Cadastrar livro"} />
                    </Link>
                </div>
            </div>
            <div className="mx-4">
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
            </div>
            <Footer />
        </>
    )
}

export default Book;