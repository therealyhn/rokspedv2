 import PageHeader from '../components/PageHeader';
import TransportIntro from '../components/TransportIntro';
import ServiceSection from '../components/ServiceSection';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

import roadIcon from '../assets/road-icon.png';
import drumskiImage from '../assets/drumski.png';
import shipIcon from '../assets/ship-icon.png';
import vodeniImage from '../assets/vodeni.png';
import avioIcon from '../assets/avio-icon.png';
import avioImage from '../assets/avio.png';
import trainIcon from '../assets/train-icon.png';
import zeleznickiImage from '../assets/zeleznicki.png';
import serviceTest from '../assets/service-test.png';

const TransportPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const images = [
            serviceTest,
            roadIcon,
            drumskiImage,
            shipIcon,
            vodeniImage,
            avioIcon,
            avioImage,
            trainIcon,
            zeleznickiImage
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

        };
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <div id="transport" className="w-full grid grid-cols-1">
            <Navbar />
            <Helmet>
                <title>Transport Usluge - ROK ŠPED PLUS SMEDEREVO</title>
            </Helmet>
            <PageHeader
                backgroundImage={serviceTest}
                title="Transport"
                subtitle="ROK ŠPED PLUS SMEDEREVO"
            />

            <TransportIntro />

            <ServiceSection
                title="Drumski transport"
                icon={roadIcon}
                image={drumskiImage}
                isImageLeft={true}
                description="Drumski transport robe organizujemo na celoj teritoriji Evrope i šire, dok za dalje destinacije preporučujemo kombinovani transport robe, bilo da se radi o vodenom, železničkom ili avio transportu robe. Drumski transport robe ujedno spada u najčešće usluge transporta koje pružamo našim klijentima."
                list={{
                    items: [
                        "Puni ili delimični kamionski utovari",
                        "Zbirne kamionske pošiljke"
                    ]
                }}
                actionButton={{
                    text: "KONTAKTIRAJTE NAS",
                    link: "/contact"
                }}
            />

            <ServiceSection
                title="Vodeni transport"
                icon={shipIcon}
                image={vodeniImage}
                isImageLeft={false}
                description="Efikasan transport robe vodenim saobraćajem iziskuje uključenje i drugih vidova saobraćaja. Pored pouzdane, efikasne i kvalitetne usluge transporta robe vodenim saobraćajem, ujedno Vam nudimo i pronalaženje adekvatne rute kako bi se određena količina robe transportovala od mesta utovara do krajnje destinacije. Nudimo najpovoljnije transportno rešenje za prekomorski i rečni transport većih pošiljki kako generalnih, rasutih, tako i tečnih tereta do i iz svih pomorskih i rečnih luka prema najpovoljnijim tržišnim uslovima uz:"
                list={{
                    items: [
                        "Obezbeđenje adekvatnog tovarnog prostora na tržištu",
                        "Koordinaciju i sinhronizaciju rada svih učesnika u prevozu"
                    ]
                }}
                actionButton={{
                    text: "KONTAKTIRAJTE NAS",
                    link: "/contact"
                }}
            />

            <ServiceSection
                title="Avio transport"
                icon={avioIcon}
                image={avioImage}
                isImageLeft={true}
                description="Sve je veći broj zahteva naših klijenata za transportom robe avio saobraćajem, imajući u vidu njegovu ekonomičnost i brzinu. U zavisnosti od destinacije i same količine robe koju trasnportujete, nudimo vam kvalitetnu uslugu odabira najpovoljnijeg avio prevoznika, kao I najbrže rute za transport robe. Bez obzira na vašu lokaciju i izbor aerodroma do kog je potrebno transportovati vašu robu, naša kompanija vam stoji na usluzi 24h. Dostupni smo za vas svih sedam dana u nedelji i fleksibilni za sve vrste dogovora. Cilj nam je da ispunimo sve vaše zahteve i sa ponosom vas dodamo na listu naših zadovoljnih klijenata."
                actionButton={{
                    text: "KONTAKTIRAJTE NAS",
                    link: "/contact"
                }}
            />

            <ServiceSection
                title="Železnički transport"
                icon={trainIcon}
                image={zeleznickiImage}
                isImageLeft={false}
                description="Nekada, organizacija transporta robe podrazumeva uključenje i drugih vidova saobraćaja a sve u cilju brzog i efikasnog transporta robe. Nudimo vam pouzdanu, efikasnu i kvalitetnu uslugu transporta robe železnicom i pronalaženje adekvatne rute kako bise određena količina robe transportovala od mesta utovara do krajnje destinacije. Železnički transport robe spada u red najekonomičnijih vidova transporta. Ukoliko ste se odlučili da se vaša roba transportuje železnicom, naša kompanija vam stoji na raspolaganju za svu logističku podršku."
                actionButton={{
                    text: "KONTAKTIRAJTE NAS",
                    link: "/contact"
                }}
            />
            <Footer />
        </div>
    );
};

export default TransportPage;