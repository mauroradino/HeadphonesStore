let count = document.getElementById("iconCount");
let producto1 = document.getElementById("1");
let producto2 = document.getElementById("2");
let producto3 = document.getElementById("3");
let producto4 = document.getElementById("4");
let producto5 = document.getElementById("5");
let producto6 = document.getElementById("6");
let producto7 = document.getElementById("7");
let producto8 = document.getElementById("8");
let producto9 = document.getElementById("9");
let carritoIn = JSON.parse(localStorage.getItem("carrito In Ear:")) || [];
let contador = parseInt(localStorage.getItem("carrito In Ear:")) ;
count.textContent = contador.length;


class producto{
  constructor (nombre, descripcion, precio, cantidad, imagen){
      this.nombre = nombre,
      this.descripcion = descripcion,
      this.precio = precio,
      this.cantidad = cantidad,
      this.imagen= imagen
  }
}
//_____________PRODUCT___CONSTRUCTION________________
const WH1000XM4B = new producto("WH1000XM4B","","89",0,"https://www.sony.com.ar/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=440")  // product 1 (id: 1)
const TUNE500BT = new producto("TUNE500BT","","77",0,"https://i5.walmartimages.com/asr/5e82c60b-27c6-41a9-b59b-c1b4a5afcb45_1.5583aa1e0a4fd04cf238f2af11607395.png") // product 2 (id: 2)
const Live660NC= new producto("Live660NC","","67",0,"https://media.croma.com/image/upload/v1674045218/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/241462_0_fogfbg.png") // product 3 (id: 3)
const JBL650BTNC= new producto("JBL650BTNC","","60",0,"https://www.jbl.com.co/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfa760a6d/JBL_LIVE650BTNC_Product-Image_Hero_Black_071_x1-1605x1605px.png") // product 4 (id: 4)
const Verizon = new producto("Verizon","","80",0,"https://ss7.vzw.com/is/image/VerizonWireless/sony-interactive-pulse-3d-wireless-headset-midnight-playstation-5-black-3006397-iset?$acc-lg$") // product 5 (id: 5)
const G335 = new producto("G335","","80",0,"https://thebest.com.ar/images/product_image/2879/0?dpr=2.625&fit=contain&h=400&q=80&w=400") // product 6 (id: 6)
const G733 = new producto("G733","","90",0,"https://www.techzilla.cr/wp-content/uploads/2022/11/headset-logitech-g733-inalambrico-2.webp") // product 7 (id: 7)
const ZONEVIBE100 = new producto("ZONEVIBE100","","70",0,"https://resource.logitech.com/w_800,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/headsets/zone-vibe-100/gallery/zone-vibe-100-gallery-graphite-1.png?v=1") // product 8 (id: 8)
const AIRPODSPROMAX = new producto("AIRPODSPROMAX","","65",0,"https://cdn-gmnbd.nitrocdn.com/bfDqsHBwuXcudWrHxpyHEzsiBKftoUFi/assets/static/optimized/rev-6fe77a2/image/cache/png/apple-airpods-max/blue/apple-airpods-max-blue-01-800x800.png") // product 9 (id: 9)
//_____________PRODUCT___CONSTRUCTION________________


//_____________PRODUCTS____READING_____________________
producto1.addEventListener("click", () =>{
  if(carritoIn.indexOf(WH1000XM4B) == -1){
  carritoIn.push(WH1000XM4B);
  localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
  let count = document.getElementById("iconCount");
  count.textContent = carritoIn.length;
  contador++;
} 
})


producto2.addEventListener("click", () =>{
  if(carritoIn.indexOf(TUNE500BT) == -1){
  carritoIn.push(TUNE500BT);
  localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
  let count = document.getElementById("iconCount");
  count.textContent = carritoIn.length;
  contador++;
}
})

producto3.addEventListener("click", () =>{
  if(carritoIn.indexOf(Live660NC) == -1){
  carritoIn.push(Live660NC);
  localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
  let count = document.getElementById("iconCount");
  count.textContent = carritoIn.length;  
  contador++;  
}
})

producto4.addEventListener("click", () =>{
  if(carritoIn.indexOf(Verizon) == -1){
  carritoIn.push(Verizon);
  localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
  let count = document.getElementById("iconCount");
  count.textContent = carritoIn.length;
  contador++;
}
})

producto5.addEventListener("click", () =>{
  if(carritoIn.indexOf(G335) == -1){
  carritoIn.push(G335);
  localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
  let count = document.getElementById("iconCount");
  count.textContent = carritoIn.length; 
  contador++;   
}
})

producto6.addEventListener("click", () =>{
  if(carritoIn.indexOf(G733) == -1){
  carritoIn.push(G733);
  localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
  let count = document.getElementById("iconCount");
  count.textContent = carritoIn.length;
  contador++;
}
})

producto7.addEventListener("click", () =>{
  if(carritoIn.indexOf(AIRPODSPROMAX) == -1){
  carritoIn.push(AIRPODSPROMAX);
  localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
  let count = document.getElementById("iconCount");
  count.textContent = carritoIn.length;
  contador++;    
}
})

producto8.addEventListener("click", () =>{
  if(carritoIn.indexOf(AIRPODSPRO2) == -1){
  carritoIn.push(AIRPODSPRO2);
  localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
  let count = document.getElementById("iconCount");
  count.textContent = carritoIn.length;
  contador++;    
}
})

producto9.addEventListener("click", () =>{
  if(carritoIn.indexOf(BUD2PRO) == -1){
  carritoIn.push(BUD2PRO);
  localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
  let count = document.getElementById("iconCount");
  count.textContent = carritoIn.length;
  contador++;
}
})
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
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});
/*________________NAVBAR___________________*/

