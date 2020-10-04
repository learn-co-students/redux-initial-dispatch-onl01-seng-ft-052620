// let state = {count: 0};
let state; //we declare but do not assign our state, so it starts off undefined. 

function changeState(state = { count: 0}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 }
    default:
      return state;
  }
}

function dispatch(action){
state = changeState(state, action)
render()
}

function render(){
document.body.textContent = state.count
}

dispatch({ type: '@@INIT' }) //we dispatch an action of '@@INIT'
dispatch({type: 'INCREASE_COUNT'})
dispatch({type: 'INCREASE_COUNT'})