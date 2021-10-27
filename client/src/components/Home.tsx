import { useEffect, useState } from "react";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import _ from "lodash";
import clsx from "clsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button } from "./Button";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
    HiMail,
    HiChatAlt2,
    HiShoppingCart,
    HiSun,
    HiMoon,
    HiMenu,
    HiSearch,
    HiUser,
    HiChevronLeft,
    HiChevronRight,
    HiChevronUp,
    HiSwitchHorizontal,
} from "react-icons/hi";

export const Home = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [enableExitClass, setEnableExitClass] = useState(true);
    const [isCarouselIntervalDisabled, setIsCauroselIntervalDisabled] =
        useState(false);
    const [carouselDirection, setCarouselDirection] = useState("carousel-left");
    const [switchCarousel, setSwitchCarousel] = useState(false);
    const [products, setProducts] = useState();

    // useEffect(() => {
    //     if (isCarouselIntervalDisabled) return;

    //     if (carouselIndex === 5) {
    //         const carouselInterval = setInterval(() => {
    //             setCarouselIndex(0);
    //         }, 2000);
    //         return () => clearInterval(carouselInterval);
    //     } else {
    //         const carouselInterval = setInterval(() => {
    //             setCarouselIndex(carouselIndex + 1);
    //         }, 2000);

    //         return () => clearInterval(carouselInterval);
    //     }
    // }, [carouselIndex, isCarouselIntervalDisabled]);

    // Returns All products

    useEffect(() => {
        (async () => {
            const products = await fetch("/api/products").then((response) =>
                response.json()
            );
            setProducts(products);
        })();
    }, []);

    return (
        <>
            <Header />
            <section
                className="w-full overflow-hidden bg-chewyGray-lighter "
                id="home-content"
            >
                <div className="relative p-0 h-44">
                    <button
                        onClick={() => {
                            setCarouselDirection("carousel-left");
                            setIsCauroselIntervalDisabled(true);
                            if (carouselIndex > 0) {
                                setCarouselIndex(carouselIndex - 1);
                            } else {
                                setCarouselIndex(5);
                            }
                        }}
                        className="absolute z-10 h-full text-white text-opacity-60"
                    >
                        <HiChevronLeft size={40} />
                    </button>
                    <button
                        onClick={() => {
                            setIsCauroselIntervalDisabled(true);
                            if (carouselIndex < 5) {
                                setCarouselIndex(carouselIndex + 1);
                                setCarouselDirection("carousel-right");
                            } else {
                                setCarouselIndex(0);
                            }
                        }}
                        className="absolute right-0 z-10 h-full text-white text-opacity-60 "
                    >
                        <HiChevronRight size={40} />
                    </button>
                    <TransitionGroup componenent={null}>
                        <CSSTransition
                            timeout={{ enter: 1000, exit: 1000 }}
                            classNames={carouselDirection}
                            key={carouselIndex}
                        >
                            <img
                                className="absolute w-full h-full"
                                src={
                                    [
                                        "autoshipping.jpg",
                                        "buy-a-bag.jpg",
                                        "disney-collection.jpg",
                                        "e-gift-card.jpg",
                                        "gift-card.jpg",
                                        "halloween.jpg",
                                    ][carouselIndex]
                                }
                                alt="hero"
                            ></img>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <div className="flex justify-center p-1">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                        <button
                            key={index}
                            className={clsx(
                                "w-2.5 h-2.5 m-0.5 border rounded-full border-chewyBlue",
                                {
                                    "bg-chewyBlue": index === carouselIndex,
                                }
                            )}
                            onClick={() => {
                                setIsCauroselIntervalDisabled(true);
                                setCarouselIndex(index);
                            }}
                        ></button>
                    ))}
                </div>
                <div className="p-3">
                    <h1 className="text-xl font-semibold">Shop by Category</h1>
                    <div className="flex min-w-max">
                        {[
                            "Dog",
                            "Cat",
                            "Small Pet",
                            "Bird",
                            "Fish",
                            "Reptile",
                            "Horse",
                            "Farm Animal",
                            "Pet Parents",
                            "Pharmacy",
                            "Today's Deals",
                            "Brands",
                        ]
                            .slice(0, 3)
                            .map((category, index) => (
                                <div
                                    key={index}
                                    className="w-40 h-auto p-4 mr-1.5 text-center bg-white border rounded-md hover:border-opacity-1 "
                                >
                                    <img
                                        className="block"
                                        src={
                                            [
                                                "dog-tile.jpg",
                                                "cat-tile.webp",
                                                "small-pet-tile.webp",
                                                "bird-tile.webp",
                                                "fish-tile.webp",
                                                "reptile-tile.webp",
                                                "horse-tile.webp",
                                                "farm-animal-tile.webp",
                                                "pet-parents-tile.jpg",
                                                "rx-tile.webp",
                                                "todays-deals-tile.webp",
                                                "shop-by-brand-tile.webp",
                                            ][index]
                                        }
                                        alt={category}
                                    />
                                    <Link
                                        to="/"
                                        className="block pt-3 text-md text-chewyBlue-dark"
                                    >
                                        {category}
                                    </Link>
                                </div>
                            ))}
                    </div>
                    <h1 className="text-xl font-semibold">
                        Customer Favorites
                    </h1>
                    <div className="flex min-w-max">
                        {[
                            "Dog Food",
                            "Dog Toys",
                            "Dog Treats",
                            "Cat Litter",
                            "Cat Food",
                            "Cat Trees, Condos & Scratchers",
                            "Dog Beds",
                            "Dog Flea & Ticks",
                            "Cat Toys",
                            "Dog Supplements",
                            "Football Shop",
                            "Chewy Pharmacy",
                        ]
                            .slice(0, 3)
                            .map((category, index) => (
                                <div
                                    key={index}
                                    className="w-40 h-auto p-4 bg-white mr-1.5 text-center border rounded-md hover:border-opacity-1 "
                                >
                                    <img
                                        className="block"
                                        src={
                                            [
                                                "dog-food-tile.webp",
                                                "dog-toys-tile.webp",
                                                "dog-treats-tile.webp",
                                                "cat-litter-tile.webp",
                                                "cat-food-tile.webp",
                                                "cat-trees-tile.webp",
                                                "dog-beds-tile.webp",
                                                "dog-flea-tick-tile.webp",
                                                "cat-toys-tile.webp",
                                                "dog-supplements-tile.webp",
                                                "football-shop-tile.webp",
                                                "chewy-pharmacy-tile.webp",
                                            ][index]
                                        }
                                        alt={category}
                                    />
                                    <Link
                                        to="/"
                                        className="block pt-3 text-md text-chewyBlue-dark"
                                    >
                                        {category}
                                    </Link>
                                </div>
                            ))}
                    </div>
                    <div className="p-1">
                        <h1 className="text-xl font-semibold">
                            New Puppy or Kitten?
                        </h1>
                        <Link to="/">
                            <img src="new-puppy.jpg" alt="new puppy"></img>
                            <span className="text-sm hover:underline text-chewyBlue-dark">
                                Puppy Shop
                            </span>
                        </Link>
                        <Link to="/">
                            <img src="new-kitten.jpg" alt="new kitten"></img>
                            <span className="text-sm hover:underline text-chewyBlue-dark">
                                Kitten Shop
                            </span>
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">
                            2,000+ Brands in Stock!
                        </h1>
                        <Link
                            to="/"
                            className="flex items-center text-chewyBlue-dark"
                        >
                            <span className="mt-0.5 text-sm hover:underline ">
                                Shop All
                            </span>
                            <HiChevronRight size={24} />
                        </Link>
                        <div className="flex flex-wrap w-full ">
                            {[
                                "hills-logo.png",
                                "royal-canin-logo.jpeg",
                                "disney-collection-logo.jpeg",
                                "purina-logo.jpg",
                                "blue-logo.png",
                                "kong-logo.jpg",
                            ].map((logo) => (
                                <picture className="flex justify-center w-1/3 text-center bg-white border">
                                    <img
                                        className="p-2 w-28 h-28"
                                        src={logo}
                                        alt={logo}
                                    />
                                </picture>
                            ))}
                        </div>
                    </div>
                    <div className="p-3 bg-chewyBlue-light">
                        <h1 className="text-xl font-semibold">
                            Join the Chewy Pack
                        </h1>
                        <p className="text-sm">
                            Sign up to get emails about the latest deals,
                            product drops, pet health tips and more!
                        </p>
                        <Input placeholder="Email"></Input>
                        <Button className="bg-chewyBlue-darker">Sign Up</Button>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Spooky Chewy Exclusives 🦇
                        </h2>
                        <div className="flex">
                            {[0, 1, 2, 3, 4].map((article) => (
                                <Link to="">
                                    <article className="p-3.5 mr-1.5 border rounded-md w-36 bg-white ">
                                        <div>
                                            <img
                                                className="w-20 h-20 m-auto"
                                                src="goody-bag.jpg"
                                                alt="goody bag"
                                            ></img>
                                            <span className="text-sm font-medium">
                                                Goody Box
                                            </span>
                                            <p className="text-xs">
                                                Halloween Toys, Treats, and
                                                Bandanas
                                            </p>
                                            <div className="p-1 my-2 text-xs text-white rounded bg-chewyGreen">
                                                Save 40% at Checkout
                                            </div>
                                            <span className="font-semibold text-chewyRed ">
                                                $24.99
                                            </span>
                                            <div className="flex items-center">
                                                <>Stars</>&nbsp;
                                                <span className="text-xs text-chewyGray">
                                                    88
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold">Pet Health</h1>
                        <img src="pet-wellness.jpg" alt="pet wellness"></img>
                        &nbsp;
                        <Link className="text-sm text-chewyBlue-darker" to="">
                            Pet Wellness
                        </Link>
                        <img
                            src="connect-with-vet.jpg"
                            alt="Connect With a Vet"
                        />
                        &nbsp;
                        <Link className="text-sm text-chewyBlue-darker" to="">
                            Connect with a Vet
                        </Link>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">
                            Autoship & Save on Favorites
                        </h1>
                        <Link
                            to="/"
                            className="flex items-center text-chewyBlue-darker"
                        >
                            <span className="mt-0.5 text-sm hover:underline ">
                                Shop All
                            </span>
                            <HiChevronRight size={24} />
                        </Link>
                        <div className="flex">
                            {[0, 1, 2, 3, 4].map((article) => (
                                <Link to="">
                                    <article className="p-3.5 mr-1.5 border rounded-md bg-white w-36 ">
                                        <div>
                                            <img
                                                className="w-16 h-24 m-auto"
                                                src="taste-wild-dog-food.jpg"
                                                alt="Dog Food"
                                            ></img>
                                            <span className="text-sm font-medium">
                                                Taste Of the Wild
                                            </span>
                                            <p className="text-xs">
                                                High Prarie Grain-Free Dry Dog
                                                Food
                                            </p>
                                            <div className="p-1 my-2 text-xs text-white rounded bg-chewyGreen">
                                                Save 40% at Checkout
                                            </div>
                                            <span className="font-semibold text-chewyRed ">
                                                $24.99
                                            </span>
                                            <div className="flex items-center">
                                                <>Stars</>&nbsp;
                                                <span className="text-xs text-chewyGray">
                                                    88
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Explore More</h1>
                        <div className="flex">
                            {[
                                "Holiday Shop",
                                "Our Current Favorites",
                                2,
                                3,
                                4,
                            ].map((article) => (
                                <Link to="">
                                    <article className="p-3.5 mr-1.5 border rounded-md bg-white w-36 h-full text-center">
                                        <img
                                            src="holiday-shop.webp"
                                            className="mb-3"
                                            alt="Holiday Shop"
                                        ></img>
                                        <Link
                                            to=""
                                            className="text-chewyBlue-dark"
                                        >
                                            {article}
                                        </Link>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <img
                        src="adopt-a-dog-month-small.webp"
                        className="object-none h-32"
                        alt="adopt a dog"
                    />
                </div>
            </section>
            <Footer />
        </>
    );
};
