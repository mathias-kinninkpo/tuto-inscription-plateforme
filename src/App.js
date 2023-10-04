import './App.css';
import Connexion from './connexion';
import CreationCompte from './creationCompte';
import Introduction from './introduction';
import NouveauBachelierInscription from './nouveauBachelierInscription';
import Preinscription from './preinscription';

function App() {
  return (
    <div>
      <Introduction />  
      <Preinscription />
      <CreationCompte />
      <Connexion />
      <NouveauBachelierInscription />
    </div>
  );
}

export default App;
