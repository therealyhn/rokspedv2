import client1 from '../assets/clients/client1.png';
import client2 from '../assets/clients/client2.png';
import client3 from '../assets/clients/client3.png';
import client4 from '../assets/clients/client4.png';
import client5 from '../assets/clients/client5.png';
import client6 from '../assets/clients/client6.png';
import client7 from '../assets/clients/client7.png';
import client8 from '../assets/clients/client8.png';
import client9 from '../assets/clients/client9.png';
import client10 from '../assets/clients/client10.png';
import client11 from '../assets/clients/client11.png';
import client12 from '../assets/clients/client12.png';
import client13 from '../assets/clients/client13.png';
import client14 from '../assets/clients/client14.png';
import client15 from '../assets/clients/client15.png';
import client16 from '../assets/clients/client16.png';
import client17 from '../assets/clients/client17.png';
import client18 from '../assets/clients/client18.png';
import client19 from '../assets/clients/client19.png';
import client20 from '../assets/clients/client20.png';
import client21 from '../assets/clients/client21.png';
import client22 from '../assets/clients/client22.png';
import client23 from '../assets/clients/client23.png';
import client24 from '../assets/clients/client24.png';
import client25 from '../assets/clients/client25.png';
import client26 from '../assets/clients/client26.png';
import client27 from '../assets/clients/client27.png';
import client28 from '../assets/clients/client28.png';
import client29 from '../assets/clients/client29.png';
import client30 from '../assets/clients/client30.png';
import client31 from '../assets/clients/client31.png';
import client32 from '../assets/clients/client32.png';
import client33 from '../assets/clients/client33.png';
import client34 from '../assets/clients/client34.png';
import client35 from '../assets/clients/client35.png';
import client36 from '../assets/clients/client36.png';
import client37 from '../assets/clients/client37.png';

// Array of client images
const clientsImages = [
  client1, client2, client3, client4, client5, client6, client7, client8, client9, client10,
  client11, client12, client13, client14, client15, client16, client17, client18, client19, client20,
  client21, client22, client23, client24, client25, client26, client27, client28, client29, client30,
  client31, client32, client33, client34, client35, client36, client37,
];

const clientWebsites = [
  "http://www.tomitrade.co.rs/", "https://schwingstetter.rs/", "https://mayekawa.rs/", "https://www.mashtronics.com/",
  "https://eurocem.rs/", "https://ks-safety.biz/", "https://www.ekofurnir.com/", "https://profiweld.rs/", "", "", 
  "https://www.agc-glass.eu/", "https://www.decoinvest.com/", "https://dahop-utva.com/", "https://birotehna.rs/", 
  "https://www.metal-flex.com/", "https://www.goek-color.de/", "", "", "https://novasumadija.rs/", "", 
  "https://www.preymesser.de/en/locations/serbia/", "https://srafkocom.rs/", "https://champicomp.rs/", "https://www.masterline.rs/", 
  "", "", "https://timotijevic.net/", "https://www.procema.ro/", "", "https://deltaagrar.rs/", "https://tehnograd.rs/", 
  "http://www.mstecnologie.com/en/", "https://elektrovodomont.rs/", "https://mlweldengineering.rs/", "https://utva.rs/en/home-page/", "", "",
];

const ClientsSection = () => {
  return (
    <div id="clients" className="w-11/12 max-w-5xl mx-auto md:pt-5 pb-10 relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {clientWebsites.map((website, index) => (
          <a
            key={index}
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="client-link"
          >
            <img
              src={clientsImages[index]}
              alt={`Client ${index + 1}`}
              className="w-32 h-32 md:w-48 md:h-48 object-contain hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer mix-blend-multiply"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default  ClientsSection;
