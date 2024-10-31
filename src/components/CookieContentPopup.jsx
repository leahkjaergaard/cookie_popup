import { FaCookieBite } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import Button from "./Button";

const CookieContentPopup = () => {
  return (
    <div className=" dark:bg-white bg-black absolut bottom-0 left-0 gap-5 m-12 rounded-lg p-5 w-80 ">
      <div className="icons -inset-4 flex justify-between mb-16 text-black">
        <FaCookieBite size={35} className="cookie-icon " />
        <IoMdClose size={25} className="close-icon cursor-pointer " />
      </div>
      <div className="grid gap-3">
        <p className="text-lg m-4 text-black">We use cookies to improve your user experience.</p>
        <Button text="I like cookies" />
      </div>
    </div>
  );
};

export default CookieContentPopup;
