class CuentaBancaria{
    constructor(saldoInicial,titular,tipoCuenta){
        this.tipoCuenta = tipoCuenta
        this.titular = titular
        let saldo = saldoInicial
        
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
        let comision = 0
        if (destino.tipoCuenta=='Caja de Ahorro'){
            comision = 0.03
        } else if (destino.tipoCuenta=='Cuenta Corriente'){
            comision = 0.02
        }
        let montoTotal = monto + monto*comision
        destino.depositar(monto)
        this.retirar(montoTotal)
        }
    };
}

let cuenta1 = new CuentaBancaria(2000,'Jorge','Caja de Ahorro')
let cuenta2= new CuentaBancaria(0,'Fabian','Cuenta Corriente')
console.log(`cuenta 1 ${cuenta1.getSaldo()}`)
console.log(`cuenta 2 ${cuenta2.getSaldo()}`)
console.log('------------------------')
cuenta1.transferir(cuenta2,500)
console.log(`cuenta 1 ${cuenta1.getSaldo()}`)
console.log(`cuenta 2 ${cuenta2.getSaldo()}`)