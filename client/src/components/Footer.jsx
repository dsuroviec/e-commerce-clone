import { Link } from "react-router-dom";
import _ from "lodash";
import { HiChevronUp } from "react-icons/hi";

export const Footer = () => {
    return (
        <>
            <footer className="bg-white ">
                <a
                    href="#"
                    className="block w-full m-auto text-center border-t-2 "
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
                    className="flex items-center px-3 py-4"
                    style={{
                        backgroundImage: 'url("mobile-background.jpg")',
                    }}
                >
                    <img src="icon-apple.png" className="w-11" alt="" />

                    <div className="mx-4">
                        <p className="mb-2 text-lg font-bold text-white">
                            Get the Chewy app
                        </p>
                        <img src="5-stars.png" className="w-2/3" alt="" />
                    </div>
                    <div className="grid w-40 gap-y-1 sfw-mobile-footer-apps__button">
                        <a
                            href="https://itunes.apple.com/us/app/chewy-where-pet-lovers-shop/id1149449468"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="app-store.png"
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
                                src="google-play.png"
                                alt="Get it on Google Play"
                                loading="lazy"
                            />
                        </a>
                    </div>
                </section>
                <div className="text-center">
                    <span className="block font-medium text-chewyGray-darker">
                        We're here 24/7
                    </span>
                    <Link to="" className="font-bold text-chewyBlue-dark">
                        1-800-672-4399
                    </Link>
                    &nbsp;
                    <span className="font-medium text-chewyGray-darker">
                        or
                    </span>
                    &nbsp;
                    <Link to="" className="font-bold text-chewyBlue-dark">
                        Message Us
                    </Link>
                </div>
                <div className="flex items-center justify-center border-t-8 border-chewyGray-light ">
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
                            src={item.image}
                            alt=""
                            className={`${item.w} mr-4`}
                        />
                    ))}
                </div>
                <div className="text-sm text-center border-t-2 text-chewyGray-darker">
                    <p>Copyright © 2021 Chewy, Inc.</p>

                    <nav className="">
                        <ul className="flex justify-center ">
                            <li>
                                <a
                                    className="underline "
                                    href="/app/content/terms"
                                >
                                    Terms
                                </a>
                            </li>
                            &nbsp;
                            <li className=" dash">
                                <a
                                    className="underline "
                                    href="/app/content/privacy"
                                >
                                    Privacy
                                </a>
                            </li>
                            &nbsp;
                            <li className=" dash">
                                <a
                                    className="underline "
                                    href="/app/content/accessibility-information"
                                >
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                        <ul className="flex justify-center">
                            <li>
                                <a
                                    className="underline "
                                    href="/app/content/ca-supply-chain-disclosure"
                                >
                                    California Supply Chains Act
                                </a>
                            </li>
                        </ul>
                        <ul className="flex justify-center">
                            <li>
                                <a
                                    className="underline "
                                    href="/app/content/about-us"
                                >
                                    About
                                </a>
                            </li>
                            &nbsp;
                            <li className="dash">
                                <a
                                    className="underline "
                                    href="//investor.chewy.com"
                                >
                                    Investor Relations
                                </a>
                            </li>
                            &nbsp;
                            <li className="dash">
                                <a className="underline " href="/jobs">
                                    Jobs
                                </a>
                            </li>
                            &nbsp;
                            <li className="dash">
                                <a className="underline " href="//be.chewy.com">
                                    Blog
                                </a>
                            </li>
                            &nbsp;
                            <li className="dash">
                                <a className="underline " href="/gift-guide">
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
};
