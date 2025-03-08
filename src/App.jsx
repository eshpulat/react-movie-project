import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Homepagedesktop from "./pages/Homepage-desktop";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepagedesktop />} />
                <Route path="pages" element={<Pages />} />
                <Route path="blog" element={<Blog />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
