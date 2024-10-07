import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { InboxIcon, LinkedinIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-secondary  text-white ">
      <div className="mx-auto w-full max-w-screen-xl px-8 md:px-10 lg:p-[160px] py-10 md:py-20 lg:py-[60px] ">
        <div className="flex flex-col lg:flex-row md:justify-between items-start lg:items-center lg:space-x-24">
          <Link
            href={"/"}
            className="mb-6 md:mb-0 flex flex-col justify-between items-start gap-6"
          >
            <span className=" text-3xl font-semibold whitespace-nowrap text-white ">
              EXPLORE ETHIOPIA
            </span>
            <p className="w-96 text-[15px]">
              We specialize in providing unforgettable experience in Ethiopia
              from Breath talking landscapes to rich cultural heritage.
            </p>
          </Link>

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Contact us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <div className=" flex space-x-2">
                {" "}
                <PhoneIcon color="green" width={20} height={20} />{" "}
                <p className=" text-sm">
                  +251 ***** <br /> +251 *****
                </p>
              </div>
              <div className=" flex space-x-2">
                {" "}
                <InboxIcon
                  color=""
                  width={20}
                  height={20}
                  className=" text-yellow-600"
                />{" "}
                <p className=" text-sm">contact@exploreethiopia.com</p>
              </div>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Address
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <div className=" flex space-x-2">
                {" "}
                <MapPinIcon color="blue" width={20} height={20} />{" "}
                <p className=" text-sm">
                  Explore Ethiopia
                  <br /> Addis Ababa <br />
                  Ayat round
                </p>
              </div>
            </ul>
          </div>
        </div>

        <div className="sm:flex sm:items-center sm:justify-start  my-8 lg:my-16 space-x-40">
          <span className="text-sm sm:text-center text-white/30">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Explore Ethiopia™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 items-center gap-4">
            <Link href="#" className="">
              <LinkedinIcon className="text-primary" size={20} />
            </Link>
            <Link href="#">
              <InstagramLogoIcon className="text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
