import { Link } from 'react-router-dom';
import certificateLogo from '../assets/certificate-logo.png';

const AboutContent = () => {
  return (
    <div className="w-full max-w-md mx-auto md:max-w-5xl md:pt-4 pb-8 relative px-4">
      <div className="flex flex-col space-y-3">
        <p className="text-sm text-darkGray border-t-2 border-primeGreen pt-2 mt-2 md:mt-0">
          Rok Šped Plus D.O.O. pruža pravovremene, sigurne i pouzdane usluge u
          oblasti međunarodne špedicije i transporta, poslujući na visoko stručnom nivou uz otvorenu i
          ljubaznu komunikaciju naših zaposlenih. Naš tim, sa preko 15 godina iskustva u carinskom
          posredovanju i zastupanju, garantuje vrhunski kvalitet usluga po konkurentnim cenama.
          Bilo da su vaši proizvodi ili sirovine u postupku uvoza, izvoza ili nekom drugom carinskom procesu,
          obezbeđujemo efikasno zastupanje pred carinskim organima uz brzo i pouzdano sprovođenje svih
          formalnosti. Praćenje i primena izmena u carinskom i spoljnotrgovinskom zakonodavstvu deo su naše
          svakodnevne prakse, čime osiguravamo ažurnost i usklađenost sa svim propisima.
          Našim klijentima iz različitih sektora privrede pružamo sigurnost, pouzdanost i kvalitet usluga, uz
          minimizaciju troškova i maksimalnu efikasnost. Uz Rok Šped Plus D.O.O., vaše logističke potrebe su u
          sigurnim rukama.
        </p>

        <p className="text-lg text-primeGreen font-bold font-roboto">
          Naša ponuda obuhvata:
        </p>

        <ul className="text-sm text-darkGray list-disc list-inside marker:text-primeGreen space-y-1 pb-2">
          <li>
            <span className="font-bold">Carinsko posredovanje</span> – Brz i siguran proces carinjenja sa
            kompletnom podrškom, uključujući izradu i podnošenje svih potrebnih dokumenata.
          </li>
          <li>
            <span className="font-bold">Logističke usluge</span> – Sveobuhvatan proces planiranja, upravljanja
            zalihama i skladištenja, koji optimizuje vaše poslovanje.
          </li>
          <li>
            <span className="font-bold">Skladištenje</span> – Moderna i prilagodljiva skladišna rešenja koja
            smanjuju troškove i povećavaju vrednost vaših proizvoda.
          </li>
          <li>
            <span className="font-bold">Transport</span> – Organizacija svih vrsta transporta (drumski,
            pomorski, avio, železnički) uz fokus na brzinu, pouzdanost i optimalne troškove.
          </li>
        </ul>

        <p className="text-sm text-darkGray pb-2">
          Kao lider u industriji, težimo ka izvrsnosti i stalnom unapređenju naših usluga. Vaše poverenje je
          naš najveći uspeh. Kontaktirajte nas i prepustite sve logističke izazove timu koji je posvećen vašem
          uspehu!
        </p>

        <div className="flex justify-center">
          <Link 
            to="/services" 
            className="text-sm pt-4 font-bold pb-4 text-primeGreen hover:text-primeYellow transition duration-500 border-b-2 border-primeGreen font-roboto uppercase"
          >
            Pogledajte našu ponudu
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 flex-col">
          <h1 className="text-lg pb-2 pt-2 text-primeGreen font-bold uppercase font-roboto text-center md:text-left">
            Sertifikacija
          </h1>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://verify.safesigned.com/certificate/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOm51bGwsInJlZmVycmVyIjoid3d3Lmdvb2dsZS5jb20iLCJ2ZXJpZmllZCI6MCwic2NsX3R5cGUiOm51bGwsInNlYWxfc2hhcGUiOiI0IiwidGV4dF9pZCI6bnVsbCwibWluaWNvZGUiOm51bGwsInVybCI6Imh0dHA6Ly93d3cucm9rc3BlZC5ycy8iLCJ0b2tlbiI6IkYwRjAiLCJjb2Rpbmdfa2V5IjoiYmdiTm5uYmdNTExrS0tsIiwiY2VydGlmaWNhdGVfaWQiOjc0NjYsImNlcnRpZmljYXRlX3R5cGVfaWQiOjI0NCwiY2xpZW50X2lwIjoiMTg4LjI1NS4xNjQuMTQwIiwic2JfbG9nb19pZCI6bnVsbCwiaHR0cHNfdXNlZCI6ZmFsc2V9.dmbkiy8TKp0F3JfZa3FBzaxmhCUkSZLV7a4qZBOgaTY"
          >
            <img 
              src={certificateLogo} 
              alt="Certificate Logo" 
              className="w-36 mx-auto md:mx-0 md:mt-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;