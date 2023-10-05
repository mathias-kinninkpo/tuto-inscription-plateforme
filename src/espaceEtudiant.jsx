import React from 'react';

import etape1 from './assets/images/etape1-second.jpg';
import etape2 from './assets/images/etape2-second.jpg';
import etape3 from './assets/images/etape3-second.jpg';
import etape4 from './assets/images/etape4-second.jpg';
import etape5 from './assets/images/etape5-second.jpg';
import etape6 from './assets/images/etape6-second.jpg';
import etape7 from './assets/images/etape7-second.jpg';
import etape8 from './assets/images/etape8-second.jpg';
import etape9 from './assets/images/etape9-second.jpg';
import etape10 from './assets/images/etape10-second.jpg';

const EspaceEtudiantModule = () => {
  return (
    <section className="py-5 lead">
      <div className="container text-center py-5">
        <h1>Espace Étudiant</h1>
        <p className="text-justify">
          Après avoir terminé le processus de préinscription, vous aurez accès à votre espace étudiant. Voici les étapes à suivre :
        </p>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="py-5">
            <h3 className="text-center">1 - Connexion</h3>
            <p className="text-justify">
              Utilisez les informations fournies par e-mail pour vous connecter à votre espace étudiant.
            </p>
            <img
              src={etape3}
              alt="Connexion"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="py-5">
            <h3 className="text-center">2 - Personnalisation du Login et du Mot de Passe</h3>
            <p className="text-justify">
              Vous avez la possibilité de personnaliser votre nom d'utilisateur et votre mot de passe pour faciliter les futures connexions.
            </p>
            <img
              src={etape4}
              alt="Personnalisation du Login et du Mot de Passe"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="py-5">
            <h3 className="text-center">3 - Téléchargement de la Fiche de Préinscription</h3>
            <p className="text-justify">
              Dans votre espace étudiant, vous pourrez télécharger votre fiche de préinscription. Si vous avez des frais de scolarité ou d'inscription à payer, vous devrez vous rendre à la banque pour effectuer le paiement.
            </p>
            {/* <div className="d-flex justify-content-between flex-direction-columns w-100"> */}
            <img
            src={etape5}
            alt="Téléchargement de la Fiche de Préinscription"
            className="rounded w-100 pb-5"
            />
            <img
            src={etape6}
            alt="Téléchargement de la Fiche de Préinscription"
            className="rounded w-100"
            />
            {/* </div> */}
          </div>
          <div className="py-5">
            <h3 className="text-center">4 - Génération d'une Adresse Email</h3>
            <p className="text-justify">
              Votre espace étudiant vous générera une adresse e-mail que vous pourrez utiliser pour les services à venir. Nous vous recommandons de conserver cette adresse soigneusement.
            </p>
            <img
              src={etape7}
              alt="Génération d'une Adresse Email"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="py-5">
            <h3 className="text-center">5 - Prise de Rendez-vous pour le Retrait de Carte</h3>
            <p className="text-justify">
              Vous pouvez prendre rendez-vous pour le retrait de votre carte d'étudiant. Veuillez choisir des dates pendant les jours ouvrables.
            </p>
            <img
              src={etape8}
              alt="Prise de Rendez-vous pour le Retrait de Carte"
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="py-5">
            <h3 className="text-center">6 - Téléchargement du Bordereau pour la Rencontre</h3>
            <p className="text-justify">
              Dans cette étape, vous pourrez télécharger votre bordereau pour la rencontre ou votre billet d'entrée.
            </p>
            {/* <div className="d-flex justify-content-between flex-direction-columns w-100"> */}
            <img
            src={etape9}
            alt="Téléchargement de la Fiche de Préinscription"
            className="rounded w-100 pb-5"
            />
            <img
            src={etape10}
            alt="Téléchargement de la Fiche de Préinscription"
            className="rounded w-100"
            />
            {/* </div> */}
          </div>
          <div className="py-5">
            <h3 className="text-center">BRAVO !</h3>
            <p className="text-justify">
                Félicitations ! Vous avez réussi à compléter avec succès l'étape d'inscription. Bravo pour votre engagement et votre persévérance. Vous êtes maintenant prêt à profiter pleinement de tous les avantages offerts par votre espace étudiant. N'hésitez pas à explorer toutes les fonctionnalités disponibles et à contacter notre équipe d'assistance si vous avez des questions. Nous sommes là pour vous aider à réussir votre parcours académique. Bienvenue et bonne continuation !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EspaceEtudiantModule;
