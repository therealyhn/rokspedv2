import Navbar from "../components/Navbar"
import { useState, useEffect } from 'react'
import Loader from "../components/Loader"
import PageHeader from "../components/PageHeader"
import ClientsSection from "../components/ClientsSection"
import Footer from "../components/Footer"
import headerImage from "../assets/service-test.png"
import { Helmet } from 'react-helmet';

function Appointment() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleImageLoad = () => {
            setLoading(false);
        };

        const images = document.querySelectorAll('img');
        let loadedImagesCount = 0;

        images.forEach((img) => {
            if (img.complete) {
                loadedImagesCount++;
            } else {
                img.addEventListener('load', () => {
                    loadedImagesCount++;
                    if (loadedImagesCount === images.length) {
                        handleImageLoad();
                    }
                });
            }
        });

        if (loadedImagesCount === images.length) {
            handleImageLoad();
        }

        return () => {
            images.forEach((img) => {
                img.removeEventListener('load', handleImageLoad);
            });
        };
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Saradnici - ROK ŠPED PLUS SMEDEREVO</title>
            </Helmet>
            <Navbar />
            <PageHeader
                backgroundImage={headerImage}
                title="Saradnici"
                subtitle="ROK ŠPED PLUS SMEDEREVO"
            />
            <ClientsSection />
            <Footer />
        </div>
    )
}

export default Appointment