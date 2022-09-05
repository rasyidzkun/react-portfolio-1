import { catFacts, catto, covid, doge, istorias, pokedex } from "../../assets/";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-200 sm:mt-32 mt-16"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="px-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-[#c27DFC]">
            Work
          </h1>
          <p className="py-4 text-lg text-[#8892b0]">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 my-5">
          <div
            style={{ backgroundImage: `url(${catFacts})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Cat Facts
              </span>
              <div className="pt-8">
                <a
                  href="https://rasyidzkun.github.io/cat-facts/"
                  target={"_blank"}
                >
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/rasyidzkun/cat-facts"
                  target={"_blank"}
                >
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${catto})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Catto
              </span>
              <div className="pt-8">
                <a href="https://rasyidzkun.github.io/catto/" target={"_blank"}>
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rasyidzkun/catto" target={"_blank"}>
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${covid})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Covid-19 Tracker
              </span>
              <div className="pt-8">
                <a
                  href="https://covid19-tracker-script.netlify.app/"
                  target={"_blank"}
                >
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/rasyidzkun/covid19-tracker"
                  target={"_blank"}
                >
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${doge})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Doge
              </span>
              <div className="pt-8">
                <a href="https://rasyidzkun.github.io/doge/" target={"_blank"}>
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rasyidzkun/doge" target={"_blank"}>
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${pokedex})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                PokeDex
              </span>
              <div className="pt-8">
                <a
                  href="https://rasyidzkun.github.io/pokedex/"
                  target={"_blank"}
                >
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/rasyidzkun/pokedex"
                  target={"_blank"}
                >
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${istorias})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Istorias
              </span>
              <div className="pt-8">
                <a href="https://istorias.netlify.app/" target={"_blank"}>
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/rasyidzkun/istorias"
                  target={"_blank"}
                >
                  <button className="rounded-lg px-4 py-2 m-2 bg-slate-50 text-gray-700 font-bold text-lg hover:bg-slate-200">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
