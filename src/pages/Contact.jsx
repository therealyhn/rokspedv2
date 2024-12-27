import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import headerImg from '../assets/service-test.png';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Locations from '../components/Locations';
import Map from '../components/Map';

function Contact() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleImageLoad = () => {
            const images = document.querySelectorAll('img');
            let loadedImagesCount = 0;

            images.forEach((img) => {
                if (img.complete) {
                    loadedImagesCount++;
                } else {
                    img.addEventListener('load', () => {
                        loadedImagesCount++;
                        if (loadedImagesCount === images.length) {
                            setLoading(false);
                        }
                    });
                }
            });

            if (loadedImagesCount === images.length) {
                setLoading(false);
            }
        };

        handleImageLoad();

        return () => {
            const images = document.querySelectorAll('img');
            images.forEach((img) => {
                img.removeEventListener('load', handleImageLoad);
            });
        };
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <div className="w-full bg-lightGray">
            <Navbar />
            <PageHeader
                backgroundImage={headerImg}
                title="Kontakt i Lokacije"
                subtitle="ROK ŠPED PLUS SMEDEREVO"
            />
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 py-10 justify-center">
                <ContactForm />
                <ContactInfo />
            </div>
            <Locations />
            <Map />
            <Footer />
        </div>
    );
}

export default Contact;