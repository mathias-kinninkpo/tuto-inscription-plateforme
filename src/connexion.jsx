import React from 'react';
import etape4 from './assets/images/etape4.jpg'

const Connexion = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>Étape 2 : Connexion</h2>
            <p className='lead'>
              Une fois que vous avez confirmé votre compte en cliquant sur le lien de confirmation que vous avez reçu par e-mail, vous pouvez vous connecter à votre espace étudiant en toute simplicité.
              Rendez-vous sur la page de connexion, entrez votre identifiant et votre mot de passe que vous avez créés lors de votre inscription, puis cliquez sur "Se connecter".
              Vous aurez ainsi accès à votre espace personnel, où vous pourrez continuer le processus d’inscription, suivre votre progression et consulter toutes les informations importantes liées à votre dossier.
            </p>
          </div>
          <div className="col-lg-6">
            {/* Vous pouvez ajouter ici une image illustrant la connexion */}
            <img
              src={etape4}
              alt="Connexion"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connexion;
