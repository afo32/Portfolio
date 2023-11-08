import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from '../Pages/LandingPage'; 
import { Details } from "../Pages/Details";
import { Work } from '../Pages/Works';
import { Contact } from '../Pages/Contact';
import { AppData, Form, Pokedex } from "../components";
import { FormConver } from "../components/LandingPage/Conversation/Form/FormConver";

export function MyRouts() {
    return (<Router>
        <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/details" element={<Details/>} />
            <Route exact path="/works" element={<Work/>}/>
            <Route exact path="/contact" element={<Contact/>} />
            <Route path="/works/app-data" element={<AppData />} />
            <Route exact path="/start-a-conversation" element={<FormConver/>}/>
            <Route exact path="/lets-do-it" element={<Form/>} />
            <Route exact path="/works/pokedex" element={<Pokedex />} />
        </Routes>
    </Router>

    )
}