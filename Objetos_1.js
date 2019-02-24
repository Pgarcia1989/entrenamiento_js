
// Objetos


 // -- Formas de crear un Objeto:

 //   --- 1.Forma Literal
      let ciudadano = {
            nombre:'ciudadano',
            pelo:'moreno',
            DNI:000000000+'A',
            genero:'masculino',
            bio:function(){
                 alert('hola'+this.nombre+ ' usted acaba de ser registrado en el censo de ciudadanos con DNI:' + this.DNI + 'y tiene un género:' + this.genero);
            }
        };

//    --- 2. Forma Compleja

      let cliente = new Object();
        cliente.nombre = "Juán";
        cliente.apellidos = "Martinez";
        cliente.telefono = 722456789;

//    --- 3. Función constructora

      function Companyiero(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
      }

         // Creamos el objeto

       // let Julian = new Companyiero('Julián', 'avenida diagonal', 618658925);
       //
       // console.log(Julian.direccion);
       //
       // if( Julian instanceof Companyiero ){
       //     console.log('verdadero');
       // }
       //



//    --- 4. Forma Alternativa

        cliente["nombre"]="Marcos";
        cliente["apellidos"]="García";
        cliente["telefono"]="618658927";

        // console.log(cliente);


//Genero Numero aleatorio

let magicNumber ={
  min:15,
  max:35,
  generateNumber:function(min, max){
      let numberFloat = Math.random()*(this.max-this.min)+this.min;
      return parseInt(numberFloat);
  }
};

console.log(magicNumber.generateNumber());
function Usuario(){
    counter = 0;
    let numberUsuario=prompt('Introduzca un número aleatorio');
    if(numberUsuario > magicNumber.generateNumber()){
         counter++;
        console.log('El numero introducido es mayor que el número aleatorio');
    }else if(numberUsuario<magicNumber.generateNumber()){
        counter++;
        console.log('El número introducido es menor que el número aleatorio');
    }else{
        console.log('Has acertado');
        console.log('Has necesitado '+counter+' intentos para acertar');
    //    opcion de reseteo
    }
}
Usuario();
















