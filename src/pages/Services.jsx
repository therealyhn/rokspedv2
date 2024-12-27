import PageHeader from '../components/PageHeader';
import Navbar from '../components/Navbar';
import ServicesIntro from '../components/ServicesIntro';
import ServiceSection from '../components/ServiceSection';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

import headerImage from '../assets/service-test.png';
import carinskoIcon from '../assets/carinsko-icon.png';
import carinskoImage from '../assets/carinsko.png';
import logistikaIcon from '../assets/logistika-icon.png';
import logistikaImage from '../assets/logistika.png';
import skladisteIcon from '../assets/skladiste-icon.png';
import skladisteImage from '../assets/skladiste.png';
import transportIcon from '../assets/transport-icon.png';
import transportImage from '../assets/transport.png';
import Footer from '../components/Footer';

const ServicesPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const images = [
            headerImage,
            carinskoIcon,
            carinskoImage,
            logistikaIcon,
            logistikaImage,
            skladisteIcon,
            skladisteImage,
            transportIcon,
            transportImage
        ];
        let loadedImagesCount = 0;

        const handleImageLoad = () => {
            loadedImagesCount++;
            if (loadedImagesCount === images.length) {
                setLoading(false);
            }
        };

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = handleImageLoad;
        });

        return () => {
            // No need to clean up as we are not adding event listeners
        };
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <div id="services" className="w-full grid grid-cols-1">
            <Navbar />
            <PageHeader
                backgroundImage={headerImage}
                title="Usluge"
                subtitle="ROK ŠPED PLUS D.O.O."
            />

            <ServicesIntro />

            <ServiceSection
                title="Carinsko posredovanje"
                icon={carinskoIcon}
                image={carinskoImage}
                isImageLeft={true}
                description="Nudimo Vam brzu i sigurnu uslugu carinjenja, bez obzira o kom se carinskom postupku radi. Uvek dostupni carinski referenti će se pobrinuti da se postupak carinjenja obavi u što kraćem vremenskom roku i na obostrano zadovoljstvo"
                list={{
                    title: "Za svoje klijente vrši kompletnu uslugu:",
                    items: [
                        "Prijavljivanje i smeštaj robe u carinskom skladištu",
                        "Izrada i podnošenje dokumentacije prilikom carinjenja (izrada uvoznih/izvoznih dokumenata, privremeni uvoz/izvoz, aktivno oplemenjivanje, dorada, reeksport robe)",
                        "Prenaupućenje robe"
                    ]
                }}
            />

            <ServiceSection
                title="Logistika"
                icon={logistikaIcon}
                image={logistikaImage}
                isImageLeft={false}
                description="Rok Šped Plus D.O.O. organizuje celokupan proces planiranja, obezbeđenja, kontrole, evidencije snabdevanja i zbrinjavanja materijalnim sredstvima, organizacije transporta i sve prateće operacije potrebne za ispunjavanje vaših poslovnih ciljeva."
                list={{
                    title: "Naše logističke usluge obuhvataju:",
                    items: [
                        "Organizacija transportom",
                        "Evidencija skladištenjem",
                        "Evidencija zalihama",
                        "upravljanje informacijama"
                    ]
                }}
            />

            <ServiceSection
                title="Skladištenje"
                icon={skladisteIcon}
                image={skladisteImage}
                isImageLeft={true}
                description="Samostalno ili u kombinaciji sa našim drugim uslugama, usluge skladištenja i dodavanja vrednosti utiču na sniženje Vaših troškova poslovanja uz uvećanje vrednosti Vaših proizvoda. U konsultaciji sa Vama, kreiramo procese koji će u potpunosti podržati Vaše poslovanje."
            />

            <ServiceSection
                title="Transport"
                icon={transportIcon}
                image={transportImage}
                isImageLeft={false}
                description="Za naše klijente organizujemo sve vrste transporta (drumski, pomorski, vazdušni, železnički) bez obzira na destinaciju, količinu robe i veličinu pošiljke. Imamo stroge kriterijumime kada je u pitanju izbor transport-partnera u zemlji i svetu. Ugovarajući za naše klijente prevoz robe u drumskom, železničkom, avio ili brodskom saobraćaju, pronalazimo optimalan odnos kvaliteta, brzine, pouzdanosti i cene. Svesni smo koliko je za naše klijente važno da svoju pošiljku imaju na pravom mestu u pravo vreme uz dobre uslove."
                actionButton={{
                    text: "TRANSPORT USLUGE",
                    link: "/transport"
                }}
            />
            <Footer />
        </div>
    );
};

export default ServicesPage;