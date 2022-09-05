const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-200">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#c27DFC]">
              About
            </h1>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 sm:gap-8 gap-5 px-8">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hi. I'm Rasyid, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className="sm:text-lg text-md">
              My main experience is in front-end development but I also have a
              passion for design. Given that producing a modern website requires
              the combination of design, server technology, and the layer that
              users interacts with, I believe having experience in both design
              and development allows for making the most optimal user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
