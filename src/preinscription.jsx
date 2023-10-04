import React from 'react';
import preinscriptionImage from './assets/images/accueil_preinscription.png'

const Preinscription = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-justify">
            <h2 className="display-4">Module de Préinscription</h2>
            <p className="lead text-justify">
              Le module de préinscription est une étape cruciale pour votre parcours d'inscription à l'Université d'Abomey-Calavi (UAC).
              Il garantit la précision des informations fournies, la justesse des documents téléchargés et la sécurité de vos données.
              En utilisant ce module, vous pouvez créer un compte sur notre plateforme en toute confiance, en renseignant de manière précise les informations requises et en téléchargeant les documents nécessaires de manière sécurisée.
              Une fois inscrit, vous aurez un accès sécurisé à votre espace étudiant, où vous pourrez suivre votre progression et compléter votre inscription de manière fluide et sans soucis.
            </p>
          </div>
          <div className="col-lg-6">
            {/* Vous pouvez ajouter ici une image illustrant le module de préinscription */}
            <img
              src= {preinscriptionImage}
              alt="Module de Préinscription"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preinscription;
