import { useState } from "react";
import Header from "../../components/Header"

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
                    <div className="mt-2">
                        <label htmlFor="name">Nome:</label>
                        <div>
                            <input className="rounded-full" type="text" name="name" placeholder="Digite o nome do livro" onChange={(e) => setName((e.target.value))} value={name}></input>
                        </div>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="bio">Bio:</label>
                        <div>
                            <input type="text" name="bio" placeholder="Digite a bio do livro" onChange={(e) => setBio((e.target.value))} value={bio} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="pages">Paginas:</label>
                        <div>
                            <input type="number" name="pages" placeholder="Digite a quantidade de paginas" onChange={(e) => setPages((e.target.value))} value={pages} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="author">Author:</label>
                        <div>
                            <input type="text" name="author" placeholder="Digite o nome do author" onChange={(e) => setAuthor((e.target.value))} value={author} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="edition">Edição:</label>
                        <div>
                            <input type="number" name="edition" placeholder="Digite a edição" onChange={(e) => setEdition((e.target.value))} value={edition} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="publishingCompany">Editora:</label>
                        <div>
                            <input type="text" name="publishingCompany" placeholder="Digite a editora" onChange={(e) => setPublishCompany((e.target.value))} value={publishingCompany} />
                        </div>
                    </div>
                    <div className="mt-4 ml-12">
                        <input type="submit" value="Enviar" className="bg-teal-600 rounded w-20"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewBook;