import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import GlobalErrorContext from "../contexts/GlobalErrorContext";
import { Input } from "./Input";
import { Button } from "./Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import // HiSun,
// HiMoon,
"react-icons/hi";
import { Category, Brand } from "../types";

export const Home = () => {
    const [categories, setCategories] = useState<Category[] | null>(null);
    const [brands, setBrands] = useState<Brand[] | null>(null);
    const { setIsErrorOpen } = useContext(GlobalErrorContext)!;

    useEffect(() => {
        (async () => {
            const brands = await fetch("/api/brands").then((response) =>
                response.json()
            );
            setBrands(brands);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const categories = await fetch("/api/categories").then((response) =>
                response.json()
            );
            setCategories(categories);
        })();
    }, []);

    // https://react-slick.neostack.com/docs/api/ all props and methods
    const carouselProps = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        arrows: true,
        dotsClass: "slick-dots",
    };

    return (
        <>
            <div className="mb-8">
                <Slider {...carouselProps}>
                    {[
                        "autoshipping.jpg",
                        "buy-a-bag.jpg",
                        "disney-collection.jpg",
                        "e-gift-card.jpg",
                        "gift-card.jpg",
                        "halloween.jpg",
                    ].map((item, index) => (
                        <div key={index}>
                            <img
                                className=""
                                src={`/images/${item}`}
                                alt="hero"
                            ></img>
                        </div>
                    ))}
                </Slider>
            </div>

            <section className=" bg-chewyGray-lighter " id="home-content">
                <div className="w-full p-3">
                    <h1 className="w-full text-xl font-semibold">
                        Shop by Category
                    </h1>
                    <div
                        style={{ scrollSnapType: "x mandatory" }}
                        className="flex gap-3 overflow-auto"
                    >
                        {categories
                            ?.filter(
                                (category) =>
                                    category.id !== 10 && category.id !== 9
                            )
                            .map((category, index) => (
                                <Link
                                    className="p-4 mb-3 text-center border rounded text-chewyBlue-dark "
                                    style={{
                                        scrollSnapAlign: "center",
                                    }}
                                    key={index}
                                    to={`/category/${category?.id}`}
                                >
                                    <div className="rounded w-36 h-36 none">
                                        <img
                                            src={`/images/${category.tile}`}
                                            alt={category.tile}
                                        />
                                    </div>
                                    {category.name}
                                </Link>
                            ))}
                    </div>
                    <div className="p-1">
                        <h1 className="mb-3 text-xl font-semibold">
                            New Puppy or Kitten?
                        </h1>
                        <Link to="/category/9">
                            <img
                                src="/images/new-puppy.jpg"
                                alt="new puppy"
                            ></img>
                            <span className="text-sm hover:underline text-chewyBlue-dark">
                                Puppy Shop
                            </span>
                        </Link>
                        <Link to="/category/10">
                            <img
                                src="/images/new-kitten.jpg"
                                alt="new kitten"
                            ></img>
                            <span className="text-sm hover:underline text-chewyBlue-dark">
                                Kitten Shop
                            </span>
                        </Link>
                    </div>
                    <div>
                        <h1 className="mb-3 text-xl font-semibold">
                            Find Products by Your Favorite Brand!
                        </h1>

                        <div className="flex flex-wrap w-full ">
                            {brands?.slice(0 - 9)?.map((brand) => (
                                <Link key={brand.id} to={`/brand/${brand.id}`}>
                                    <picture className="flex justify-center text-center bg-white border">
                                        <img
                                            className="p-2 w-28 h-28"
                                            src={`/images/${brand.logo}`}
                                            alt={brand.name}
                                        />
                                    </picture>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="p-5 bg-chewyBlue-light">
                        <h1 className="text-xl font-semibold">
                            Join the Chewy Pack
                        </h1>
                        <p className="text-sm ">
                            Sign up to get emails about the latest deals,
                            product drops, pet health tips and more!
                        </p>
                        <Input placeholder="Email"></Input>
                        <Button
                            onClick={() => setIsErrorOpen(true)}
                            className="bg-chewyBlue-darker"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <img
                        onClick={() => setIsErrorOpen(true)}
                        src="/images/adopt-a-dog-month-small.webp"
                        className="object-none h-32"
                        alt="adopt a dog"
                    />
                </div>
            </section>
        </>
    );
};
