import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import NewBook from "../pages/NewBook";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Book from "../pages/Book";
import EditBook from "../pages/EditBook";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/new-book" element={<NewBook/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/book" element={<Book />} />
                <Route path="/edit-book/:id" element={<EditBook />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;