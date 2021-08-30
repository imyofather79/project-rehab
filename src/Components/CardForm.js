import React, { useState } from 'react'
import {useHistory} from "react-router-dom";
// import Nametag from './Nametag'


function CardForm ({onAddPatient}) {
    
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: "",
        status: "All",
        image: "",
    });

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    // function randNum() {
    //     return Math.floor(Math.random() * 10);
    //    }

    function handleSubmit(e){
        e.preventDefault();
    
        fetch("http://localhost:4000/patients", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
    },
        body: JSON.stringify({
        name: formData.name || "user",
        status: formData.status,
        // image: formData.image || "https://placebear.com/401/401",
        image: `https://placebear.com/${Math.floor(Math.random() * 100)+400}/${Math.floor(Math.random() * 100)+400}`,
            }),
        })
        .then((r) => r.json())
        .then((submit) =>{ 
            onAddPatient(submit);
            history.push("/room");
        })
    }


return (
        <section id="card">
            
            <h3>Your Info</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={formData.name}
                        name="name"
                        placeholder="your name here..."
                    />
                    <select 
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                            <option value="All">All</option>
                            <option value="Alcohol">Alcohol Addiciton</option>
                            <option value="Drug">Drugs Addiciton</option>
                            <option value="Behavioral">Behavioral Addiciton</option>
                    </select>
                    <button type="submit">Let me in</button>
                </form>
        </section>
    )
}

export default CardForm
