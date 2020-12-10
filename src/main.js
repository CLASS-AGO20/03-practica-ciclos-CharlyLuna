export default class App {

    factorial(numero) {
        let factor = 1;
        for(let i = 1;i <= numero; i++ ) {
            factor = factor * i;
        }
        return factor;
    }

    convertirAString(numero) {
        let i = 1;
        let asterisco = "";
        while(i <= numero) {
            asterisco = asterisco + "*";
            i++;
        }
        return asterisco;
    }
}

let app = new App();

//Comprobacion factorial
console.log(app.factorial(5));
//Comprobacion convertirAString
console.log(app.convertirAString(5));