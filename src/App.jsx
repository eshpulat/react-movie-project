import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="pages" element={<Pages />} />
                <Route path="blog" element={<Blog />} />
                <Route path="portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
