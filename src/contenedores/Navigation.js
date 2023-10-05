
import './Navstyle.css';

function Navbar() {
    return (
      <header>
              <div class="back">
                  <div class="menu container">
                      <a href="" class="logo">Grupo InnovaTech</a>
                      <input type="checkbox" id="menu"/>
                      <label for="menu">
                          <img src="images/660376.png" class="menu-icono" alt=""></img>
                      </label>
                      <nav class="navbar">
                          
                          <ul>
                              <li><a class="BotonNav" href="" >Galería</a></li>
                              <li><a class="BotonNav" href="" >Contacto</a></li>
                              <li><a class="BotonNav" href="" >Sobre nosotros</a></li>
                          </ul>
                      </nav>
                  </div>
   
              </div>
          </header>
          
  
  
    );
  }
  
  export default Navbar;