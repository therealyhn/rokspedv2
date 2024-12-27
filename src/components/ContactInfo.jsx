import info from '../assets/info.png';

const ContactInfo = () => {
    return (
        <div className="w-2/3 flex flex-col mx-auto">
            <div className="flex justify-center items-center gap-1 md:gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-darkGray uppercase font-roboto">
                    Podaci za Identifikaciju
                </h2>
                <img src={info} alt="info icon" className="w-8 md:w-9" />
            </div>

            <div className="space-y-2 border-2-b border-gray-300 md:border-0">
                <div className="flex flex-col justify-between items-start">
                    <h3 className="font-bold text-darkGray font-roboto">Naziv firme:</h3>
                    <p className="text-gray-700">ROK ŠPED PLUS D.O.O. SMEDEREVO</p>
                </div>

                <div className="flex flex-col justify-between items-start">
                    <h3 className="font-bold text-darkGray font-roboto">Šifra Delatnosti:</h3>
                    <p className="text-gray-700">5229</p>
                </div>

                <div className="flex flex-col justify-between items-start">
                    <h3 className="font-bold text-darkGray font-roboto">PIB:</h3>
                    <p className="text-gray-700">111326846</p>
                </div>

                <div className="flex flex-col justify-between items-start">
                    <h3 className="font-bold text-darkGray font-roboto">Matični broj:</h3>
                    <p className="text-gray-700">21462888</p>
                </div>

                <div className="flex flex-col justify-between items-start">
                    <h3 className="font-bold text-darkGray font-roboto">Sedište:</h3>
                    <p className="text-gray-700">Kolarski Put 330, Sprat 3, Smederevo 11300, Srbija</p>
                </div>

                <div className="flex flex-col justify-between items-start">
                    <h3 className="font-bold text-darkGray font-roboto">Pravna forma:</h3>
                    <p className="text-gray-700">Društvo sa ograničenom odgovornošću (D.O.O.)</p>
                </div>

                <div className="flex flex-col justify-between items-start">
                    <h3 className="font-bold text-darkGray font-roboto">Banka:</h3>
                    <p className="text-gray-700">Raiffeisen Bank</p>
                </div>

                <div className="flex flex-col justify-between items-start">
                    <h3 className="font-bold text-darkGray font-roboto">Broj računa:</h3>
                    <p className="text-gray-700">265-6410310004731-46</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
