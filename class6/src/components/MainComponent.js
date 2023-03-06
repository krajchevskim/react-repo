import { useState } from "react";
import Dropdown from "./Dropdown";
import FieldInput from "./FieldInput";
import ShowLoggedUsers from "./ShowLoggedUsers";

const MainComponent = () => {
    const [loggedUsers, setLoggedUsers] = useState([]); // празна низа која подоцна ќе ја пополнам со низа од User објекти


    const initialObj = {
        user: "",
        pass: "",
        comment: "",
        app: ""
    } // иницијален објект кој ќе го користам како шема за полињата


    const [userObj, setUserObj] = useState(initialObj); // објект кој се пополнува со полињата од формата

    const apps = [
        { id: 1, name: "Facebook" },
        { id: 2, name: "Instagram" },
        { id: 3, name: "Twitter" },
    ];

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setLoggedUsers([...loggedUsers, userObj]); // додава нов User објект во низата од објекти
        setUserObj(initialObj); // ги празни полињата во објектот и истовремено ја брише содржината на input полињата на формата
    }; // функција која ја обработува формата

    const onDropDownChange = (e) => {
        setUserObj(prevState => {
            return {...prevState, [e.target.name] : e.target.value}
        });
    }; // го додава изборот од dropwdown менито
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <div>Main Component</div>
                <FieldInput userObj={userObj} setUserObj={setUserObj} />
                <Dropdown options={apps} onDropDownChange={onDropDownChange} />
                <button>Submit</button>
            </form>
            <ShowLoggedUsers loggedUsers={loggedUsers} />
        </>
    );
};

export default MainComponent;