const button1 = document.getElementById('increment'); // getElementById sirve para seleccionar el id que se coloco en la etiqueta del boton
const button2 = document.getElementById('decrement');

const buttonLike = document.getElementById('like');
const buttonDislike = document.getElementById('dislike');
// Reducers
const initialState = 0;
function counterReducer(state = initialState, action){
  switch (action.type) {
    case 'INCREMENT':
      return state + 10;
    case 'DECREMENT':
      return state - 10;
    default:
      return state;
  }
}
// Combine Reducers
function likesCounterReducer(state = 0, action){
    switch (action.type) {
      case 'LIKE':
        return state + 1;
      case 'DISLIKE':
        return state - 1;
      default:
        return state;

    }
}


const rootReducer = Redux.combineReducers({ // Este rootReducer combina todos los Reducers en un objeto con un nombre y luego se utiliza la funcion combineReducers para poder combinarlos.
  counter: counterReducer,
  likes: likesCounterReducer
});

function render(){
  //document.querySelector('h2').innerHTML = store.getState(); //querySelector sirve para seleccionar la etiqueta del html, ademas, se obtiene el estado
  document.getElementById('count').innerHTML = store.getState().counter;
  document.getElementById('likes').innerHTML = 'Likes: ' + store.getState().likes;
}

// Store
const store = Redux.createStore(rootReducer);
store.subscribe(render); // Se llama a la funcion render para poder selecionar las etiquetas creadas

// Actions
button1.addEventListener('click', () => { // Acciona un evento de JS el cual indica, al momento de oprimir click en el botton1 (en la parte superior nombrada), con la id indicada, seleccionar esta accion.
  store.dispatch({ type: 'INCREMENT' });
});
button2.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});

buttonLike.addEventListener('click', () => {
  store.dispatch({ type: 'LIKE' });
});

buttonDislike.addEventListener('click', () => {
  store.dispatch({ type: 'DISLIKE' });
});
