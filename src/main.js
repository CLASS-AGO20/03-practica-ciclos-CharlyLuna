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

    obtenerDivisibles(numero) {
        let i = 1;
        let divisibles = 0;
        do {
            if(numero % i === 0) {
                divisibles = divisibles + 1;
            }
            i++;
        } while(i <= numero);
        return divisibles;
    }
}

let app = new App();

//Comprobacion factorial
console.log(app.factorial(5));
//Comprobacion convertirAString
console.log(app.convertirAString(5));
//Comprobacion obtenerDivisibles
console.log(app.obtenerDivisibles(6));