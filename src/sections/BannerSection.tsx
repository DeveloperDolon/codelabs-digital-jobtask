import NavBar from "../components/NavBar";
import bannerImg from "../assets/Rectangle 5.png";
import MyContainer from "../shared/MyContainer/MyContainer";

const BannerSection = () => {
  return (
    <div className="bg-gradient-to-t from-gray-200 to-gray-300">
      <NavBar />

      <MyContainer>
        <img
          className="w-full md:h-[500px] sm:h-[350px] h-auto md:my-20 my-16"
          src={bannerImg}
          alt="Banner image."
        />

        <div>hello world.</div>
      </MyContainer>
    </div>
  );
};

export default BannerSection;
