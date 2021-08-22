import React, { useState } from 'react'
// import Nametag from './Nametag'


function CardForm () {
    const [formData, setFormData] = useState({
        name: "",
        status: "All",
    });
console.log(formData);

function handleChange(e){
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
}

function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:4001/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
  },
    body: JSON.stringify({
      name: formData.name,
      status: formData.status,
    }),

    });
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
