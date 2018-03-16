import React from 'react';
import ReactDOM from 'react-dom';
import './test.css';

// const Button = props => {
//     const { kind, ...other } = props;
//     return <button className={kind} {...other} />;
// };

// const ButtonTest = () => {
//     return (
//         <div>
//             <Button kind="primary" onClick={() => alert("clicked!")}>
//                 Hello World!
//             </Button>
//         </div>
//     );
// }
//export default ButtonTest;
function Greeting (props) {
    return (<h1 className={props.styleName}>Hello, {props.firstName} {props.lastName}</h1>);
}
function App1() {
    return <Greeting firstName="Ben1" lastName="Hector1" styleName="primary" />;
}
  
function App2() {
    const props = {firstName: 'Ben2', lastName: 'Hector2', styleName: "secondary"};
    return <Greeting {...props} />;
}
const Greetings = {App1: App1, App2: App2};
export default Greetings;