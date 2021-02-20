
// VARIABLES
const cursos = document.querySelector('.Cursos');
// console.log(cursos);
const container = document.querySelector('.muestraCarrito');
const menu = document.createElement('div');

// LISTENERS
initApp();

document.addEventListener('load', initApp)

function initApp(){
    cursos.addEventListener('click', obtenerCurso)
}

// FUNCIONES
function obtenerCurso(e){
    //console.log(e.target)
    if(e.target.classList.contains('agregarCarrito')){
        //console.log(e.target)
        const curso = e.target.parentElement

        extraerDatos(curso)
    }
}

function extraerDatos(curso){
    console.log(curso)

    const cursoSeleccionado = {
        nombre: curso.querySelector('h2').textContent,
        imagen: curso.querySelector('img').getAttribute('src'),
        precio: curso.querySelector('strong').textContent
    }

    // console.log(cursoSeleccionado)
    aniadirCurso(cursoSeleccionado)
}

function aniadirCurso(cursoSeleccionado){
    menu.innerHTML = `
        <ul>
            <li>
                <ul class="Header-ListItem">
                    <li class="Header-Item"><img id="carrito" class="cart-img" src="${cursoSeleccionado.imagen}"></li>
                    <li class="Header-Item">${cursoSeleccionado.nombre}</li>
                    <li class="Header-Item">1</li>
                    <li class="Header-Item">${cursoSeleccionado.precio}</li>
                </ul>
            </li>            
        </ul>`;
}





menu.innerHTML = `
<i class="material-icons btnMenu" id="btnClose">close</i>
`;

menu.classList.add('menu');
container.appendChild(menu);

const btnMenu = document.getElementById('carrito')
const btnClose = document.getElementById('btnClose')
const Menu = document.querySelector('.menu')

btnMenu.addEventListener("mouseover", function (e) {
    Menu.classList.toggle('active')
})

btnClose.addEventListener("click", function (e) {
    Menu.classList.remove('active')
})