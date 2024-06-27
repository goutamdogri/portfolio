function AboutMe() {
  return (
    <section id="aboutMe" className="w-full bg-page-dark flex justify-center">
      <div className="w-10/12 py-20 grid grid-cols-2 grid-rows-1 gap-10 lg:gap-20 max-[850px]:flex max-[850px]:flex-col-reverse max-[850px]:justify-center items-center">
        <div className="flex items-center justify-center max-[850px]:w-7/12 max-[750px]:w-8/12 max-[650px]:w-9/12 max-[550px]:w-10/12">
          <div className="w-full xl:w-9/12">
            <div className="flex gap-4 ">
              <div className=" w-1/2 mb-4 p-4 bg-page-light rounded-3xl aspect-square flex flex-col justify-center items-center">
                <img
                  className="w-7/12"
                  src="/assets/projectsAsset/portfolio1.png"
                  alt=""
                />
                <p className="mt-3 text-lg max-[600px]:text-base max-[500px]:text-sm max-[430px]:px-8 font-medium whitespace-nowrap">
                  Portfolio Website
                </p>
              </div>

              <div className=" w-1/2 mt-4 p-4 bg-page-light rounded-3xl aspect-square  flex flex-col justify-center items-center ">
                <img
                  className="w-7/12"
                  src="/assets/projectsAsset/landingPage.png"
                  alt=""
                />
                <p className="mt-3 text-lg max-[600px]:text-base max-[500px]:text-sm max-[430px]:px-8 font-medium whitespace-nowrap">
                  Landing Page
                </p>
              </div>
            </div>

            <div className="flex gap-4 ">
              <div className=" w-1/2 mb-4 p-4 bg-page-light rounded-3xl aspect-square flex flex-col justify-center items-center">
                <img
                  className="w-7/12"
                  src="/assets/projectsAsset/shoppingCart.png"
                  alt=""
                />
                <p className="mt-3 text-lg max-[600px]:text-base max-[500px]:text-sm max-[430px]:px-8 font-medium whitespace-nowrap">
                  E-commerce
                </p>
              </div>

              <div className="w-1/2 mt-4 p-4 bg-page-light rounded-3xl aspect-square  flex flex-col justify-center items-center">
                <img
                  className="w-7/12"
                  src="/assets/projectsAsset/socialMedia.png"
                  alt=""
                />
                <p className="mt-3 text-lg max-[600px]:text-base max-[500px]:text-sm max-[430px]:px-8 font-medium whitespace-nowrap">
                  Social Media
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center max-[850px]:w-7/12 max-[750px]:w-8/12 max-[650px]:w-9/12 max-[550px]:w-10/12">
          <div>
            <div>
              <h2 className=" text-3xl font-medium">
                Why Hire Me For Next Project?
              </h2>
              <p className=" mt-4">
                I am a proficient Fullstack Web Developer with expertise in the
                MongoDB, Express.js, React, and Node.js (MERN) stack. My
                experience encompasses creating robust and scalable
                applications, such as a comprehensive video-sharing platform
                with features akin to YouTube, all developed with raw code. My
                skills include front-end and back-end development, database
                management, and API integration, allowing me to build seamless
                and efficient web solutions. I am committed to understanding
                client needs and delivering high-quality, custom web
                applications that meet their business objectives.
              </p>
            </div>
            <div className="mt-6">
              <h2 className=" text-2xl font-medium">My Tech Stack</h2>

              <div className="mt-3">
                <div className="flex items-center">
                  <div className="w-[9px] h-[9px] bg-black rounded-full mr-2"></div>
                  <p>React JS</p>
                </div>
                <div className="flex items-center">
                  <div className="w-[9px] h-[9px] bg-black rounded-full mr-2"></div>
                  <p>Node JS</p>
                </div>
                <div className="flex items-center">
                  <div className="w-[9px] h-[9px] bg-black rounded-full mr-2"></div>
                  <p>Express JS</p>
                </div>
                <div className="flex items-center">
                  <div className="w-[9px] h-[9px] bg-black rounded-full mr-2"></div>
                  <p>MongoDB</p>
                </div>
                <div className="flex items-center">
                  <div className="w-[9px] h-[9px] bg-black rounded-full mr-2"></div>
                  <p>Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
