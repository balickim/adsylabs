import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <hr className="my-2 mx-auto border-gray-200 dark:border-gray-700" />
        <span className="flex justify-center gap-2 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <a href="https://flowbite.com" className="hover:underline">
            AdsBridge
          </a>
        </span>
        <div className="py-4 flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <AiFillFacebook />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
