import PropTypes from 'prop-types';
import 'animate.css';

const PageHeader = ({ 
  backgroundImage, 
  title, 
  subtitle,
  className = ""
}) => {
  return (
    <div className={`w-full relative pt-12 ${className}`}>
      <div
        className="w-full h-[150px] md:h-[300px] relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col items-left w-full md:w-11/12 mx-10 mt-[5%] md:mt-[3%] md:mx-[15%]">
          <h1 className="w-1/2 font-bold font-roboto text-3xl md:text-[64px] mt-4 md:mt-8 md:mb-3 text-primeYellow uppercase hover-custom-filter animate__animated animate__fadeInDown">
            {title}
          </h1>
          <div className="w-1/2 md:w-1/4 h-1 bg-primeGreen mb-1" />
          <h3 className="text-lg md:text-3xl mb-3 font-semibold text-lightGray md:mt-0 animate__animated animate__fadeInUp">
            {subtitle}
          </h3>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default PageHeader;