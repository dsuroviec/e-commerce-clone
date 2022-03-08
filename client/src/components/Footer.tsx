import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiChevronUp } from "react-icons/hi";
import GlobalErrorContext from "../contexts/GlobalErrorContext";

export const Footer = () => {
  const { setIsErrorOpen } = useContext(GlobalErrorContext)!;
  return (
    <>
      <footer
        id="mobile-footer"
        onClick={() => setIsErrorOpen(true)}
        className="bg-white sm:hidden "
      >
        <a
          href="#top"
          className="block w-full m-auto mb-3 text-center border-t "
          rel="noreferrer"
        >
          <HiChevronUp
            size={32}
            className="m-auto font-light text-chewyBlue "
          />
          <span className="text-sm font-semibold text-chewyGray-darker">
            TOP OF PAGE
          </span>
        </a>
        <section
          className="flex items-center justify-center px-3 py-4 mb-3"
          style={{
            backgroundImage: 'url("/images/mobile-background.jpg")',
          }}
        >
          <img src="/images/icon-apple.png" className="w-11" alt="" />

          <div className="mx-4">
            <p className="mb-2 text-lg font-bold text-white">
              Get the Chewy app
            </p>
            <img src="/images/5-stars.png" className="w-2/3" alt="" />
          </div>
          <div className="grid w-40 gap-y-1 sfw-mobile-footer-apps__button">
            <a
              href="https://itunes.apple.com/us/app/chewy-where-pet-lovers-shop/id1149449468"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/app-store.png"
                alt="Download on the App Store"
                loading="lazy"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.chewy.android&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/google-play.png"
                alt="Get it on Google Play"
                loading="lazy"
              />
            </a>
          </div>
        </section>
        <div className="mb-3 text-center">
          <span className="block font-medium text-chewyGray-darker">
            We're here 24/7
          </span>
          <Link to="" className="font-bold text-chewyBlue-dark">
            1-800-672-4399
          </Link>
          &nbsp;
          <span className="font-medium text-chewyGray-darker">or</span>
          &nbsp;
          <Link to="" className="font-bold text-chewyBlue-dark">
            Message Us
          </Link>
        </div>
        <div className="flex items-center justify-center pt-3 mb-3 border-t-8 border-chewyGray-light ">
          {[
            { image: "pharmacy.jpg", w: "w-24" },
            { image: "legitscript.png", w: "w-16" },
            {
              image: "compounding-pharmacy.png",
              w: "w-16",
            },
          ].map((item, index) => (
            <img
              key={index}
              src={`/images/${item.image}`}
              alt=""
              className={`${item.w} mr-4`}
            />
          ))}
        </div>
        <div className="pt-4 text-sm text-center border-t text-chewyGray-darker">
          <p>Copyright © 2021 Crunchy, Inc.</p>
          <nav className="">
            <ul className="flex justify-center ">
              <li>
                <a className="underline " href="javascript:void(0)">
                  Terms
                </a>
              </li>
              &nbsp;
              <li className=" dash">
                <a className="underline " href="javascript:void(0)">
                  Privacy
                </a>
              </li>
              &nbsp;
              <li className=" dash">
                <a className="underline " href="javascript:void(0)">
                  Accessibility
                </a>
              </li>
            </ul>

            <ul className="flex justify-center">
              <li>
                <a className="underline " href="javascript:void(0)">
                  About
                </a>
              </li>
              &nbsp;
              <li className="dash">
                <a className="underline " href="javascript:void(0)">
                  Jobs
                </a>
              </li>
              &nbsp;
              <li className="dash">
                <a className="underline " href="javascript:void(0)">
                  Blog
                </a>
              </li>
              &nbsp;
              <li className="dash">
                <a className="underline " href="javascript:void(0)">
                  Gift Guide
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      <br />
      <br />
      <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};
