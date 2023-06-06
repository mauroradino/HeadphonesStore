let producto10 = document.getElementById("10");
let producto11 = document.getElementById("11");
let producto12 = document.getElementById("12");
let producto13 = document.getElementById("13");
let producto14 = document.getElementById("14");
let producto15 = document.getElementById("15");
let producto16 = document.getElementById("16");
let producto17 = document.getElementById("17");
let producto18 = document.getElementById("18");
let carro1 = localStorage.getItem("carrito:");
let carro2 = localStorage.getItem("carrito In Ear:");
let count = document.getElementById("iconCount");
let carritoIn = JSON.parse(localStorage.getItem("carrito In Ear:")) || [];
let contador = parseInt(localStorage.getItem("contador:")) || 0;
count.textContent = contador;

class producto{
    constructor (nombre, descripcion, precio, cantidad, imagen){
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.precio = precio,
        this.cantidad = cantidad,
        this.imagen = imagen
    }
  }

const MODE2BLACK = new producto("MODE2BLACK","","50",0,"https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw584f92de/images/categories/headphones/mode-ii/mobile/01-usp01-mode-ii-mobile@5xV2.png") // product 10 (id: 10)
const WAVE100TWS = new producto("WAVE100TWS","","80",0,"https://uk.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa40c862a/1.JBL_Wave_VIBE_100TWS_Product%20Images_Hero_Ivory.png?sw=680&sh=680") // product 11 (id: 11)
const TUNE230TWS= new producto("TUNE230TWS","","30",0,"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/153/197/products/jbl_tune_230nc_productimage_hero2_black1-e09219c312a0f5e38016505686427451-640-0.png") // product 12 (id: 12)
const LINKBUDS= new producto("LINKBUDS","","30",0,"https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw0ad8e979/images/WFLS900NB/WFLS900NB_2.png") // product 13 (id: 13)
const WFL900 = new producto("WFL900","","40",0,"https://pesonyb2c.vtexassets.com/arquivos/ids/218844-800-800?v=637805862906170000&width=800&height=800&aspect=true") // product 14 (id: 14)
const GALLERY = new producto("GALLERY","","70",0,"https://sony.scene7.com/is/image/sonyglobalsolutions/product-primary-image-grey-1200x1200?$mediaCarouselSmall$&fmt=png-alpha") // product 15 (id: 15)
const WFC500 = new producto("WFC500","","50",0,"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1674054603/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/247474_0_q7oyv0.png/mxw_640,f_auto") // product 16 (id: 16)
const AIRPODSPRO2 = new producto("AIRPODSPRO2","","50",0,"https://iphoneros.com/wp-content/uploads/2020/10/50DE4744-5400-43C6-8187-612A531AFB58.png") // product 17 (id: 17)
const BUD2PRO = new producto("BUD2PRO","","40",0,"https://samsungar.vtexassets.com/arquivos/ids/184122-800-auto?width=800&height=auto&aspect=true") // product 18 (id: 18)

producto10.addEventListener("click", () =>{
    if(carritoIn.indexOf(MODE2BLACK) == -1){
    carritoIn.push(MODE2BLACK);
    localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
    let count = document.getElementById("iconCount");
    count.textContent = carritoIn.length;
    contador++;
} 
  })

  
  producto11.addEventListener("click", () =>{
    if(carritoIn.indexOf(WAVE100TWS) == -1){
    carritoIn.push(WAVE100TWS);
    localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
    let count = document.getElementById("iconCount");
    count.textContent = carritoIn.length;
    contador++;
}
  })
  
  producto12.addEventListener("click", () =>{
    if(carritoIn.indexOf(TUNE230TWS) == -1){
    carritoIn.push(TUNE230TWS);
    localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
    let count = document.getElementById("iconCount");
    count.textContent = carritoIn.length;  
    contador++;  
}
  })
  
  producto13.addEventListener("click", () =>{
    if(carritoIn.indexOf(LINKBUDS) == -1){
    carritoIn.push(LINKBUDS);
    localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
    let count = document.getElementById("iconCount");
    count.textContent = carritoIn.length;
    contador++;
}
  })
  
  producto14.addEventListener("click", () =>{
    if(carritoIn.indexOf(WFL900) == -1){
    carritoIn.push(WFL900);
    localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
    let count = document.getElementById("iconCount");
    count.textContent = carritoIn.length; 
    contador++;   
}
  })
  
  producto15.addEventListener("click", () =>{
    if(carritoIn.indexOf(GALLERY) == -1){
    carritoIn.push(GALLERY);
    localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
    let count = document.getElementById("iconCount");
    count.textContent = carritoIn.length;
    contador++;
}
  })
  
  producto16.addEventListener("click", () =>{
    if(carritoIn.indexOf(WFC500) == -1){
    carritoIn.push(WFC500);
    localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
    let count = document.getElementById("iconCount");
    count.textContent = carritoIn.length;
    contador++;    
}
  })
  
  producto17.addEventListener("click", () =>{
    if(carritoIn.indexOf(AIRPODSPRO2) == -1){
    carritoIn.push(AIRPODSPRO2);
    localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
    let count = document.getElementById("iconCount");
    count.textContent = carritoIn.length;
    contador++;    
}
  })
  
  producto18.addEventListener("click", () =>{
    if(carritoIn.indexOf(BUD2PRO) == -1){
    carritoIn.push(BUD2PRO);
    localStorage.setItem("carrito In Ear:", JSON.stringify(carritoIn))
    let count = document.getElementById("iconCount");
    count.textContent = carritoIn.length;
    contador++;
}
  })

