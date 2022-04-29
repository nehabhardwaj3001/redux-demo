const redux = require('redux')
const createStore = react-redux.createStore 

const BUY_CAKE = "BUY_CAKE"

function buyCake() {
return {
 type: BUY_CAKE,
    // info: "first redux action"
}}

const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return{
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    } createStore
}

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())

unsubscribe()