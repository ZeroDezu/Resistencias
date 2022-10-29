import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent implements OnInit {


  color1='';
  color2='';
  color3='';
  tolerancia=1;
  toleranciaV=''

  min=0;
  max=0;

  resistencia=0;

  porcesar(){
    let valorr:number=this.valor();
    
      if (this.tolerancia == 1){
        let tolerancia:string='oro';
        let resultado:number=0;
        resultado=valorr*0.05
        this.max=valorr+resultado
        this.min=valorr-resultado
        tolerancia='Oro'
        this.toleranciaV=tolerancia
      }
      else{
        let tolerancia:string='Plata'
        let resultado:number=0;
        resultado=valorr*0.10
        this.max=valorr+resultado
        this.min=valorr-resultado
        this.toleranciaV=tolerancia
      }
    this.resistencia=valorr;
  }

  valor(){
    let color1:number=0
    let color2:number=0

    let Negro:number=0
    let Cafe:number=1
    let Rojo:number=2
    let Naranja:number=3
    let Amarillo:number=4
    let Verde:number=5
    let Azul:number=6
    let Violeta:number=7
    let Gris:number=8
    let Blanco:number=9

    switch ( this.color1 ) {
      case 'Negro':
          color1 = Negro;
          break;
      case 'Cafe':
          color1 = Cafe
        break;
      case 'Rojo':
          color1 = Rojo
        break;
      case 'Naranja':
          color1 =Naranja
        break;
      case 'Amarillo':
          color1 = Amarillo
        break;
      case 'Verde':
          color1 = Verde
        break;
      case 'Azul':
          color1 = Azul
        break;
      case 'Violeta':
          color1 = Violeta
        break;
      case 'Gris':
          color1 = Gris
        break;
      case 'Blanco':
        color1 = Blanco
        break;
   }

   switch ( this.color2 ) {
    case 'Negro':
        color2 = Negro;
        break;
    case 'Cafe':
        color2 = Cafe
      break;
    case 'Rojo':
        color2 = Rojo
      break;
    case 'Naranja':
        color2 =Naranja
      break;
    case 'Amarillo':
        color2 = Amarillo
      break;
    case 'Verde':
        color2 = Verde
      break;
    case 'Azul':
        color2 = Azul
      break;
    case 'Violeta':
        color2 = Violeta
      break;
    case 'Gris':
        color2 = Gris
      break;
    case 'Blanco':
      color2 = Blanco
      break;
 }

 let colores1:string=String(color1)+String(color2)
 let colores2:number=parseInt(colores1);
 let valorr:number=0


    switch ( this.color3 ) {
      case 'Negro':
          valorr = colores2*1;
          break;
      case 'Cafe':
          valorr = colores2*10;
        break;
      case 'Rojo':
          valorr = colores2*100;
        break;
      case 'Naranja':
          valorr = colores2*1000;
        break;
      case 'Amarillo':
          valorr = colores2*10000;
        break;
      case 'Verde':
          valorr = colores2*100000;
        break;
      case 'Azul':
        valorr = colores2*1000000;
        break;
      case 'Violeta':
        valorr = colores2*10000000;
        break;
      case 'Gris':
        valorr = colores2*100000000;
        break;
      case 'Blanco':
        valorr = colores2*1000000000;
        break;
   }
   return valorr
  }


  ngOnInit(): void {
  }

}
