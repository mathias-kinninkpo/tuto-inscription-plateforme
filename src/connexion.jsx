import React from 'react';
import etape4 from './assets/images/etape4.jpg';

const Connexion = () => {
  return (
    <section className="bg-gray-200 py-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold">Étape 2 : Connexion</h2>
            <p className="text-lg">
              Une fois que vous avez confirmé votre compte en cliquant sur le lien de confirmation que vous avez reçu par e-mail, vous pouvez vous connecter à votre espace étudiant en toute simplicité.
              Rendez-vous sur la page de connexion, entrez votre identifiant et votre mot de passe que vous avez créés lors de votre inscription, puis cliquez sur "Se connecter".
              Vous aurez ainsi accès à votre espace personnel, où vous pourrez continuer le processus d’inscription, suivre votre progression et consulter toutes les informations importantes liées à votre dossier.
            </p>
          </div>
          <div className="lg:col-span-1">
            {/* Vous pouvez ajouter ici une image illustrant la connexion */}
            <img
              src={etape4}
              alt="Connexion"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connexion;
