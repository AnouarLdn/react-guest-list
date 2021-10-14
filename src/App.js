import React, {useState} from "react";
import stylesheet from "./App.css";

function App() {

//useState
const [person, setPerson] = useState([]);

//functions

//Add element
const addPerson = () => {
    const firstName = document.querySelector(".content").value;
    if (firstName) {
    setPerson(prevName => [...prevName, firstName]);
    console.log(firstName);
    document.querySelector(".content").value = "";
    }
}

//Delete element
const deletePerson = (e) => {
    const { id } = e.currentTarget;
    person.splice(id, 1)
    setPerson([...person]);
    console.log("person deleted");
}

// JSX
    return(
    <div className=" mainContainer ">
        <h1>GUEST LIST</h1>

        <br/>
        <input className="content"></input>
        <br/>
        <button onClick={addPerson}>Add guest</button>
        <ul>
            {person.map((pips,i) =>
                <li key={person.id} className="listItem">
                    {pips}
                    <span> </span><button key={person.id} id={i} onClick={deletePerson} className="buttonListItem"> x </button>
                </li>
                )}
        </ul>
    </div>
)
}
export default App;
