import React from "react";
import MensajeClick from "./MensajeClick";

class MensajeClick extends React.Component {
    constructor (props){
    super(props);
    this.state = { mensaje:"has clic en el boton"}; 
    }
    cambiarMensaje = () => {
        this.setState ({ mensaje: "Mensaje cambiado!"});         
    };
    componentDiUpdate(){
    console.log("El componente se ha actualizado");    
    }
    componentWillUnmount(){
        Console.log("El componente va a desaparecer");
    }
    render (){
        return(
            <div>
                <p>{this.state.mensaje}</p>
                <button onClick={this.cambiarMensaje}>cambiarMensaje</button>
            </div>
        )
    }
}
export default MensajeClick; 