import heroImg from '../../assets/hero-image.jpg';
import logo from '../../assets/Logo.svg';

const HeaderBanner = () => {
    return(
        <div className='w-full relative'>
            <img src={ heroImg } className='w-full'/>
            <div className='w-full absolute top-[120px] flex justify-center'>
                <img src={ logo } className='text-center w-[174px] h-6'/>
            </div>
        </div>
    );
};

export default HeaderBanner;