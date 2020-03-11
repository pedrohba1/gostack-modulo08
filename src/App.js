import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [tech, setTech] = useState([]);
    const [newTech, setNewTech] = useState("");


    function handleAdd() {
        setTech([...tech, newTech]);
    }

    useEffect(() => {
        const storageTech = localStorage.getItem('tech');
        if(storageTech){
            setTech(JSON.parse(storageTech));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tech", JSON.stringify(tech));
    }, [tech]);

    return (
      <>
        <ul>
          {tech.map(item => (
            <li key={item}>{item}</li>
                ))}

        </ul>

        <input onChange={e => setNewTech(e.target.value)} value={newTech} />
        <button type="button" onClick={handleAdd}>
          adicionar
        </button>

      </>
    );
}

export default App;
