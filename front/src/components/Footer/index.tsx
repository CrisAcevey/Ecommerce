import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-auto w-full">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <Link href="https://www.facebook.com/cristian.v.shinigami/?locale=sw_KE" target="_blank">
            <span className="hover:text-blue-500">Facebook</span>
          </Link>
          <Link href="https://www.instagram.com/cris_acevey/" target="_blank">
            <span className="hover:text-pink-500">Instagram</span>
          </Link>
          <Link href="https://www.linkedin.com/in/cristian-acevey-0032b4313/" target="_blank">
            <span className="hover:text-blue-700">LinkedIn</span>
          </Link>
          <Link href="https://github.com/CrisAcevey" target="_blank">
            <span className="hover:text-gray-400">GitHub</span>
          </Link>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} Ecomerce Cristian Acevey</p>
      </div>
    </footer>
  );
};

export default Footer;