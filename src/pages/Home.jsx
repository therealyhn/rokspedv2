import Navbar from "../components/Navbar"
import { useState, useEffect } from 'react'
import Loader from "../components/Loader"
import HomeHeader from "../components/HomeHeader"
import Footer from "../components/Footer"

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const images = document.querySelectorAll('img');
        let loadedImagesCount = 0;

        const handleImageLoad = () => {
            loadedImagesCount++;
            if (loadedImagesCount === images.length) {
                setLoading(false);
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener('load', handleImageLoad);
            }
        });

        if (loadedImagesCount === images.length) {
            setLoading(false);
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
            <Navbar />
            <HomeHeader />
            <Footer />
        </div>
    )
}

export default Home