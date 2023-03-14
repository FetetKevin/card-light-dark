import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="container">
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode((state) => !state)}
            />
            <Main darkMode={darkMode} />
        </div>
    );
}
