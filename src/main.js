export default class App {

    factorial(numero) {
        let factor = 1;
        for(let i = 1;i <= numero; i++ ) {
            factor = factor * i;
        }
        return factor;
    }
}

let app = new App();

//Comprobacion factorial
console.log(app.factorial(5));