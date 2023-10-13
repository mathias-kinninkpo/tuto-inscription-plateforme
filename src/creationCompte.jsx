import React from 'react';
import creationCompteImage from './assets/images/creation-compte.png';

const CreationCompte = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold">Étape 1 : Création de Compte</h2>
            <p className="text-lg">
              Sur la page d’inscription, veuillez fournir avec précision toutes les informations requises pour votre première inscription à l'Université d'Abomey-Calavi (UAC).
              Ces informations sont essentielles pour garantir l'exactitude de votre dossier.
              Une fois que vous avez rempli le formulaire d'inscription, vous recevrez un e-mail de confirmation à l'adresse que vous avez fournie.
              Ce mail contiendra un lien de confirmation que vous devrez cliquer pour valider votre inscription.
              Cette étape de confirmation est cruciale pour assurer la sécurité de votre compte et pour vous permettre de poursuivre le processus d’inscription en toute confiance.
            </p>
          </div>
          <div className="lg:col-span-1">
            {/* Vous pouvez ajouter ici une image illustrant la création de compte */}
            <img
              src={creationCompteImage}
              alt="Création de Compte"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreationCompte;
