import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import NewBook from "../pages/book/NewBook";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/new-book" element={<NewBook/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;