import React from "react"; 
import settings from "./settings";

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {mostrarComponente: true};        
    }
    togleComponente =() => {
        this.setState((prevState => ({mostrarComponente: !prevState }))) 
    }
    render(){
        return(
         <div>
            <button onClick= {this.togleComponente}></button>
            {this.state.mostrarComponente
            ? "Ocultar MensajeClick"
             :"Mostrar MensajeClick"}
            <button/>     
          </div>
        );

    }
}
export default App;
