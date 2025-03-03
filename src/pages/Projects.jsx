function Projects() {
  return (
    <section id="projects" className="w-full bg-page-dark flex justify-center">
      <div className="w-10/12 py-20 grid grid-cols-2 grid-rows-1 gap-10 lg:gap-20 max-[850px]:flex max-[850px]:flex-col max-[850px]:justify-center items-center">
        <div className="flex items-center justify-center max-[850px]:w-7/12 max-[750px]:w-8/12 max-[650px]:w-9/12 max-[550px]:w-10/12">
          <div>
            <h2 className="text-4xl font-medium">VidShare</h2>
            <h3 className="text-xl font-medium">
              A project that tells all about me
            </h3>
            <p className="mt-8">
              VidShare is a YouTube-like platform with features such as
              authentication, video uploads, likes, dislikes, comments, watch
              history, profile management, playlists, and community posts.
              Developed with React, Node.js, Express.js, MongoDB, and Tailwind
              CSS, it highlights my full-stack expertise. I implemented secure
              password authentication with cookies and JWT, and ensured a
              seamless user experience through best practices and continuous
              feedback integration.
            </p>
            <div className="flex mt-4">
              <p className="text-xl font-medium">Github</p>
              <div className="flex items-center ml-2">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>

            <div className="my-2">
              <a href="https://github.com/goutamdogri/VidShare-frontend">
                <button className=" bg-gradient-to-r from-btn-dark to-btn-light text-white px-4 h-11 w-fit rounded-xl font-normalText hover:from-[#3c3cba] hover:to-[#8b8bff]">
                  Frontend
                </button>
              </a>
              <a href="https://github.com/goutamdogri/VidShare">
                <button className="ml-4 bg-gradient-to-r from-btn-dark to-btn-light text-white px-4 h-11 w-fit rounded-xl font-normalText hover:from-[#3c3cba] hover:to-[#8b8bff]">
                  Backend
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-10 max-[850px]:w-7/12 max-[750px]:w-8/12 max-[650px]:w-9/12 max-[550px]:w-10/12 max-[400px]:w-full">
          <a href="https://vidshare.goutamdogri.com">
            <div className="bg-page-light rounded-2xl rotate-[20deg] hover:rotate-[10deg] transition">
              <img
                className=" -rotate-[10deg] hover:rotate-[10deg] rounded-2xl transition"
                src="/assets/projectsAsset/vidshareFront.webp"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
