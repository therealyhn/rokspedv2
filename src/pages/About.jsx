import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect } from 'react'
import Loader from "../components/Loader"
import PageHeader from "../components/PageHeader"
import AboutContent from "../components/AboutContent"
import truck1 from "../assets/truck1.jpg"
import { Helmet } from 'react-helmet';

function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const images = [truck1];
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
        <div className="w-full">
            <Helmet>
                <title>O nama - ROK ŠPED PLUS SMEDEREVO</title>
            </Helmet>
            <Navbar />
            <PageHeader
                backgroundImage={truck1}
                title="O nama"
                subtitle="ROK ŠPED PLUS SMEDEREVO"
            />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About