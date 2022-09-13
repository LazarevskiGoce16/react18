
// Action is a function that returns an object 
// of type  { type : TYPO_OF_ACTION , payload : NEW_STATE }
export const sayHallo = () => {

    return {
        type : "SAY_HELLO",
        payload: "Hi and welcome to my loveley REDUX App !!!"
    }

}