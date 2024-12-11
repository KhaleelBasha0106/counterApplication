import actionsType from "./actionType"

export const increment = ()=>{
    return{
        type:actionsType.Increment,
        payload : 1
    }
}

 export const decrement = ()=>{
    return{
        type:actionsType.Decrement,
        payload : 1
    }
}

