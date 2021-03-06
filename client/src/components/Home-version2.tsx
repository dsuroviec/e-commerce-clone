import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./Input";
import { Button } from "./Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronRight } from "react-icons/hi";
import { Category, Brand } from "../types";
// function SampleNextArrow(props: any) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "red" }}
//             onClick={onClick}
//         />
//     );
// }
// function SamplePrevArrow(props: any) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }
export const Home = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [brands, setBrands] = useState<Brand[] | null>(null);

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
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots",
    // appendDots: (dots: any) => <ul>{dots}</ul>,
  };

  return (
    <>
      <div className="">
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
              <img className="" src={`/images/${item}`} alt="hero"></img>
            </div>
          ))}
        </Slider>
      </div>
      <section
        className="w-full overflow-hidden bg-crunchyGray-lighter "
        id="home-content"
      >
        {/* <div className="relative p-0 h-44">
                            className={clsx(
                                "w-2.5 h-2.5 m-0.5 border rounded-full border-crunchyBlue",
                                {
                                    "bg-crunchyBlue": index === carouselIndex,
                                }
                            )}
                </div> */}
        <div className="p-3">
          <h1 className="text-xl font-semibold">Shop by Category</h1>

          {/* {(() => {
                        const data = fetch("api/products/3").then((response) =>
                            response.json()
                        );
                        Promise.resolve(data).then((stuff) => {
                            return <div>{stuff[0].name}</div>;
                        });
                    })()} */}
          <div className="flex gap-2 min-w-max">
            {categories?.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category?.id}`}
                className="block pt-3 text-md text-crunchyBlue-dark"
              >
                <div className="w-40 h-auto p-4 text-center bg-white border rounded-md hover:border-opacity-1 ">
                  <img
                    className="block"
                    src={`/images/${category.tile}`}
                    alt={category.tile}
                  />

                  {category.name}
                </div>
              </Link>
            ))}
          </div>
          <h1 className="text-xl font-semibold">Customer Favorites</h1>
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
              "crunchy Pharmacy",
            ]
              .slice(0, 3)
              .map((category, index) => (
                <div
                  key={index}
                  className="w-40 h-auto p-4 bg-white mr-1.5 text-center border rounded-md hover:border-opacity-1 "
                >
                  <img
                    className="block"
                    src={`/images/${
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
                        "crunchy-pharmacy-tile.webp",
                      ][index]
                    }`}
                    alt={category}
                  />
                  <Link
                    to="/"
                    className="block pt-3 text-md text-crunchyBlue-dark"
                  >
                    {category}
                  </Link>
                </div>
              ))}
          </div>
          <div className="p-1">
            <h1 className="text-xl font-semibold">New Puppy or Kitten?</h1>
            <Link to="/">
              <img src="/images/new-puppy.jpg" alt="new puppy"></img>
              <span className="text-sm hover:underline text-crunchyBlue-dark">
                Puppy Shop
              </span>
            </Link>
            <Link to="/">
              <img src="/images/new-kitten.jpg" alt="new kitten"></img>
              <span className="text-sm hover:underline text-crunchyBlue-dark">
                Kitten Shop
              </span>
            </Link>
          </div>
          <div>
            <h1 className="text-xl font-semibold">2,000+ Brands in Stock!</h1>
            <Link to="/" className="flex items-center text-crunchyBlue-dark">
              <span className="mt-0.5 text-sm hover:underline ">Shop All</span>
              <HiChevronRight size={24} />
            </Link>

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
          <div className="p-3 bg-crunchyBlue-light">
            <h1 className="text-xl font-semibold">Join the crunchy Pack</h1>
            <p className="text-sm">
              Sign up to get emails about the latest deals, product drops, pet
              health tips and more!
            </p>
            <Input placeholder="Email"></Input>
            <Button className="bg-crunchyBlue-darker">Sign Up</Button>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              Spooky crunchy Exclusives ????
            </h2>
            <div className="flex">
              {[0, 1, 2, 3, 4].map((article, index) => (
                <Link key={index} to="">
                  <article className="p-3.5 mr-1.5 border rounded-md w-36 bg-white ">
                    <div>
                      <img
                        className="w-20 h-20 m-auto"
                        src="/images/goody-bag.jpg"
                        alt="goody bag"
                      ></img>
                      <span className="text-sm font-medium">Goody Box</span>
                      <p className="text-xs">
                        Halloween Toys, Treats, and Bandanas
                      </p>
                      <div className="p-1 my-2 text-xs text-white rounded bg-crunchyGreen">
                        Save 40% at Checkout
                      </div>
                      <span className="font-semibold text-crunchyRed ">
                        $24.99
                      </span>
                      <div className="flex items-center">
                        <>Stars</>&nbsp;
                        <span className="text-xs text-crunchyGray">88</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">Pet Health</h1>
            <img src="/images/pet-wellness.jpg" alt="pet wellness"></img>
            &nbsp;
            <Link className="text-sm text-crunchyBlue-darker" to="">
              Pet Wellness
            </Link>
            <img src="/images/connect-with-vet.jpg" alt="Connect With a Vet" />
            &nbsp;
            <Link className="text-sm text-crunchyBlue-darker" to="">
              Connect with a Vet
            </Link>
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              Autoship & Save on Favorites
            </h1>
            <Link to="/" className="flex items-center text-crunchyBlue-darker">
              <span className="mt-0.5 text-sm hover:underline ">Shop All</span>
              <HiChevronRight size={24} />
            </Link>
            <div className="flex">
              {[0, 1, 2, 3, 4].map((article, index) => (
                <Link key={index} to="">
                  <article className="p-3.5 mr-1.5 border rounded-md bg-white w-36 ">
                    <div>
                      <img
                        className="w-16 h-24 m-auto"
                        src="/images/taste-wild-dog-food.jpg"
                        alt="Dog Food"
                      ></img>
                      <span className="text-sm font-medium">
                        Taste Of the Wild
                      </span>
                      <p className="text-xs">
                        High Prarie Grain-Free Dry Dog Food
                      </p>
                      <div className="p-1 my-2 text-xs text-white rounded bg-crunchyGreen">
                        Save 40% at Checkout
                      </div>
                      <span className="font-semibold text-crunchyRed ">
                        $24.99
                      </span>
                      <div className="flex items-center">
                        <>Stars</>&nbsp;
                        <span className="text-xs text-crunchyGray">88</span>
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
              {["Holiday Shop", "Our Current Favorites", 2, 3, 4].map(
                (article, index) => (
                  <Link key={index} to="">
                    <article className="p-3.5 mr-1.5 border rounded-md bg-white w-36 h-full text-center">
                      <img
                        src="/images/holiday-shop.webp"
                        className="mb-3"
                        alt="Holiday Shop"
                      ></img>
                      <Link to="" className="text-crunchyBlue-dark">
                        {article}
                      </Link>
                    </article>
                  </Link>
                )
              )}
            </div>
          </div>
          <img
            src="/images/adopt-a-dog-month-small.webp"
            className="object-none h-32"
            alt="adopt a dog"
          />
        </div>
      </section>
    </>
  );
};
