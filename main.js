const button1 = document.getElementById('increment'); // getElementById sirve para seleccionar el id que se coloco en la etiqueta del boton
const button2 = document.getElementById('decrement');

// Reducers
const initialState = 0;
function counterReducer(state = initialState, action){
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function render(){
  document.querySelector('h2').innerHTML = store.getState(); //querySelector sirve para seleccionar la etiqueta del html, ademas, se obtiene el estado
}

// Store
const store = Redux.createStore(counterReducer);
store.subscribe(render); // Se llama a la funcion render para poder selecionar las etiquetas creadas

// Actions
button1.addEventListener('click', () => { // Acciona un evento de JS el cual indica, al momento de oprimir click en el botton1 (en la parte superior nombrada), con la id indicada, seleccionar esta accion.
  store.dispatch({ type: 'INCREMENT' });
});
button2.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});
