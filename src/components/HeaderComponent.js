import React, { useState, useEffect } from 'react'

export const HeaderComponent = () => {

  const [bgColor, setBgColor] = useState('#FF0009');

  useEffect(() => {
      // Función para manejar el evento de scroll
      const handleScroll = () => {
          if (window.scrollY > 10) {
              setBgColor('#121212');
          } else {
              setBgColor('#FF0009');
          }
      };

      // Añadir el eventListener para scroll
      window.addEventListener('scroll', handleScroll);

      // Limpiar el eventListener al desmontar el componente
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []); // El arreglo vacío indica que useEffect se ejecuta solo una vez después del primer renderizado

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const categoriasGuardadas = JSON.parse(localStorage.getItem('categorias')) || [];
    setCategorias(categoriasGuardadas);
  }, []);
  

  return (

    <header style={{ backgroundColor: bgColor }}>
      <div className="header-1">
        <img src="./img/logo_positivo.png" className="logo-empresa" alt="Logo empresa" />

        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src="./img/menu.png" className="menu-icono" alt="menu-icono" />
        </label>

        <div className="input-group w-50 h-50 mx-auto">
          <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Categoría
          </button>
          <ul className="dropdown-menu">
            {categorias.map(categoria => (
                  <li><a className="dropdown-item" href="#/" key={categoria} value={categoria}> {categoria} </a></li>
                ))}
          </ul>
          <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" />
          <button className="btn btn-warning" type="button" >
            Buscar
          </button>
        </div>

        <div className="group-location">
          <i className="fa-solid fa-location-dot text-warning large-icon"></i>
          <div className="location">
            <span className="arriba">UBICACIÓN</span>
            <a className="abajo" href="#/">Haga click aqui</a>
          </div>
        </div>

        <div className="group-location">
          <i className="fa-solid fa-phone text-warning large-icon"></i>
          <div className="location">
            <span className="arriba">993807438</span>
            <span className="abajo">Ventas Post-venta</span>
          </div>
        </div>
      </div>
      <div className="header-2">
        <nav className="navbar navbar-expand-lg bg-warning">
          <div className="container">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav font-text">
                <div className="dropdown">
                  <button id="bg-blanco" className="btn btn-outline-ligth dropdown-toggle " type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="font-text">Por Categoría</span>
                    
                    <ul className="dropdown-menu">
                      {categorias.map(categoria => (
                        <li><a className="dropdown-item" href="#/" key={categoria} value={categoria}> {categoria} </a></li>
                      ))}
                    </ul>
                  </button>
                </div>
                <li className="nav-item active custom-padding">
                  <a className="nav-link" href="#/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item custom-padding">
                  <a className="nav-link" href="#/">Marcas</a>
                </li>
                <li className="nav-item custom-padding">
                  <a className="nav-link" href="#/">Tienda</a>
                </li>
                <li className="nav-item custom-padding">
                  <a className="nav-link" href="#/">Destacados</a>
                </li>
                <li className="nav-item custom-padding">
                  <a className="nav-link" href="#/">Blog</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>


  )
}
