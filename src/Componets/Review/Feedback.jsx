import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at a time
    slidesToScroll: 1, // Number of cards to scroll at a time
    autoplay: true, // Enable auto sliding
    // autoplaySpeed: 200, // Auto slide every 2 seconds
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  //   const cards = [
  //     { id: 1, content: "Card 1" },
  //     { id: 2, content: "Card 2" },
  //     { id: 3, content: "Card 3" },
  //     { id: 4, content: "Card 4" },
  //     { id: 5, content: "Card 5" },
  //     { id: 6, content: "Card 6" },
  //   ];

  let [testmonial, setTestomonial] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setTestomonial(data));
  }, []);

  return (
    <div className="w-full mx-auto my-8">
      <h1 className="text-xl md:text-2xl font-bold mt-14 mb-8 text-[#FFA500]">
        Cutomer Review
      </h1>
      <Slider {...settings}>
        {testmonial.map((card) => (
          <div key={card.id} className="px-2 h-full">
            <div className="bg-[#ffffff] p-6 text-center border border-gray-200 rounded-lg shadow-lg">
              <div>
                <div className="flex justify-center">
                  <img
                    className="rounded-full w-[120px] h-[120px]"
                    src={card.image}
                    alt=""
                  />
                </div>
                <h1 className="text-2xl font-bold text-left">{card.name}</h1>
                <h1 className="text-left">{card.details}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
