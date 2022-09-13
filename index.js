/* DESAFIO COMPLEMENTARIO CLASE 8 - MATIAS BRIGNONI */

/* 
Este script hace que se renderize en el HTML el catálogo definido en JavaScript y se impongan el estilo css definido para las clases y ids.

*/

const catalogoHombres = [
    {id: 1, nombre: "Remera Verde", precio: 790, img: "men-product1.jpg"},
    {id: 2, nombre: "Remera Rosada", precio: 690, img: "men-product2.jpg"},
    {id: 3, nombre: "Short Azul", precio: 1190, img: "men-product3.jpg"},
    {id: 4, nombre: "Short Negro", precio: 1090, img: "men-product4.jpg"},
    {id: 5, nombre: "Medias", precio: 450, img: "men-product5.jpg"},
    {id: 6, nombre: "Buzo Fluor", precio: 1590, img: "men-product6.jpg"},
    {id: 7, nombre: "Remera Verde", precio: 790, img: "men-product1.jpg"}, //se repiten los productos para que se renderize mayor cantidad.
    {id: 8, nombre: "Remera Rosada", precio: 690, img: "men-product2.jpg"},
    {id: 9, nombre: "Short Azul", precio: 1190, img: "men-product3.jpg"},
    {id: 10, nombre: "Short Negro", precio: 1090, img: "men-product4.jpg"},
    {id: 11, nombre: "Medias", precio: 450, img: "men-product5.jpg"},
    {id: 12, nombre: "Buzo Fluor", precio: 1590, img: "men-product6.jpg"},
];

let productoBlock = document.getElementById("productBlock");

for (const producto of catalogoHombres) {
    let div = document.createElement("div");
    div.innerHTML = `<img src="./img/${producto.img}" alt="producto${producto.id}">
                    <p class="productoNombre"> ${producto.nombre} </p>
                    <p class="productoPrecio"> $ ${producto.precio} </p>
                    <button id="agregar${producto.id}">Agregar</button>`;
    div.className = "product-block";
    productBlock.append(div);
};

