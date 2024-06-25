import banner1 from "../../../public/banner1.png";
import banner2 from "../../../public/banner2.jpg";
import banner3 from "../../../public/banner3.jpg";
import banner4 from "../../../public/banner4.jpg";


const Banner = () => {
  return (
    <div className="m-2 xl:m-0">
      <div className="carousel w-full rounded-xl">
        <div id="item1" className="carousel-item w-full h-[70vh]">
          <img src={banner3} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full h-[70vh]">
          <img src={banner2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full h-[70vh]">
          <img
            src={banner4} 
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-[70vh]">
          <img
            src={banner1}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
