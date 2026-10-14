import react from 'react';
const Product = ({products}) => {
    return (
        <div>
            {products.map((product) => (
                <div>
                     <img scr ={product.thumbnail}></img>
                    <h1>{product.title}</h1>
                    <h1>{product.price}$</h1>
                    </div>)}
                    </div>
            )
        }

export default Product;
