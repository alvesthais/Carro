export class Carro{
    passageiros : number ;
    tanqueGas : number ;
    anda : number ;

    constructor(){
        this.passageiros = 0 ;
        this.tanqueGas = 0 ;
        this.anda = 0 ;
    }

    encheTanque (enche : number ) : void {
        if( (this.tanqueGas+ enche) <=10 ){
            this.tanqueGas  += enche ;
        }
        else {
            this.tanqueGas+=10;
        }
    }
    embarque (pessoa : number) : void {
        if ((this.passageiros + pessoa) <= 2){
            this.passageiros += pessoa ;
        }
        else {
            this.passageiros += 1;
        }
    }
    partir (dist : number) : void {
        if(this.passageiros > 0 &&  this.tanqueGas >= (dist / 10)){
            if (dist == 10){
            this.tanqueGas -= 10;
            this.anda += 1;
            }
            else{
                console.log("nao eh possivel iniciar a viagem");
        }
        }
    }
}




