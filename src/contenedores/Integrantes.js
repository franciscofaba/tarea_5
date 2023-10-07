
import jova from './fotos/jova.png';
import yo from './fotos/yo.jpeg';
import './intstyle.css'
function Integrantes() {
    return(
    <div class="h2">
        <h2>INTEGRANTES</h2>
        <section class="contenedor">
                    
                
            <div class="contenedor-galeria">
                <img src= {jova} class="foto" alt="Imagen1" ></img>
                <p class="element" >Jovanka Espinoza Cajas</p>
                <p class="element">jovespinoza@alumnos.uai.cl</p>
                <a class="button" href="jovanka/new_j.html">sobre mi</a>
            </div>
            <div class="contenedor-galeria">
                <img src= {yo} class="foto" alt="Imagen1" ></img>
                <p class="element">Francisco Faba</p>
                <p class="element">ffba@alumnos.uai.cl</p>
                <a class="button"  href="francisco/Francisco.html">sobre mi</a>
            </div>
        </section>
    </div>

    );

}

export default Integrantes;