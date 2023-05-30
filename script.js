let carrito = [];
let añadir = document.querySelectorAll(".añadir")
let seleccion = document.getElementById("seleccionados")


class producto{
  constructor (nombre, descripcion, precio, cantidad){
      this.nombre = nombre,
      this.descripcion = descripcion,
      this.precio = precio,
      this.cantidad = cantidad
  }
}
/*_____________PRODUCT___CONSTRUCTION________________*/
const WH1000XM4B = new producto(WH1000XM4B,"","$50",0)
const TUNE500BT = new producto(TUNE500BT,"","$50",0)
const Live660NC= new producto(Live660NC,"","$50",0)
const JBL650BTNC= new producto(JBL650BTNC,"","$50",0)
const Verizon = new producto(Verizon,"","$50",0)
const G335 = new producto(G335,"","$50",0)
const G733 = new producto(G733,"","$50",0)
const ZONEVIBE100 = new producto(ZONEVIBE100,"","$50",0)
const AIRPODSPROMAX = new producto(AIRPODSPROMAX,"","$50",0)
/*_____________PRODUCT___CONSTRUCTION________________*/


/*_____________PRODUCTS____READING_____________________*/

/*_____________PRODUCTS____READING_____________________*/



/*________________NAVBAR___________________*/ 
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});
/*________________NAVBAR___________________*/

añadir.addEventListener("click", () =>{
  carrito.push 
})