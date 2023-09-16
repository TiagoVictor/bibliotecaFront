import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import NewBook from "../pages/book/NewBook";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Privacy from "../pages/privacy/Privacy";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/new-book" element={<NewBook/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;