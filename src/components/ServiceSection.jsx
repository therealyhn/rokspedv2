import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'animate.css';

const ServiceSection = ({
  title,
  icon,
  image,
  description,
  list,
  isImageLeft,
  actionButton
}) => {
  const ContentSection = () => (
    <div className="flex flex-col items-start max-w-lg px-6 md:px-8 py-6 bg-lightGray animate__animated animate__fadeIn">
      <div className={`flex items-center gap-3 md:gap-4 mb-6 w-full border-t-2 border-primeGreen pt-4`}>
        {isImageLeft ? (
          <>
            <img src={icon} alt={`${title} icon`} className="w-10 md:w-14 transition-transform hover:scale-110 duration-300" />
            <h1 className="text-lg md:text-2xl font-bold text-primeGreen uppercase font-roboto tracking-wide">{title}</h1>
          </>
        ) : (
          <>
            <h1 className="text-lg md:text-2xl font-bold text-primeGreen uppercase font-roboto tracking-wide">{title}</h1>
            <img src={icon} alt={`${title} icon`} className="w-10 md:w-14 ml-auto transition-transform hover:scale-110 duration-300" />
          </>
        )}
      </div>

      <p className="text-sm md:text-base text-darkGray leading-relaxed mb-4">{description}</p>
      
      {list && (
        <div className="w-full space-y-2">
          <p className="text-sm md:text-base text-darkGray font-bold">{list.title}</p>
          <ul className="space-y-1.5">
            {list.items.map((item, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-darkGray">
                <span className="text-primeGreen text-lg leading-none mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {actionButton && (
        <Link 
          to={actionButton.link}
          onClick={() => window.scrollTo(0, 0)} // Scroll to top on button click
          className="inline-block px-4 py-2 bg-primeGreen text-lightGray font-medium rounded-md 
            shadow-md mt-4 hover:bg-primeYellow transform hover:scale-105 transition-all duration-300 
            font-roboto text-center text-xs md:text-sm"
        >
          {actionButton.text}
        </Link>
      )}
    </div>
  );

  const ImageSection = () => (
    <div className="relative hidden md:block h-full overflow-hidden group animate__animated animate__fadeIn">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70"></div>
    </div>
  );

  return (
    <section className="max-w-5xl mx-auto my-6 md:my-8 shadow-lg rounded-lg overflow-hidden bg-lightGray">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {isImageLeft ? (
          <>
            <ImageSection />
            <ContentSection />
          </>
        ) : (
          <>
            <ContentSection />
            <ImageSection />
          </>
        )}
      </div>
    </section>
  );
};

ServiceSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string)
  }),
  isImageLeft: PropTypes.bool,
  actionButton: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string
  })
};

export default ServiceSection;