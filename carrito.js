let carrito = JSON.parse(localStorage.getItem("carrito In Ear:"));
let vaciar = document.getElementById("vaciar");
let cuenta = document.getElementById("cuenta");
let total = 0;

carrito.forEach((producto, i) => {
  let seccion = document.getElementById("seleccionados");
  let nuevo = document.createElement("div");
  seccion.appendChild(nuevo);
  nuevo.innerHTML = `
    <div class="card1 producto" style="width: 18rem; margin-top: 80px;">
      <img src=${producto.imagen} class="card-img-top" alt="..." height="50%" width=auto>
      <div class="card-body">
        <h2 class="card-title">${producto.nombre}</h2>
        <p class="card-text">High quality headphones, 20h battery life</p>
        <a href="#" id="${i}" class="añadir btn btn-primary">Add to Cart</a>
      </div>
    </div>
  `;

  let nuevaCuenta = document.createElement("li");
  cuenta.appendChild(nuevaCuenta);
  nuevaCuenta.setAttribute("class", "li_ticket");
  let cantidad = 1;
  nuevaCuenta.innerHTML = `
    <h4>PRODUCTO: ${producto.nombre}</h4>
    <p>Precio: $${producto.precio}</p>
    <div style="display: flex">
      <button class="btn_cuenta btn_suma_${i}">+</button>
      <p class="btn_cuenta_${i}">${cantidad}</p>
      <button class="btn_cuenta btn_resta_${i}">-</button>
    </div>
  `;

  let btnSuma = document.querySelector(`.btn_suma_${i}`);
  let btnResta = document.querySelector(`.btn_resta_${i}`);
  let cantidadElement = document.querySelector(`.btn_cuenta_${i}`);

  btnSuma.addEventListener("click", () => {
    cantidad++;
    cantidadElement.textContent = cantidad;
    total += parseInt(producto.precio);
    totalElement.textContent = `Precio total: $${total}`;
  });

  btnResta.addEventListener("click", () => {
    if (cantidad > 0) {
      cantidad--;
      cantidadElement.textContent = cantidad;
      total -= parseInt(producto.precio);
      totalElement.textContent = `Precio total: $${total}`;
    }
  });

  // Sumar la cantidad del producto al total inicial
  total += parseInt(producto.precio) * cantidad;
});

// Mostrar el precio total de la compra
let totalElement = document.createElement("p");
totalElement.textContent = `Precio total: $${total}`;
cuenta.appendChild(totalElement);

vaciar.addEventListener("click", () => {
  localStorage.clear();
  carrito.length = 0;
  
  let seccion = document.getElementById("seleccionados");
  seccion.remove();
  
  let cuenta = document.getElementById("cuenta");
  cuenta.remove();
  console.log(carrito.length)

  let mensaje = document.getElementById("mensajeCarrito");
  let nuevoMensaje = document.createElement("div");
  nuevoMensaje.innerText = "There are no products added to the cart :("
  mensaje.appendChild(nuevoMensaje);
});

console.log(carrito.length)


