import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Input } from "./Input";
import { Button } from "./Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import // HiSun,
// HiMoon,
"react-icons/hi";
import { Brand } from "../types";
import CategoryContext from "../contexts/CategoryContext";

export const Home = () => {
  const [brands, setBrands] = useState<Brand[] | null>(null);
  const { categories } = useContext(CategoryContext)!;

  useEffect(() => {
    (async () => {
      const brands = await fetch("/api/brands").then((response) =>
        response.json()
      );
      setBrands(brands);
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
      <div className="m-auto xl:w-10/12 mt-2">
        <div className="mb-8 md:hidden">
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
                  className="w-full"
                  src={`/images/${item}`}
                  alt="hero"
                ></img>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mb-8 hidden md:block">
          <Slider {...carouselProps}>
            {["hero-large.jpg", "hero-large-1.jpg", "hero-large-2.jpg"].map(
              (item, index) => (
                <div key={index}>
                  <img
                    className="w-full"
                    src={`/images/${item}`}
                    alt="hero"
                  ></img>
                </div>
              )
            )}
          </Slider>
        </div>
        <section className=" bg-crunchyGray-lighter " id="home-content">
          <div className="w-full p-3 ">
            <h1 className="w-full mb-3 text-xl font-semibold">
              Shop by Category
            </h1>
            <div
              style={{ scrollSnapType: "x mandatory" }}
              className="flex gap-3 mb-3 overflow-auto lg:justify-center"
            >
              {categories
                ?.filter((category) => category.id !== 10 && category.id !== 9)
                .map((category, index) => (
                  <Link
                    className="p-4 mb-3 text-center border rounded text-crunchyBlue-dark shadow-md"
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
            <div className="p-1 mb-3">
              <h1 className="mb-3 text-xl font-semibold">
                New Puppy or Kitten?
              </h1>
              <div className="sm:flex sm:gap-4">
                <Link to="/category/9">
                  <div className="mb-3">
                    <img src="/images/new-puppy.jpg" alt="new puppy"></img>
                    <span className="mb-3 text-sm hover:underline text-crunchyBlue-dark">
                      Puppy Shop
                    </span>
                  </div>
                </Link>
                <Link to="/category/10">
                  <img src="/images/new-kitten.jpg" alt="new kitten"></img>
                  <span className="text-sm hover:underline text-crunchyBlue-dark">
                    Kitten Shop
                  </span>
                </Link>
              </div>
            </div>
            <div className="mb-6">
              <h1 className="mb-3 text-xl font-semibold">
                Find Products by Your Favorite Brand!
              </h1>
              <div className=" overflow-auto">
                <div
                  id="brands"
                  className="flex flex-wrap w-full gap-3 xl:justify-center min-w-[380px] "
                >
                  {brands?.slice(0 - 9)?.map((brand) => (
                    <Link key={brand.id} to={`/brand/${brand.id}`}>
                      <picture className="flex justify-center text-center bg-white border rounded shadow-md">
                        <img
                          className="p-3 w-28 h-28"
                          src={`/images/${brand.logo}`}
                          alt={brand.name}
                        />
                      </picture>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="gap-4 p-5 mb-6 text-center bg-crunchyBlue-light lg:flex lg:px-40 lg:items-center ">
              <div className="m-auto lg:w-1/3">
                <h1 className="text-xl font-semibold">Join the Crunchy Pack</h1>
                <p className="text-sm ">
                  Sign up to get emails about the latest deals, product drops,
                  pet health tips and more!
                </p>
              </div>
              <div className="lg:flex lg:w-2/3">
                <Input
                  className="w-6/12 mr-2 md:w-8/12 lg:w-full "
                  placeholder="Email"
                ></Input>
                <Button className="bg-crunchyBlue-darker">Sign&nbsp;Up</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
