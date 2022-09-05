import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#c27DFC] mb-1 mt-16 sm:mt-0">Hi. my name is</p>
        <h1 className="md:text-5xl text-4xl font-bold text-[#ccd6f6]">
          Ar Rasyid Sarifullah
        </h1>
        <h2 className="text-[#8892b0] text-4xl font-bold">
          I'm a Java<span className="text-[#c27DFC]">Script</span> Enthusiast
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’ve always been someone who has both a creative and a logical side.
          When I discovered web design in college, I realized it would be the
          perfect fit. I could use my creative side to design and my logical
          side to code. As a bonus, being both designer and developer allows me
          to make sure no detail is lost in translation.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c27DFC] hover:border-[#c27DFC]">
              View Work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
