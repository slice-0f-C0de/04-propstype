import React from 'react';
import './App.css';
import Rating from "./Rating/Rating";
import Accordion from "./Accordion/Accordion";

function App() {
    return (
        <div>
            <Title title={"This is app component"}/>
            <Title title={"Main menu"}/>
            <Rating value={3}/>
            <Rating value={5}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
        </div>
    );
}

type TitlePropsType = {
    title: string
}

function Title(props: TitlePropsType) {
    return <h3>{props.title}</h3>
}

export default App;
