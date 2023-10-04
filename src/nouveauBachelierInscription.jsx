import React from 'react';
import accueilPreinscriptionImage from './assets/images/accueil_preinscription.png'
import informationDiplomeImage from './assets/images/informations_diplome-nouveau_bachelier.png'
import verificationImage from './assets/images/verification_identite-nouveau_bachelier.png'
import selectionFiliereImage from './assets/images/selection_filiere-nouveau_bachelier.png'
import informationPersonnelleImage from './assets/images/informations_peronnelles-nouveau_bachelier-1.png'
import recapitulatifImage from './assets/images/recapitulatif_infos-nouvo_bachelier-1.png'
import termeJuridiqueImage from './assets/images/termes_juridiques-nouveau_bachelier.png'
import succesPreinscriptionImage from './assets/images/compte_success-nouveau_bachelier.png'


const NouveauBachelierInscription = () => {
  return (
    <section className="py-5 lead">
      <div className="container text-center">
        <h2>Exemple de préinscription d'un nouveau Bachelier</h2>
        <p className="text-justify">
          Pour remplir ces champs, utilisez le jeu de données que nous vous avons fourni. Par exemple, vous donnerez un jeu de test en mettant en gras les informations à utiliser.
        </p>
        <img
          src={accueilPreinscriptionImage}
          alt="Renseigner les informations sur le nouveau bachelier"
          className="img-fluid"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div>
            <h3 className="text-center">1 - Renseigner les informations sur le nouveau bachelier</h3>
            <p className="text-justify">
              Pour remplir ces champs, utilisez le jeu de données que nous vous avons fourni. Par exemple, vous donnerez un jeu de test en mettant en gras les informations à utiliser.
            </p>
            <img
              src={informationDiplomeImage}
              alt="Renseigner les informations sur le nouveau bachelier"
              className="img-fluid"
            />
          </div>
          <div>
            <h3 className="text-center">2 - Vérification d'identité</h3>
            <p className="text-justify">
              À ce niveau, vous aurez à renseigner les informations concernant votre identité (nom, prénom, série, NPI, nationalité, date et lieu de naissance, ...). Veillez à la précision des informations.
            </p>
            <img
              src={verificationImage}
              alt="Vérification d'identité"
              className="img-fluid"
            />
          </div>
          <div>
            <h3 className="text-center">3 - Sélection filière</h3>
            <p className="text-justify">
              À ce niveau, sélectionnez les filières qui vous sont proposées. Notez que vous ne pouvez sélectionner qu'une école à la fois, et vous ne pouvez avoir qu'une allocation.
            </p>
            <img
              src={selectionFiliereImage}
              alt="Sélection filière"
              className="img-fluid"
            />
          </div>
          <div>
            <h3 className="text-center">4 - Information personnelle de l'étudiant</h3>
            <p className="text-justify">
              Renseignez les informations personnelles de l'étudiant.
            </p>
            <img
              src={informationPersonnelleImage}
              alt="Information personnelle de l'étudiant"
              className="img-fluid"
            />
          </div>
          <div>
            <h3 className="text-center">5 - Récapitulatif</h3>
            <p className="text-justify">
              Avant de valider définitivement votre inscription, vérifiez la conformité des informations de l'étudiant.
            </p>
            <img
              src={recapitulatifImage}
              alt="Récapitulatif"
              className="img-fluid"
            />
          </div>
          <div>
            <h3 className="text-center">6 - Termes juridiques</h3>
            <p className="text-justify">
              Acceptez les termes juridiques pour terminer le processus d’inscription.
            </p>
            <img
              src={termeJuridiqueImage}
              alt="Termes juridiques"
              className="img-fluid"
            />
          </div>
          <div>
            <h3 className="text-center">7 - Vous êtes à la fin !</h3>
            <p className="text-justify">
            À la fin du processus de préinscription, vous recevrez un mail de validation dans votre boîte de réception, ce qui vous permettra de soumettre définitivement votre inscription.
            </p>
            <img
              src={succesPreinscriptionImage}
              alt="Termes juridiques"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NouveauBachelierInscription;
