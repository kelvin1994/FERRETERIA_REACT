import React from 'react'



export const FooterComponent = () => {
  return (
    <footer className="footer">
            <div className="footer-container">
              <div className="footer-row">
                <div className="footer-link">
                  <h4>Compania</h4>
                  <ul>
                    <li><a href="#/">Nosotros</a></li>
                    <li><a href="#/">Nuestros Servicios</a></li>
                    <li><a href="#/">Politicas de Privacidad</a></li>
                    <li><a href="#/">Afiliate</a></li>
                  </ul>
                </div>
                <div className="footer-link">
                  <h4>Ayuda</h4>
                  <ul>
                    <li><a href="#/">Preguntas</a></li>
                    <li><a href="#/">Compras</a></li>
                    <li><a href="#/">Envios</a></li>
                    <li><a href="#/">Pago</a></li>
                  </ul>
                </div>
                <div className="footer-link">
                  <h4>Atención al Cliente</h4>
                  <ul>
                    <li><a href="#/">Politicas de Privacidad</a></li>
                    <li><a href="#/">Terminos & Condiciones</a></li>
                    <li><a href="#/">Politicas de Envio</a></li>
                    <li><a href="#/">Libro de Reclamaciones</a></li>
                  </ul>
                </div>

                <div className="footer-link">
                  <h4>Siguenos</h4>
                  <div className="social-link">
                    <a href="#/"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="#/"><i className="fa-brands fa-tiktok"></i></a>
                    <a href="#/"><i className="fa-brands fa-square-instagram"></i></a>

                  </div>
                </div>

              </div>
            </div>
          </footer>
  )
  
}
