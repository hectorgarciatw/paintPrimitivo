/*  
    Paint primitivo con P5js
    Lic. en computación Héctor García
    Conceptos: Funciones, Mapas de bits, Callbacks, Eventos de teclado
    y mouse.
*/

let img;
let colorBtn, checkPicker, color;
let button;

function preload() {
    img = loadImage("../img/calamardo.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //Creamos el checkbox del picker de color
    checkPicker = createCheckbox("Selector de color", false);
    checkPicker.position(14, 3);
    checkPicker.changed(changeColor);
    //Creamos el botón para seleccionar color del picker
    colorBtn = createButton("Seleccionar");
    colorBtn.position(14, 23);
    colorBtn.mousePressed(changeColor);
    colorBtn.hide();
    let imgX = width / 2 - img.width / 2;
    let imgY = height / 2 - img.height / 2;
    //Centro la imagen en el canvas
    image(img, imgX, imgY);
    threshold = 60;
    //Cargo los pixeles de la imagen en el array pixels
    loadPixels();

    for (let x = 10; x < width; x++) {
        for (let y = 10; y < height * 4; y++) {
            //Determino la posición inicial del pixel a trabajar -Componente Red-
            let i = (x + y * width) * 4;
        }
    }
    //Actualizo los pixeles de la imagen cargada
    updatePixels();
}

function showSelectedColor(c) {
    fill(c);
    square(0, 40, 100);
}

function changeColor() {
    console.log("changecolor");
}

function mouseClicked() {
    if (checkPicker.checked()) {
        noStroke();
        let c = get(mouseX, mouseY);
        showSelectedColor(c);
        colorBtn.show();
    }
}

function mouseDragged() {
    strokeWeight(8);
    stroke(255, 0, 0);
    line(mouseX, mouseY, pmouseX, pmouseY, 10);
}

function changeColor() {}
