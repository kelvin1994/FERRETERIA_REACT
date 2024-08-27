import React from 'react';

const imgStyle = {
    width: '200px',
    height: '200px',
    border: '1px solid #aaaaaa'
};


const Producto = ({ producto, agregarAlCarrito }) => {
    const handleClick = () => {
        agregarAlCarrito(producto);
    };

    return (
        <div className="product">
            <img className="img-producto" src={producto.imagen} alt={producto.nombre} style={imgStyle} />
            <h2>{producto.nombre}</h2>
            <h4>Categoria: {producto.categoria}</h4>
            <p>{producto.descripcion}</p>
            <p>Precio: S/. {producto.precio}</p>
            <button type="button" className="btn btn-warning text-black" onClick={handleClick}>
                Agregar
            </button>
        </div>
    );
};


{/*
const Producto = ({ producto }) => {
    return (
        <div className="product">
            <img className="img-producto" src={producto.imagen} alt={producto.nombre}  style={imgStyle} />
            <h2>{producto.nombre}</h2>
            <h4>Categoria: {producto.categoria}</h4>
            <p>{producto.descripcion}</p>
            <p>Precio: S/. {producto.precio}</p>
            <button type="button" class="btn btn-warning text-black">Agregar</button>
        </div>
    );
};

*/}

export default Producto;