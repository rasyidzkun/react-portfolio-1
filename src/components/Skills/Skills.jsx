import {
  html,
  css,
  js,
  react,
  node,
  tailwind,
  git,
  github,
} from "../../assets/index";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-200">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="px-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-[#c27DFC]">
            Skills
          </h1>
          <p className="py-4 text-lg text-[#8892b0]">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12 text-center py-8">
          <div>
            <img src={html} alt="HTMl Logo" className="sm:w-20 w-16 mx-auto" />
          </div>

          <div>
            <img src={css} alt="CSS Logo" className="sm:w-20 w-16 mx-auto" />
          </div>

          <div>
            <img
              src={tailwind}
              alt="Tailwind Logo"
              className="sm:w-20 w-16 mx-auto"
            />
          </div>

          <div>
            <img src={js} alt="JS Logo" className="sm:w-20 w-16 mx-auto" />
          </div>

          <div>
            <img
              src={node}
              alt="Node JS Logo"
              className="sm:w-20 w-16 mx-auto"
            />
          </div>

          <div>
            <img
              src={react}
              alt="React JS Logo"
              className="sm:w-20 w-16 mx-auto"
            />
          </div>

          <div>
            <img src={git} alt="Git Logo" className="sm:w-20 w-16 mx-auto" />
          </div>

          <div>
            <img
              src={github}
              alt="Github Logo"
              className="sm:w-20 w-16 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
