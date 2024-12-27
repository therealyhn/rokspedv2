const Locations = () => {
  return (
    <div id="locations" className="w-full pb-10 md:pt-10 md:pb-10">
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto gap-8 px-4">

        {/* Location 1 */}
        <div className="flex flex-col space-y-4 text-center border-t-2 border-gray-300 pt-4">
          <h3 className="text-primeGreen font-bold text-xl font-roboto"><strong>Smederevo</strong></h3>
          <div className="space-y-4">
            <p className="text-gray-700"><strong className="font-roboto">Adresa:</strong><br />Kolarski Put 330, sprat 3<br />Smederevo 11300</p>
            <p className="text-gray-900 font-semibold"><strong className="font-roboto">Kontakt:</strong><br />Vasić Slađana<br />+381 64 32 040 11</p>
            <p className="text-gray-900 font-semibold">Dakić Vladimir<br />+381 64 65 953 69</p>
            <p className="text-gray-500 text-sm"><strong className="font-roboto">Email:</strong><br />office@roksped.rs<br />smederevo@roksped.rs</p>
          </div>
        </div>

        {/* Location 2 */}
        <div className="flex flex-col space-y-4 text-center border-t-2 border-gray-300 pt-4">
          <h3 className="text-primeGreen font-bold text-xl font-roboto"><strong>Slobodna Zona Smed.</strong></h3>
          <div className="space-y-4">
            <p className="text-gray-700"><strong className="font-roboto">Adresa:</strong><br />Đure Salaja 17<br />11300 Smederevo</p>
            <p className="text-gray-900 font-semibold"><strong className="font-roboto">Kontakt:</strong><br />Zdravković Goca<br />+381 64 22 495 72</p>
            <p className="text-gray-900 font-semibold">Dakić Biljana<br />+381 64 11 824 41</p>
            <p className="text-gray-900 font-semibold">Vujović Milica<br />+381 66 80 372 42</p>
            <p className="text-gray-500 text-sm"><strong className="font-roboto">Email:</strong><br />slobodnazona@roksped.rs</p>
          </div>
        </div>

        {/* Location 3 */}
        <div className="flex flex-col space-y-4 text-center border-t-2 border-gray-300 pt-4">
          <h3 className="text-primeGreen font-bold text-xl font-roboto"><strong>Mladenovac</strong></h3>
          <div className="space-y-4">
            <p className="text-gray-700"><strong className="font-roboto">Adresa:</strong><br />Senaja, Senajska 2<br />11235 Mali Požarevac</p>
            <p className="text-gray-900 font-semibold"><strong className="font-roboto">Kontakt:</strong><br />Đurić Mirjana<br />+381 64 82 549 82</p>
            <p className="text-gray-500 text-sm"><strong className="font-roboto">Email:</strong><br />mladenovac@roksped.rs</p>
          </div>
        </div>

        {/* Location 4 */}
        <div className="flex flex-col space-y-4 text-center border-t-2 border-gray-300 pt-4">
          <h3 className="text-primeGreen font-bold text-xl font-roboto"><strong>Smederevska Palanka</strong></h3>
          <div className="space-y-4">
            <p className="text-gray-700"><strong className="font-roboto">Adresa:</strong><br />Jozefa Šulca 22<br />(Carinski terminal)</p>
            <p className="text-gray-900 font-semibold"><strong className="font-roboto">Kontakt:</strong><br />Vuletić Jelica<br />+381 64 64 854 06</p>
            <p className="text-gray-500 text-sm"><strong className="font-roboto">Email:</strong><br />s.palanka@roksped.rs</p>
          </div>
        </div>

        {/* Location 5 */}
        <div className="flex flex-col space-y-4 text-center border-t-2 border-gray-300 pt-4">
          <h3 className="text-primeGreen font-bold text-xl font-roboto"><strong>Transport</strong></h3>
          <div className="space-y-4">
            <p className="text-gray-700"><strong className="font-roboto">Adresa:</strong><br />Kolarski Put 330, sprat 3<br />Smederevo 11300</p>
            <p className="text-gray-900 font-semibold"><strong className="font-roboto">Kontakt:</strong><br />Bojanić Bojan<br />+381 64 13 09 794</p>
            <p className="text-gray-500 text-sm"><strong className="font-roboto">Email:</strong><br />transport@roksped.rs</p>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-center">
        <a href="../clients"
          className="px-3 py-2 bg-primeGreen font-semibold rounded-sm shadow-lg mt-16 md:mt-10 mb-4 md:mb-0 hover:bg-primeYellow hover:scale-105 transition duration-500 text-md text-lightGray mx-auto font-roboto">
          NAŠI SARADNICI
        </a>
      </div>
    </div>
  );
};

export default Locations;