import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl">
        <hr className="my-2 mx-auto border-gray-200" />
        <span className="flex justify-center gap-2 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{' '}
          <a href="https://flowbite.com" className="hover:underline">
            AdsBridge
          </a>
        </span>
        <div className="py-4 flex justify-center space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://www.facebook.com/profile.php?id=100090247710645'}
            className="text-gray-500 hover:text-gray-900"
          >
            <AiFillFacebook />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://instagram.com/adsbridge_pl?igshid=YmMyMTA2M2Y='}
            className="text-gray-500 hover:text-gray-900"
          >
            <AiFillInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://www.linkedin.com/company/ads-bridge/'}
            className="text-gray-500 hover:text-gray-900"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
