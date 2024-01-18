import './App.css'
import { Accueil } from './contenus/Accueil'
import { Routes,Route } from 'react-router-dom'
import { Contact } from './contenus/Contact';
import { Services } from './contenus/Services';
// import { Avis } from './contenus/Avis'; 
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Accueil/> } />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/services' element={<Services/>} />
        {/* <Routes path='/avis' element={<Avis />} /> */}
      </Routes>
    </div>
  );
}


export default App
