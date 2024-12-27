import contactMailImg from '../assets/contact-mail.png';
import sendMsgImg from '../assets/send-msg.png';

function ContactForm() {

    return (
        <div className="w-full">
            <div className="flex justify-center items-center gap-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-darkGray text-center uppercase font-roboto">
                    Kontaktirajte Nas
                </h2>
                <img src={contactMailImg} alt="contact icon" className="w-8 md:w-10" />
            </div>

            <form method="POST" action="https://api.web3forms.com/submit" className="space-y-4 p-6 bg-lightGray rounded-sm mx-auto w-full md:w-11/12">
                <input type="hidden" name="access_key" value="a5e9b0d1-c7dc-4411-aa72-8730e86969e9" />
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            name="name"
                            placeholder="Ime"
                            required
                            className="w-full p-4 rounded-sm focus:ring-2 focus:ring-primeGreen shadow-md"
                        />
                    </div>
                    <div className="flex-1">
                        <input
                            type="text"
                            name="surname"
                            placeholder="Prezime"
                            required
                            className="w-full p-4 rounded-sm focus:ring-2 focus:ring-primeGreen shadow-md"
                        />
                    </div>
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full p-4 rounded-sm focus:ring-2 focus:ring-primeGreen shadow-md"
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Vaša Poruka"
                        required
                        rows="6"
                        className="w-full p-4 rounded-sm focus:ring-2 focus:ring-primeGreen shadow-md"
                    ></textarea>
                </div>
                <button type="submit" className="flex items-center justify-center gap-4 
                        mt-2 w-full md:w-1/2 bg-primeGreen text-white py-3 rounded-sm text-md font-semibold hover:bg-primeYellow 
                        transition duration-300 font-roboto">
                    POŠALJITE PORUKU
                    <img src={sendMsgImg} alt="send msg icon" className="w-6 mt-1" />
                </button>
            </form>
        </div>
    );
}

export default ContactForm;