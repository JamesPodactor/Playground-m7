//NÚMEROS DE CUENTA
//Validar que se informa con dos letras, y los números correspondientes.
//ES6600190020961234567890

// const pattern = /^ES\d{22}$/;

// const values = ['ES6600190020961234567890'];

// values.forEach(value => {
//   console.log('Regex matches with ' + value + ' -> ', pattern.test(value))
// })
//-----------------------------------------------------------------------------------

//Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:

// const pattern = /^ES(\d{2}\s(\d{4}\s?){5})|(ES\d{22})$/;
//ó
// const pattern = /^ES\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?$/;

// const values = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

// values.forEach(value => {
//   console.log('Regex matches with ' + value + ' -> ', pattern.test(value))
// })
//-----------------------------------------------------------------------------------

//Vamos a extraer el código de páis y el dígito de control.

// const pattern = /^(ES)(\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?$/;

// const result = pattern.exec('ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890');

// console.log(result);
//-----------------------------------------------------------------------------------

//MATRÍCULAS
//Caso 1

// Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:

// 2021 GMD

// 2345-GMD

// 4532BDB

// 0320-AAA

// const pattern = /^\d{4}(\s|-)?[A-Z]{3}$/;

// const values = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

// values.forEach(value => {
//   console.log('Regex matches with ' + value + ' -> ', pattern.test(value))
// })
//-----------------------------------------------------------------------------------

// Caso 2

// Vamos a extraer por un lado la parte numérica y por otro las letras.

// const pattern = /^(\d{4}).?([A-Z]{3})$/;

// const values = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

// values.forEach(value => {
//   console.log(value + ' -> ', value.match(pattern))
// });
//-----------------------------------------------------------------------------------

//EXTRACCIÓN DE IMÁGENES
// Caso 1

// De una sola linea extraer el contenido de src:

// <img
//   src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
// />

// const pattern = /^<img src="(.{1,}\.(jpg|gif|pdf|jpeg|png))"\/>$/;

// var codeLines = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

// console.log(codeLines.match(pattern));
//-----------------------------------------------------------------------------------

// Caso 2

// De un HTML extraer todos los src de todos los objetos img:

// var text = '
//     <html>
//     <body>
//         <img
//         src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
//         />
//         <h1>ejemplo</h1>
//         <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
//     </body>
//     </html>
// '

//NO SE PONER EL TEXTO APTO EN VS, PERO EL REGEX SERÍA: /^<img src="(.{1,}\.(png|jpg))"\/>$/gim
//-----------------------------------------------------------------------------------


//TARJETAS DE CRÉDITO
// Caso 1

// Vamos a validar los siguientes formatos (todos válidos)

// Que una máster card tiene una longitud de 16 caracteres (numeros).
// Que tiene que empezar con 50,51,52,53,54,55.
// Qué lo normal es que se agrupen en conjuntos de 4 digitos.

// const pattern = /^(50|51|52|53|54|55)(\d{2}).?(\d{4}(\s|-)?){3}$/;

// const values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

// values.forEach(value => {
//   console.log('Regex matches with ' + value + ' -> ', pattern.test(value))
// })
//-----------------------------------------------------------------------------------

// Caso 2

// Vamos a extraer cada grupo de cuatro digitos.

// const pattern = /^(\d{4}).?(\d{4}).?(\d{4}).?(\d{4})$/;

// const values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

// values.forEach(value => {
//   console.log(value + ' -> ', value.match(pattern))
// });