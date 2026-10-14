import react, { useState, useEffect } from 'react'
import header from './components/header';
import products from './components/products';
import footer from './components/footer';
import { browserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    const[products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <header />
            <routes>
                route path="/" element={<home />} />
                route path="/products" element={<products products={products} />} />
                route path="/about" element={<about />} />  
                route path="/contact" element={<contact />} />

            </routes>
            <products products={products} />
            <footer />
        </div>
    )
}


export default App;
