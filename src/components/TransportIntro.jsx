const ServicesIntro = () => {
    return (
        <div className="w-full max-w-5xl mx-auto py-2 relative animate__animated animate__fadeIn">
            <div className="flex flex-col items-center">
                <div className="w-16 h-0.5 bg-primeGreen mb-4 animate__animated animate__fadeIn"></div>
                <h2 className="text-lg font-bold text-primeGreen mb-2 text-center font-roboto animate__animated animate__fadeInUp">
                    O NAŠIM TRANSPORT USLUGAMA
                </h2>
                <p className="px-4 text-sm text-darkGray leading-relaxed text-center max-w-2xl animate__animated animate__fadeInUp">
                    Usluga transporta i distribucije uključuje preuzimanje i dostavu pošiljki, 
                    pakovanje uz stručne savete, kao i carinsko posredovanje, 
                    omogućavajući siguran i efikasan transport &quot;od vrata do vrata&quot; uz minimalan angažman. 
                    Naša rešenja zadovoljavaju sve vaše potrebe za brz i pouzdan transport.
                </p>
                <div className="w-16 h-0.5 bg-primeGreen mt-4 animate__animated animate__bounceIn"></div>
            </div>
        </div>
    );
};

export default ServicesIntro;