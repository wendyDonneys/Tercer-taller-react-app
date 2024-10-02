import React from "react"; 
import Counter from "./Counter";
import MensajeClick from "./MensajeClick";
import settings from "./settings";

function App1(){
    return (
        <div>
            <Counter/>
        </div>
    );
}
export default App1; 

function App2(){
    return (
        <div>
            <MensajeClick/>
        </div>
    );
}
//export default App2; 

function App3(){
    return (
        <div>
            <settings/>
        </div>
    );
}
//export default App3; 
