import React from 'react';
import creationCompteImage from './assets/images/creation-compte.png';

const Preinscription = () => {
  return (
    <section className="bg-gray-100 py-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="text-justify">
            <h2 className="text-4xl font-extrabold">Module de Préinscription</h2>
            <p className="text-lg">
              Le module de préinscription est une étape cruciale pour votre parcours d'inscription à l'Université d'Abomey-Calavi (UAC).
              Il garantit la précision des informations fournies, la justesse des documents téléchargés et la sécurité de vos données.
              En utilisant ce module, vous pouvez créer un compte sur notre plateforme en toute confiance, en renseignant de manière précise les informations requises et en téléchargeant les documents nécessaires de manière sécurisée.
              Une fois inscrit, vous aurez un accès sécurisé à votre espace étudiant, où vous pourrez suivre votre progression et compléter votre inscription de manière fluide et sans soucis.
            </p>
          </div>
          <div>
            {/* Vous pouvez ajouter ici une image illustrant le module de préinscription */}
            <img
              src={creationCompteImage}
              alt="Module de Préinscription"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preinscription;
