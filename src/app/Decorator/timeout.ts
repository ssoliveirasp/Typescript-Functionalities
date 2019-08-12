function timeout( milliseconds: number = 0 ) {
    return function( target, key, descriptor ) {
      var originalMethod = descriptor.value;
      descriptor.value = function (...args) {
        setTimeout(() => {
          originalMethod.apply(this, args);
         }, milliseconds);
      };
      return descriptor;
    }
}
  
export class MinhaClasse {

    @timeout(1000)
    esperaUmSegundo(): void {
        console.log("Imprime no console após um segundo");
    }

    @timeout()
    esperaNada(): void {
        console.log("Imprime no console imediatamente");
    }

}