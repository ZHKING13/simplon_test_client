import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddParticipant from "./pages/addParticipant";
import ParticipantList from "./pages/participantList";
import Topbar from "./component/Topbar";

function App() {
    return (
        <Router>
            <Topbar />
            <Routes>
                <Route path="/" exact element={<ParticipantList />} />
                <Route path="/ajouter" exact element={<AddParticipant />} />
            </Routes>
        </Router>
    );
}

export default App;
