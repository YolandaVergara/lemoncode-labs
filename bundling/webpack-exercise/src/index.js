import logoImg from "./content/logoLemoncode.png";


const sayHello = "Hola mundo";
document.write(sayHello);


const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);