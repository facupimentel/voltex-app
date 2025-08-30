import { Link, NavLink } from "react-router-dom"
import Cart from "./Cart";
import { useUser } from "../../context/UserContext";



const NavBar = ({totalProductos}) => {

  const {user, login, logout} = useUser()
  console.log("user: ", user);
  

  const handleLoginLogout = () =>{
    if(user?.isLoggedIn){
      logout()
      console.log("usuario deslogueado")
    } else {
      login({name:"Facundo", isLoggedIn: true})
      console.log("usuario logueado");
      
    }
  }



  return (
    <>
      <header>
        <nav className="navbar">
          <img src='/img/header/logo1.png' alt="" />
          <ul>
            <li><NavLink to="/" className={({isActive})=>(isActive ? 'active' : '')}>Inicio</NavLink></li>
            <li><NavLink to="/productos" className={({isActive})=>(isActive ? 'active' : '')}>Productos</NavLink></li>
            <li><NavLink to="/nosotros" className={({isActive})=>(isActive ? 'active' : '')}>Nosotros</NavLink></li>
            <li><NavLink to="/contactos" className={({isActive})=>(isActive ? 'active' : '')}>Contactos</NavLink></li>
          </ul>

          <Cart totalProductos={totalProductos} />

          <button
            style={{
              width:"63px",
              marginRight:"10px"
            }}
            onClick={handleLoginLogout}
          >
            {user?.isLoggedIn ? "Logout" : "Login"}
          </button>
          

        </nav>
      </header>
    </>
  );
}

export default NavBar
