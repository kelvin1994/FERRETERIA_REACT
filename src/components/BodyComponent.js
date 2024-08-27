import React, { useRef, useState } from 'react'

import { FooterComponent } from './FooterComponent';
import Producto from './ProductosComponent';

import './FloatingButton.css';
import './CustomModal.css';
import './Checkout.css';

export const BodyComponent = () => {

  const items = [
    { id: 1, bgImage: './img/1.jpg', name: 'EPP', description: 'Contamos con equipos de protección personal con la mayor calidad y tecnología del mercado.' },
    { id: 2, bgImage: './img/2.jpg', name: 'GARANTIA', description: 'Encuentra todas las herramientas que necesitas para tus proyectos.' },
    { id: 3, bgImage: './img/3.jpg', name: 'CALIDAD', description: 'Ofrecemos productos de gran calidad.' },
    { id: 4, bgImage: './img/4.jpg', name: 'MODERNIDAD', description: 'Ofrecemos productos con lo ultimo en tecnología.' },
    { id: 5, bgImage: './img/5.jpg', name: 'PROYECTOS', description: 'Tenemos todo lo que necesites en tus proyectos.' },
    { id: 6, bgImage: './img/6.jpg', name: 'MARCAS', description: 'Contamos con todas la herramientas de calidad y marcas.' },
  ];

  /* Funciones de botones */

  const slideRef = useRef(null);

  const handleNext = () => {
    if (slideRef.current) {
      const firstItem = slideRef.current.firstChild;
      slideRef.current.appendChild(firstItem);
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const lastItem = slideRef.current.lastChild;
      slideRef.current.prepend(lastItem);
    }
  };

  const [carrito, setCarrito] = useState([]);

  /*
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }; */

  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const nuevoCarrito = { ...prevCarrito };
      if (nuevoCarrito[producto.id]) {
        nuevoCarrito[producto.id].cantidad += 1;

        nuevoCarrito[producto.id].subtotal = nuevoCarrito[producto.id].cantidad * producto.precio;
      } else {
        nuevoCarrito[producto.id] = { ...producto, cantidad: 1, subtotal: producto.precio };
      }
      localStorage.setItem('producto', JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const cantidadTotalProductos = Object.values(carrito).reduce((total, producto) => total + producto.cantidad, 0);

  const subtotal = Object.values(carrito).reduce((subtotal, producto) => subtotal + producto.subtotal, 0);
  const igv = subtotal * 0.18;
  const totalpago = subtotal + igv;

  localStorage.setItem('cantidadProductos', cantidadTotalProductos);


  const listaProductos = [
    {
      id: 1,
      nombre: "Martillo de Carpintero",
      precio: 10.99,
      descripcion: "Martillo con cabeza de acero y mango de madera.",
      categoria: "Herramientas",
      imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/118007900_01/w=1500,h=1500,fit=padE"

    },
    {
      id: 2,
      nombre: "Destornillador Philips",
      precio: 5.49,
      descripcion: "Destornillador de punta cruz con mango ergonómico.",
      categoria: "Herramientas",
      imagen: "https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/06/Destornillador-basico.webp?fit=900%2C900&ssl=1"
    },
    {
      id: 3,
      nombre: "Llave Inglesa",
      precio: 12.99,
      descripcion: "Llave ajustable para tuercas y tornillos.",
      categoria: "Herramientas",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_820231-MLU70348927680_072023-O.webp"
    },
    {
      id: 4,
      nombre: "Taladro Inalámbrico",
      precio: 59.99,
      descripcion: "Taladro inalámbrico con batería recargable.",
      categoria: "Herramientas Eléctricas",
      imagen: "https://promart.vteximg.com.br/arquivos/ids/7840650-1000-1000/imageUrl_1.jpg?v=638434422554670000"
    },
    {
      id: 5,
      nombre: "Sierra Circular",
      precio: 45.99,
      descripcion: "Sierra circular de alta potencia para cortes precisos.",
      categoria: "Herramientas Eléctricas",
      imagen: "https://mundoconstructor.com.pe/wp-content/uploads/2024/01/A50004161_3.jpg"
    },
    {
      nombre: "Cinta Métrica",
      precio: 3.99,
      descripcion: "Cinta métrica de 5 metros con bloqueo automático.",
      categoria: "Medición",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpP9nLwPragiAMPAfg_pKPYh0Cn_kIUNeCw&s"
    },
    {
      nombre: "Nivel de Burbuja",
      precio: 8.99,
      descripcion: "Nivel de burbuja de 30 cm con alta precisión.",
      categoria: "Medición",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IZek2Oi5A3wXsMEouQkfyzLFGx7ae1CSUg&s"
    },
    {
      nombre: "Caja de Herramientas",
      precio: 25.99,
      descripcion: "Caja de herramientas de plástico con varios compartimentos.",
      categoria: "Almacenamiento",
      imagen: "https://eshop.wurth.pe/2819-large_default/caja-de-herramientas-66-piezas.jpg"
    },
    {
      nombre: "Cinta Aislante",
      precio: 2.49,
      descripcion: "Cinta aislante de alta resistencia para trabajos eléctricos.",
      categoria: "Electricidad",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzk4EDiGtVEYndNxVsbHPSth00C0kQ-TJfRuLZB3UsamVxcy-K0zL7_U00tGQQdJHBhiM&usqp=CAU"
    },
    {
      nombre: "Multímetro Digital",
      precio: 19.99,
      descripcion: "Multímetro digital para medir voltaje, corriente y resistencia.",
      categoria: "Electricidad",
      imagen: "https://dojiw2m9tvv09.cloudfront.net/68942/product/X_17592.jpg?57&time=1721345165"
    },
    {
      nombre: "Broca para Madera",
      precio: 7.99,
      descripcion: "Juego de brocas para madera de diferentes tamaños.",
      categoria: "Accesorios",
      imagen: "https://www.aibitech.com/15745-large_default/juego-de-6-brocas-para-madera-jbma-6-11337-truper.jpg"
    },
    {
      nombre: "Guantes de Trabajo",
      precio: 4.99,
      descripcion: "Guantes de trabajo resistentes y cómodos.",
      categoria: "Seguridad",
      imagen: "https://promart.vteximg.com.br/arquivos/ids/8046266-1000-1000/143170.jpg?v=638561555898900000"
    },
    {
      nombre: "Mascarilla de Protección",
      precio: 3.49,
      descripcion: "Mascarilla de protección contra polvo y partículas.",
      categoria: "Seguridad",
      imagen: "https://prosinfer.com/wp-content/uploads/2022/06/respirador-3m-6200.jpg"
    },
    {
      nombre: "Tornillos para Madera",
      precio: 6.99,
      descripcion: "Caja de tornillos para madera de diferentes tamaños.",
      categoria: "Fijaciones",
      imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/4122429_01/w=800,h=800,fit=pad"
    },
    {
      nombre: "Clavos de Acero",
      precio: 4.49,
      descripcion: "Caja de clavos de acero para carpintería.",
      categoria: "Fijaciones",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITlx9JLjUmqPE9vI0JHiocOQCbAL4q1k0Rw&s"
    },
    {
      nombre: "Adhesivo de Montaje",
      precio: 7.49,
      descripcion: "Adhesivo de montaje fuerte y duradero.",
      categoria: "Adhesivos",
      imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/1901397_01/w=800,h=800,fit=pad"
    },
    {
      nombre: "Lija de Agua",
      precio: 1.99,
      descripcion: "Hoja de lija de agua para acabados finos.",
      categoria: "Abrasivos",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCIUs2SWTLgJ7IwqGDUaLCs0mbmYpcRGlrA&s"
    },
    {
      nombre: "Pulidora Angular",
      precio: 49.99,
      descripcion: "Pulidora angular de alta potencia para metal y madera.",
      categoria: "Herramientas Eléctricas",
      imagen: "https://dojiw2m9tvv09.cloudfront.net/79550/product/itoolstp11418060344.jpg"
    },
    {
      nombre: "Soldador Eléctrico",
      precio: 15.99,
      descripcion: "Soldador eléctrico para trabajos de electrónica.",
      categoria: "Soldadura",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_646488-MLU72647975396_112023-O.webp"
    },
    {
      nombre: "Juego de Llaves Allen",
      precio: 9.99,
      descripcion: "Juego de llaves Allen de diferentes tamaños.",
      categoria: "Herramientas",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8LCkI2jNR7xDHee1IdJPW6vbduS4KQR1olg&s"
    }
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  // Extraer categorías únicas para el menú desplegable
  const categorias = ['Todas', ...new Set(listaProductos.map(p => p.categoria))];

  localStorage.setItem('categorias', JSON.stringify(categorias));

  const filtrarProducto = (event) => {
    setCategoriaSeleccionada(event.target.value);
    filtrarProductos(event.target.value, textoBusqueda);
  };

  const changeBusqueda = (event) => {
    setTextoBusqueda(event.target.value);
  };

  const buscarProducto = () => {
    filtrarProductos(categoriaSeleccionada, textoBusqueda);
  };

  const limpiarBusqueda = () => {
    setTextoBusqueda(''); // Limpiar texto de búsqueda
    setCategoriaSeleccionada('Todas'); // Restablecer categoría a 'Todas'
    setProductosFiltrados(listaProductos); // Mostrar todos los productos
  };

  const filtrarProductos = (categoria, busqueda) => {
    const productosFiltrados = listaProductos.filter(producto => 
      (categoria === 'Todas' || producto.categoria === categoria) &&
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setProductosFiltrados(productosFiltrados);
  };
  
  // Determinar si el botón de limpiar debe ser visible
  const botonLimpiar = textoBusqueda !== '' || categoriaSeleccionada !== 'Todas';

  return (


    <div className="wrapper">


      <div className="container2">
        <div id="slide" ref={slideRef}>
          {items.map((item) => (
            <div
              key={item.id}
              className="item"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">
                  {item.description}
                </div>
                <button className="btn btn-warning btn-sm">
                  <span className="text-btn">Ver Todos</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handlePrev}>
            <i className="fa-solid fa-angle-left "></i>
          </button>
          <button id="next" onClick={handleNext}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>


      <div className="container3">

        <div className="container text-center mt-4 mb-4">

          <div className='row'>
            <div className='col'><span>SELECCIONE LA CATEGORIA DE SU </span><span>PRODUCTO</span></div>
            <div className='col'>
              <select className="form-select" value={categoriaSeleccionada} onChange={filtrarProducto}>
                {categorias.map(categoria => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))}
              </select>
            </div>
            <div className='col'>
              <span>O</span>
            </div>
            <div className='col'>
              <input
                type="text"
                className="form-control"
                id="InputFiltro"
                placeholder="Ingrese nombre de producto"
                value={textoBusqueda}
                onChange={changeBusqueda}
              />
            </div>
            <div className='col'>
              <button
                type="button"
                className="btn btn-warning text-black"
                onClick={buscarProducto}
              >
                Buscar
              </button>
            </div>
            {botonLimpiar && (
            <div className='col'>
              <button 
              type="button" 
              className="btn btn-secondary text-white" 
              onClick={limpiarBusqueda}
            >
              Limpiar Búsqueda
            </button>
              {/*<h1>Totales: {cantidadTotalProductos}</h1>
              
              <ul>
              {Object.values(carrito).map((item, index) => (
                    <li key={index}>{item.nombre} - S/. {item.precio} x {item.cantidad}</li>
                ))}
              </ul> */}
            </div>
            )}
          </div>

        </div>
        <div className="container-prod">

          <div id="product-container">
            {productosFiltrados.map((producto, index) => (
              <Producto key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
            ))}
          </div>


        </div>

        <div className="floating-button">
          <button className="btn btn-warning rounded-circle shadow text-black" onClick={handleShow}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className='ms-2'> {cantidadTotalProductos}</span>
          </button>
        </div>


        <div className={`modal modal-dialog-centered modal-dialog-scrollable fade ${show ? 'show custom-modal shadow-sm' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">

                <div className='row'>
                  <div className='col'>Nombre</div>
                  <div className='col text-end'>Precio por unidad</div>
                  <div className='col text-end'>Cantidad</div>
                </div>

                <ul className="checkout-list mt-2 mb-2">
                  {Object.values(carrito).map((item, index) => (
                    <li key={index} className="checkout-item">
                      <span className="item-name">{item.nombre}</span>
                      <span className="item-price">S/. {item.precio}</span>
                      <span className="item-quantity">x {item.cantidad}</span>
                    </li>
                  ))}
                </ul>

                <div className='row mt-2'>
                  <ul>
                    <li>Cantidad total: {cantidadTotalProductos} </li>
                    <li>Subtotal: S/. {subtotal.toFixed(2)} </li>
                    <li>IGV: S/. {igv.toFixed(2)} </li>
                    <li className='fw-bold'>Precio a pagar: S/. {totalpago.toFixed(2)} </li>
                  </ul>
                </div>

                { /*<ul>
                  {Object.values(carrito).map((item, index) => (
                    <li key={index}>{item.nombre} - S/. {item.precio} x {item.cantidad}</li>
                  ))}
                </ul> */}

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>

              </div>
            </div>
          </div>
        </div>




        <FooterComponent />


      </div>



    </div>



  )
}

