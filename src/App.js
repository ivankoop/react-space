import React from "react";
import Rocket from "./components/Rocket";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Rocket xPos={300} speed={10} />
        </div>
    );
}

export default App;
