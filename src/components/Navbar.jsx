import {Link} from "react-router-dom"
import CartWidget from './CartWidget'


function NavBar(){
    return(
        <div style={{ display: 'flex', gap: 15 }}>
            <Link to="/">Logo</Link>git 
            <Link to="/category/entrada">Entradas</Link>
            <Link to="/category/principal">Principales</Link>
            <Link to="/category/postre">Postres</Link>
            <CartWidget></CartWidget>
        </div>
    )
}

export default NavBar