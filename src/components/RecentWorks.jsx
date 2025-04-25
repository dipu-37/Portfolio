import { recentWorks } from "../data/recentWorks";

const RecentWorks = () => {
  return (
    <div id="recent-works" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recentWorks.map((work, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg flex flex-col justify-between"
        >
          <div className="lg:h-36 object-cover">
            <img className="rounded-t-lg w-full" src={work.img} alt={work.title} />
          </div>

          <div className="p-3 border-t border-gray-100 flex flex-col flex-grow">
            <div className="flex-grow">
              <h5 className="text-xl font-semibold  text-gray-800">{work.title}</h5>
              <p className="font-light dark:text-gray-400">{work.description}</p>
              <div className="my-4 flex flex-wrap">
                {work.techs.map((tech, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className=" bg-gray-100 border border-gray-100 hover:bg-gray-50 font-medium rounded-md text-sm px-3.5 py-2 mr-2 mb-2  text-gray-400 "
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/dipu-37"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-blue-500 hover:bg-blue-600 dark:text-gray-100"
            >
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 
                  1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                  1 0 010-1.414z"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentWorks;
