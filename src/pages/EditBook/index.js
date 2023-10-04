import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Label from "../../components/Label";
import Input from "../../components/Input";
import InputButton from "../../components/InputButton";

const EditBook = (props) => {
    let { id } = useParams();
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [pages, setPages] = useState(0);
    const [author, setAuthor] = useState("");
    const [edition, setEdition] = useState(0);
    const [publishingCompany, setPublishCompany] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: "get",
            url: `https://localhost:7240/Book/id?id=${id}`,
            responseType: "json",
        }).then(function (response) {
            setName(response.data.name)
            setBio(response.data.bio)
            setPages(response.data.pages)
            setAuthor(response.data.author)
            setEdition(response.data.edition)
            setPublishCompany(response.data.publishingCompany)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: "put",
            url: `https://localhost:7240/Book?id=${id}`,
            data: {
              name: name,
              bio: bio,
              pages: pages,
              author: author,
              edition: edition,
              publishingCompany: publishingCompany
            },
          }).then(function (response){
            if (response.data.success === true){
                navigate("/book");
            } else {
                console.log(response.data.message);
            }
          }).catch(function (response){
            console.log(response.response.data.message);
          });
    }

    return (
        <>
            <Header />
            <div className="w-full h-full max-w-2xl m-auto flex items-center bg-teal-300 mt-20 rounded">
                <form onSubmit={handleSubmit} className="m-auto text-left">
                    <h1 className="text-2xl">Cadastro de livros</h1>
                    <div className="mt-2">
                        <Label labelFor={"name"} value={"Nome:"}/>
                        <div>
                            <Input type={"text"} name={"name"} placeHolder={"Digite o nome do livro"} setPropertie={setName} value={name}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={"bio"} value={"Bio:"}/>
                        <div>
                            <Input type={"text"} name={"bio"} placeHolder={"Digite a bio do livro"} setPropertie={setBio} value={bio}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={"pages"} value={"Paginas:"}/>
                        <div>
                            <Input type={"number"} name={"pages"} placeHolder={"Digite a quantidade de paginas"} setPropertie={setPages} value={pages}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={"author"} value={"Author:"}/>
                        <div>
                            <Input type={"text"} name={"author"} placeHolder={"Digite o nome do author"} setPropertie={setAuthor} value={author}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={"edition"} value={"Edição:"}/>
                        <div>
                            <Input type={"number"} name={"edition"} placeHolder={"Digite a edição"} setPropertie={setEdition} value={edition}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={"publishingCompany"} value={"Editora:"}/>
                        <div>
                            <Input type={"text"} name={"publishingCompany"} placeHolder={"Digite a editora"} setPropertie={setPublishCompany} value={publishingCompany}/>
                        </div>
                    </div>
                    <InputButton labelValue={"Editar"}/>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default EditBook;