import react from 'react';
import {usernavigate }from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (
        <div style={{textAlign:"center"}}>
            <h1>Header</h1>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/products")}>Products</button>
            <button onClick={()=>navigate("/about")}>About</button>
        </div>
    )
}


export default Header;
