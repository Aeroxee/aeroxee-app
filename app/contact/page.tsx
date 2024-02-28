import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[45%]">
        <h1 className="text-2xl text-white font-extrabold text-center">
          Kontak Saya
        </h1>
        <div className="p-3 border-b border-b-gray-300 flex flex-col">
          <span className="text-sm font-extralight text-gray-300">
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </span>
          <span className="text-sm font-extrabold text-white">
            fathfajhri40@gmail.com
          </span>
        </div>
        <div className="p-3 border-b border-b-gray-300 flex flex-col">
          <span className="text-sm font-extralight text-gray-300">
            <FontAwesomeIcon icon={faMobile} />
            Handphone
          </span>
          <span className="text-sm font-extrabold text-white">
            083199226765
          </span>
        </div>
      </div>
    </div>
  );
}
