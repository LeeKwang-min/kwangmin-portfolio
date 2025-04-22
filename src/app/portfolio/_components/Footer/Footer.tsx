import { FaEnvelope, FaUser } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="flex items-center">
            <FaUser className="mr-2" />
            <p>LEE KWANGMIN</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <p>dltkdtn56@naver.com</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-400 text-center">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
