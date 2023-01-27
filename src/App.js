import './App.css';
import Contacts from './components/Contacts';
import ContactUpdate from './components/ContactUpdate';
import { Routes, Route } from "react-router-dom"
import CreateContact from './components/CreateContact';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Contacts />}/>
        <Route path="/:id" element={<ContactUpdate />}/>
        <Route path='/create' element={<CreateContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
