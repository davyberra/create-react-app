import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.querySelector("#root");

const user = {
    firstName: "Davy",
    lastName: "Berra",
};

function Header() {
    return <h1>Hello, {user.firstName} {user.lastName}!</h1>;
};

function Body() {
    return (
        <>
            <p>This is the body.</p>
            <br />
            <p>This is more of the body!</p>
        </>
    )

};

const element =
    <>
        <Header />
        <Body />
    </>;


ReactDOM.render(element, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
