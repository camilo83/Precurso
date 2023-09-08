let number_list = [];     

function add_number() {
    other_number = 'SI'
    while (other_number.toUpperCase() === 'SI' || other_number.toUpperCase() === 'SÍ') {
       let number = prompt ('Digita un número:')
       if (isNaN(number)){
        console.log('El numero registrado no es valido')
        other_number = 'SI'
    } else {
        number_list.push (Number(number))
        let response;
        while (true) {
            response = prompt('¿Desea incluir otro número? (SI/NO)').toUpperCase();
            if (response === 'SI' || response === 'NO') {
                break; 
            } else {
                alert('Por favor, ingrese una respuesta válida (SI o NO).');
            }
        }       
        other_number = response.toUpperCase()
        }
    }   
}


function operations(){
    let sum = number_list [0]
    let rest = number_list [0]
    let product = number_list [0]
    let division = number_list [0]
    let division_response;
    let square;

    if (number_list.length === 1){
        square = Math.sqrt (number_list[0]);
        console.log ('La raiz cuadrada de ' + number_list[0] + ' es: ' + square )
    } else {
        for (i=1; i<number_list.length ; i++){ 
        sum += number_list[i]
        rest -= number_list[i]
        product *= number_list[i]
        if (number_list[i] === 0 ){
            division_response = ('No es posible dividir por cero (0)')
        } else{
            division /= number_list[i]
            division_response = ('La división de estos números da: ' + division)
        }
        }
        console.log ('Los número introducidos fueron: ' + number_list)
        console.log ('La suma de estos número da: ' + sum)
        console.log ('La resta de estos número da: ' + rest)
        console.log ('El producto de estos número da: ' + product)
        console.log (division_response)
    }
}


add_number ()
operations()

let new_numbers = true;
while (new_numbers === true){
    new_numbers = confirm ('¿Desea incluir nuevos numeros?')
    if (new_numbers === true ){
        add_number()
        operations()
    } else {
        alert ('Gracias por usar la calculadora' )
    }
}



 