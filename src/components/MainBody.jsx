import React, { useState, useEffect } from "react";
import "./mainbody.css"

export default function MainBody() {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch('/shoes.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setShoes(data);
                console.log(data);
            })
            .catch(error => console.error('Error loading shoe data:', error));
    }, []);

    return (
        <div className="main-content">
            <h1>Featured Sneakers</h1>
            <div className="sneaker-grid">
                {shoes.map(shoe => (
                    <div key={shoe.id} className="sneaker-card">
                        <img src={shoe.image} alt={shoe.name} />
                        <h3>{shoe.name}</h3>
                        <p>${shoe.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}