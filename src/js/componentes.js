import '../css/main.css';

export const sayHi = (nombre) => {

    console.log('Creando etiqueta html>Body>h2');

    const h2 = document.createElement('h2');
    h2.innerText = `${nombre}, configuracion base de WebPack se ha instalado y esta funcionando`

    document.body.append(h2);
};