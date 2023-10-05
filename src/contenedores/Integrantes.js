import './intstyle.css'
import jova from './fotos/jova.png';
import yo from './fotos/yo.jpeg';
function Integrantes() {
    return(
    <div >
        <section class="contentleft shadow">
                <h2>INTEGRANTES</h2>
                <div class="location">
                    <div class="i2">
                        
                            <div class="image-container">
                                <img src={jova}class="inline-image"/>
                                <div class='textos'>
                                    <p>Jovanka Espinoza Cajas</p>
                                    <p>jovespinoza@alumnos.uai.cl</p>
                                </div>
                                <a class="button" href="jovanka/new_j.html">sobre mi</a>
                            </div>
                            <div class="image-container">
                                <img src={yo} alt="Imagen 2" class="inline-image"/>
                                <div class='textos'>
                                    <p>Francisco Faba</p>
                                    <p>ffba@alumnos.uai.cl</p>
                                </div>
                                <a class="button" href="francisco/Francisco.html">sobre mi</a>
                            </div>                      
                    </div>
                </div>
        </section>
    </div>
    );

}

export default Integrantes;