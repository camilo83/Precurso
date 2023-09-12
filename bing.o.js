let square_size = 0;
while (square_size < 2 || square_size > 6){
    square_size = prompt ('De que temaño quieren los cuadros para jugar (minimo 2 - máximo 6)')
    if (isNaN(square_size)){
        alert ('Debes escribir un número para especificar el tamaño del cuadro')
    } else {
        square_size = Math.round (Number(square_size))
        if (square_size < 2 || square_size > 6) {
            alert('El tamaño debe estar entre 2 y 6.');
        }
    }
}

let bingo_card = []
for (i = 0; i < square_size ; i++){
    bingo_card.push ([])
}

let max_number = 15;
let min_number = 1;
let bingo_card_numbers =[0];
let number_list = [];
let new_number
let score = []
let completed = false;
let user_name;


//AQUI HACEMOS LAS FUNCIONES

function write_name(){
    user_name = prompt ('Bienvenido al juego de Bingo, ¿Cual es su nombre?')
}

function generate_Random_Number(max_number, min_number) {
    return Math.ceil(Math.random() * (max_number - min_number)) + min_number;
} 

function create_square(){
    for (i = 0; i < square_size ; i++){
        for (k = 0; k <square_size ; k++){
            while (true){
                let random_number = ( generate_Random_Number (max_number, min_number)) + (i*15)
                if (!bingo_card_numbers.includes(random_number)) {
                    bingo_card[i][k] = random_number;
                    bingo_card_numbers.push(random_number);
                    break;
                }
            }
        }
    }
    for (j = 0; j<bingo_card.length; j++){
        bingo_card[j].sort(function(a,b){
            return a-b;
        })
    }
    console.log ('Este es su cuadro de Bingo')
    alert (bingo_card);
    console.log(bingo_card.length)
    new_board()
 }

 function new_board(){
     
         let response = confirm ('¿Desea crear un nuevo cuadro?');
         
         if (response === false) {
             return false;
         } else {
             create_square() // Llamar a la función para crear una nueva tarjeta de bingo.
         } 
     }
 

function isNumberInList(new_number, number_list) {
    return number_list.indexOf(new_number) !== -1;
}
 
function turn () {
    let continue_game = true;

    while (continue_game){   
        if ((number_list.length) === ((bingo_card.length * 15)-1)){
            console.log('Ya han salido todos los número posibles')
            break
        } else if (completed) {
            console.log ('¡Conseguiste completar el BINGO!, lo hiciste en ' + number_list.length + ' turnos.')
            break;
        } else {
            let new_number = generate_Random_Number (max_number * square_size , min_number)
            if (!isNumberInList(new_number,number_list)){
                number_list.push(new_number)
                for (i = 0; i<square_size ; i++) {
                    for (k =0; k<square_size ; k++){
                        if (bingo_card[i][k] === new_number){
                            bingo_card[i][k] = 'X'
                        }
                    } 
                }
                console.log ('Ha salido el número: ' + new_number)
                console.log (bingo_card)
            }
        }

        let all_cells_marked = true;
        for (let i = 0; i < square_size; i++) {
            for (let k = 0; k < square_size; k++) {
                if (bingo_card[i][k] !== "X") {
                    all_cells_marked = false;
                    break;
                }
            }
            if (!all_cells_marked) {
                break;
            } 
        }
        if (all_cells_marked) {
            console.log("¡BINGO!");
            console.log('Lo lograste en ' +number_list.length + ' turnos.')
            completed = true;
            break;
        } else{
            continue_game = new_turn();
        }
    }
}

  
  function new_turn (){
        if (completed === true) {
            console.log('El juego ya ha sido completado.');
            return false;
        } else {
            let response_new_turn = confirm ('¿Desea crear un nuevo número?');
            return response_new_turn
        }   
  }

  function program(){
      write_name ()
      console.log ('Hola ' + user_name)
      create_square()
      completed = false;
      turn ()
      score.push ({nombre: user_name , puntaje: number_list.length})
      console.log (score)
  }

// AQUI LLAMAMOS LAS FUNCIONES

program()
let new_player = confirm ('Desea agregar un nuevo jugador')
while (new_player === true){
    number_list = []
    program ()
    new_player = confirm ('Desea agregar un nuevo jugador')
} 


