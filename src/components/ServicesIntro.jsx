const ServicesIntro = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-4 relative animate__animated animate__fadeIn">
      <div className="flex flex-col items-center">
        <div className="w-12 h-0.5 bg-primeGreen mb-4 animate__animated animate__fadeIn"></div>
        <h2 className="text-lg font-bold text-primeGreen text-center animate__animated animate__fadeInUp">
          O NAŠIM USLUGAMA
        </h2>
        <p className="px-4 text-sm text-darkGray leading-relaxed text-center max-w-2xl animate__animated animate__fadeInUp">
          Naša delatnost obuhvata međunarodnu špediciju, carinsko posredovanje, transport i skladištenje.
        </p>
        <div className="w-12 h-0.5 bg-primeGreen mt-4 animate__animated animate__bounceIn"></div>
      </div>
    </div>
  );
};

export default ServicesIntro;