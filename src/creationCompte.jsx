import React from 'react';

const CreationCompte = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>Étape 1 : Création de Compte</h2>
            <p className="lead">
              Sur la page d’inscription, veuillez fournir avec précision toutes les informations requises pour votre première inscription à l'Université d'Abomey-Calavi (UAC).
              Ces informations sont essentielles pour garantir l'exactitude de votre dossier.
              Une fois que vous avez rempli le formulaire d'inscription, vous recevrez un e-mail de confirmation à l'adresse que vous avez fournie.
              Ce mail contiendra un lien de confirmation que vous devrez cliquer pour valider votre inscription.
              Cette étape de confirmation est cruciale pour assurer la sécurité de votre compte et pour vous permettre de poursuivre le processus d’inscription en toute confiance.
            </p>
          </div>
          <div className="col-lg-6">
            {/* Vous pouvez ajouter ici une image illustrant la création de compte */}
            <img
              src="chemin_de_votre_image.jpg"
              alt="Création de Compte"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreationCompte;
