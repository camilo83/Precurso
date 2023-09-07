const flights = [
    { id: 0, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 2, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 3, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 4, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 5, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 7, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 8, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false }
  ];
  
  const name = prompt('¿Cómo te llamas? ');
  console.log(`Hola, ${name}, bienvenido a ISDI Coders Airlines`);
  
  let total_cost = 0;
  let number_of_flights = 0;
  let number_of_flights_layover = 0;
  for (let i = 0; i < flights.length; i++) {
    let text;
    if (flights[i].layover === false) {
      text = ' y no realiza ninguna escala';
    } else {
      text = ' y realiza escala';
      number_of_flights_layover += 1;
    }
    console.log(`El vuelo con origen: ${flights[i].from} , y destino: ${flights[i].to} ,tiene un coste de ${flights[i].cost} ${text}`);
  
    total_cost += flights[i].cost;
    number_of_flights += 1;
  }
  
  let average_cost = total_cost / number_of_flights;
  console.log(`${name}, te informo que el costo medio de un vuelo es: ${average_cost}`);
  console.log(`Además, ${name}, también te informo que ${number_of_flights_layover} de los ${number_of_flights} vuelos, efectúan escalas`);
  let layover_answer;
  let initial_IDs = flights.length-1;
  
  let response= 'C'; 

  //FUNCIONES

  const ProgramRun = () => {
  const admin_o_user = prompt('Si eres admin, digita A. Si eres usuario, digita B: ');
  response= admin_o_user.toUpperCase();
  if (response=== 'A') {
    console.log(`Bienvenido de nuevo admin: ${name}`);
    let admin_response = '';
    while (admin_response !== 'SALIR') {
      admin_response = prompt('Si desea agregar un nuevo viaje digite -AGREGAR-, si desea eliminar, digite -ELIMINAR-, o, si desea salir digite -SALIR ');
      admin_response = admin_response.toUpperCase();
      if (admin_response === 'AGREGAR') {
        if (flights.length >= 15) {
          console.log('No es posible agregar más viajes, ya se sobrepasó el límite de 15 viajes');
        } else {
          let layover_answer;
          initial_IDs += 1;
          console.log('A continuación, digite los siguientes datos');
          const destination = prompt('Digite el destino');
          const origin = prompt('Digite el origen');
  
          while (true) {
              price = prompt ('Digite el precio del vuelo')
              if (isNaN(price) || price<0){
                console.log('El precio registrado no es valido')
              } else {
                break
              }
            }
          let layover;
  
          while (true) {
            layover = prompt("¿Hay escala en el vuelo? (Sí / No)");
  
            if (layover !== null) {
              layover = layover.toLowerCase();
              if (layover === 'si' || layover === 'no' || layover === 'sí') {
                  if (layover === 'si'|| layover === 'sí'){
                      layover_answer = true
                  } else{
                      layover_answer = false
                  }
                break;
              } else {
                console.log("Respuesta inválida. Por favor, responde 'si' o 'no'.");
              }
            } else {
              console.log("Operación cancelada");
              break;
            }
          }
          flights.push({
            id: initial_IDs,
            to: destination,
            from: origin,
            cost: Number(price),
            layover: layover_answer,
          });
  
          console.log('Vuelo agregado:', flights[flights.length - 1]);
          console.log ('Perfecto ' + name + ', ya hemos incluido este viajes; vea aquí la lista actualizada.')
          console.log (flights)
          
        }
      } else if (admin_response === "ELIMINAR") {
        let flight_to_remove;
        while (flight_to_remove !== "CANCELAR") {
          console.log(flights);
          flight_to_remove = prompt('¿Cuál vuelo desea eliminar? (Digite el número del ID). Si no quiere eliminar ninguno, digite CANCELAR');
          
          if (flight_to_remove === 'CANCELAR' || flight_to_remove === 'Cancelar' || flight_to_remove === 'cancelar') {
            break;
          } else {
            flight_to_remove = Number(flight_to_remove);
            const flight_found = flights.find(vuelo => vuelo.id === flight_to_remove);
            if (flight_found) {
              const flight_index_to_remove = flights.indexOf(flight_found);
              flights.splice(flight_index_to_remove, 1);
              console.log('Vuelo eliminado:', flight_found);
              console.log('Lista actualizada de vuelos:', flights);
            } else {
              console.log('No se encontró ningún vuelo con el ID especificado.');
            }
          }
        }
      } else if (admin_response === "SALIR"){
          console.log ('Gracias, ' + name + ', vuelva pronto.')
      } else {
          console.log ('Intente nuevamente')
      }
    }
    return response
  } else if (response=== 'B') {
    console.log(`Bienvenido ${name} al buscador de vuelos`);
    let flight_price
  
    while (true) {
    flight_price = prompt ('¿Cuál es su precio esperado?')
    if (isNaN(flight_price) || flight_price<0){
      console.log('El precio registrado no es valido')
    } else {
      break
    }
  }
  let number_flights_under_budget = 0;
  let flights_under_budget = [];
      for (let v = 0; v <flights.length; v++){
          if (flights[v].cost <= flight_price){
              number_flights_under_budget +=1
              flights_under_budget.push(v)
          }
      }
      console.log('Hemos encontrado '+ number_flights_under_budget +' que se ajustan a su presupuesto.')
  
      for (n = 0; n<flights_under_budget.length; n++){
          const flight_index = flights_under_budget [n];
          console.log('Destino: ' + flights[flight_index].to + '  |  Origen: ' + flights[flight_index].from + '  |  Precio: ' + flights[flight_index].cost )
      }
      return response
  } else {
    console.log('Inténtalo nuevamente por favor');
    return response
    }
  }
  const start_over = () => {
    let response= 'C' 
    while (response!== 'A' && response!== 'B') {
    response= ProgramRun()
    }
  }

  let return_or_farewell = true;
  while (return_or_farewell === true) {
    start_over ()
    return_or_farewell = confirm ('¿Desea reingresar al sistema?')
  }
  
  console.log('¡Gracias ' + name + '!, vuelva pronto');
