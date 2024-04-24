class CuentaBancaria{
    constructor(saldoInicial,titular){
        this.saldoInicial = saldoInicial
        this.titular = titular
        let saldo = this.saldoInicial
        
         this.getSaldo=function(){
             return `Saldo: ${saldo}`
         }
         
         this.depositar=function(monto){
             saldo += monto
         }
     
         this.retirar=function(monto){
             saldo -= monto
         }
     
         this.transferir=function(destino=CuentaBancaria,monto){
             destino.depositar(monto)
             this.retirar(monto)
         }
    };
    

}

let cuenta1 = new CuentaBancaria(2000,'Jorge')
let cuenta2= new CuentaBancaria(0,'Fabian')
console.log(cuenta1.getSaldo())
console.log(cuenta2.getSaldo())
cuenta1.transferir(cuenta2,500)
console.log(cuenta1.getSaldo())
console.log(cuenta2.getSaldo())