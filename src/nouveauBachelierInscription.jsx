import React from 'react';
import etape5 from './assets/images/etape5.jpg';
import etape6 from './assets/images/etape6.jpg';
import etape7 from './assets/images/etape7.jpg';
import etape8 from './assets/images/etape8.jpg';
import etape9 from './assets/images/etape9.jpg';
import etape10 from './assets/images/etape10.jpg';
import etape11 from './assets/images/etape11.jpg';
import etape13 from './assets/images/etape13.jpg';

const NouveauBachelierInscription = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-extrabold">Exemple de préinscription d'un nouveau Bachelier</h2>
            <p className="text-lg text-justify">
              Pour remplir ces champs, utilisez le jeu de données que nous vous avons fourni. Par exemple, vous donnerez un jeu de test en mettant en gras les informations à utiliser.
            </p>
          </div>
          <div className="lg:col-span-1">
            {/* Vous pouvez ajouter ici une image illustrant la préinscription */}
            <img
              src={etape5}
              alt="Renseigner les informations sur le nouveau bachelier"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="py-5">
            <h3 className="text-2xl font-bold">1 - Renseigner les informations sur le nouveau bachelier</h3>
            <p className="text-lg text-justify">
              Pour remplir ces champs, utilisez le jeu de données que nous vous avons fourni. Par exemple, vous donnerez un jeu de test en mettant en gras les informations à utiliser.
            </p>
            <img
              src={etape6}
              alt="Renseigner les informations sur le nouveau bachelier"
              className="w-full h-auto"
            />
          </div>
          <div className="py-5">
            <h3 className="text-2xl font-bold">2 - Vérification d'identité</h3>
            <p className="text-lg text-justify">
              À ce niveau, vous aurez à renseigner les informations concernant votre identité (nom, prénom, série, NPI, nationalité, date et lieu de naissance, ...). Veillez à la précision des informations.
            </p>
            <img
              src={etape7}
              alt="Vérification d'identité"
              className="w-full h-auto"
            />
          </div>
          <div className="py-5">
            <h3 className="text-2xl font-bold">3 - Sélection filière</h3>
            <p className="text-lg text-justify">
              À ce niveau, sélectionnez les filières qui vous sont proposées. Notez que vous ne pouvez sélectionner qu'une école à la fois, et vous ne pouvez avoir qu'une allocation.
            </p>
            <img
              src={etape8}
              alt="Sélection filière"
              className="w-full h-auto"
            />
          </div>
          <div className="py-5">
            <h3 className="text-2xl font-bold">4 - Information personnelle de l'étudiant</h3>
            <p className="text-lg text-justify">
              Renseignez les informations personnelles de l'étudiant.
            </p>
            <img
              src={etape9}
              alt="Information personnelle de l'étudiant"
              className="w-full h-auto"
            />
          </div>
          <div className="py-5">
            <h3 className="text-2xl font-bold">5 - Récapitulatif</h3>
            <p className="text-lg text-justify">
              Avant de valider définitivement votre inscription, vérifiez la conformité des informations de l'étudiant.
            </p>
            <img
              src={etape10}
              alt="Récapitulatif"
              className="w-full h-auto"
            />
          </div>
          <div className="py-5">
            <h3 className="text-2xl font-bold">6 - Termes juridiques</h3>
            <p className="text-lg text-justify">
              Acceptez les termes juridiques pour terminer le processus d’inscription.
            </p>
            <img
              src={etape11}
              alt="Termes juridiques"
              className="w-full h-auto"
            />
          </div>
          <div className="py-5">
            <h3 className="text-2xl font-bold">7 - Vous êtes à la fin !</h3>
            <p className="text-lg text-justify">
            À la fin du processus de préinscription, vous recevrez un mail de validation dans votre boîte de réception, ce qui vous permettra de soumettre définitivement votre inscription.
            </p>
            <img
              src={etape13}
              alt="Vous êtes à la fin !"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NouveauBachelierInscription;
