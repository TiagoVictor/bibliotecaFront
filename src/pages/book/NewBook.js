import { useState } from "react";
import Header from "../../components/Header"
import Input from "../../components/Input";
import Label from "../../components/Label";
import InputButton from "../../components/InputButton";
import Footer from "../../components/Footer";

const NewBook = () => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [pages, setPages] = useState(0);
    const [author, setAuthor] = useState("");
    const [edition, setEdition] = useState(0);
    const [publishingCompany, setPublishCompany] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Evento do submit");
        console.log(name, bio, pages, author, edition, publishingCompany);
    }

    return (
        <>
            <Header />
            <div className="w-full h-full max-w-2xl m-auto flex items-center bg-teal-300 mt-20 rounded">
                <form onSubmit={handleSubmit} className="m-auto text-left">
                    <h1 className="text-2xl">Cadastro de livros</h1>
                    <div className="mt-2">
                        <Label labelFor={name} value={"Nome:"}/>
                        <div>
                            <Input type={"text"} name={name} placeHolder={"Digite o nome do livro"} setPropertie={setName} value={name}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={bio} value={"Bio:"}/>
                        <div>
                            <Input type={"text"} name={bio} placeHolder={"Digite a bio do livro"} setPropertie={setBio} value={bio}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={pages} value={"Paginas:"}/>
                        <div>
                            <Input type={"number"} name={pages} placeHolder={"Digite a quantidade de paginas"} setPropertie={setPages} value={pages}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={author} value={"Author:"}/>
                        <div>
                            <Input type={"text"} name={author} placeHolder={"Digite o nome do author"} setPropertie={setAuthor} value={author}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={edition} value={"Edição:"}/>
                        <div>
                            <Input type={"number"} name={edition} placeHolder={"Digite a edição"} setPropertie={setEdition} value={edition}/>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label labelFor={publishingCompany} value={"Editora:"}/>
                        <div>
                            <Input type={"text"} name={publishingCompany} placeHolder={"Digite a editora"} setPropertie={setPublishCompany} value={publishingCompany}/>
                        </div>
                    </div>
                    <InputButton labelValue={"Enviar"}/>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default NewBook;