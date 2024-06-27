import ContactMeBtn from "../components/ContactMeBtn";

function Home() {
  return (
    <section id="home" className="w-full bg-page-light flex justify-center">
      <div className="w-10/12 h-[675px] max-[1226px]:h-[550px] max-[1050px]:h-[500px] max-[950px]:h-[450px] max-[850px]:h-[800px] max-[728px]:h-[720px] max-[600px]:h-[660px] flex items-center justify-between max-[850px]:flex-col ">
        <div className="w-4/12 mr-8 max-[950px]:w-5/12 max-[850px]:w-7/12 max-[750px]:w-8/12 max-[650px]:w-9/12 max-[550px]:w-10/12 h-full flex justify-center items-center max-[850px]:pt-9">
          <div>
            <div>
              <h2 className=" text-7xl max-[1326px]:text-6xl max-[1106px]:text-5xl max-[950px]:text-4xl font-medium">
                <span className="font-normal">Hello</span>
                <br />
                I&apos;m Goutam <br /> Dogri
              </h2>
            </div>
            <p className="mt-7 mb-14 max-[1050px]:mb-10 max-[950px]:mt-4 max-[950px]:mb-7  text">
              a Fullstack Web Developer specializing in the{" "}
              <span className=" font-semibold">MERN stack</span>. I can help you
              to achieve your business goals with custom, high-quality web
              applications, all with{" "}
              <span className=" font-semibold">raw code</span>.
            </p>
            <ContactMeBtn />

            <div className="flex mt-3">
              <a className="mr-2" href="#">
                <img
                  className="h-6 max-[950px]:h-5"
                  src="/assets/socialMediaIcon/youtube.png"
                  alt=""
                />
              </a>
              <a className="mr-2" href="#">
                <img
                  className="h-6 max-[950px]:h-5"
                  src="/assets/socialMediaIcon/Facebook.png"
                  alt=""
                />
              </a>
              <a className="mr-2" href="#">
                <img
                  className="h-6 max-[950px]:h-5"
                  src="/assets/socialMediaIcon/Instagram.png"
                  alt=""
                />
              </a>
              <a
                className="mr-2"
                href="https://www.linkedin.com/in/goutamdogri"
              >
                <img
                  className="h-6 max-[950px]:h-5"
                  src="/assets/socialMediaIcon/linkedin.png"
                  alt=""
                />
              </a>
              <a className="mr-2" href="#">
                <img
                  className="h-6 max-[950px]:h-5"
                  src="/assets/socialMediaIcon/X-logo.png"
                  alt=""
                />
              </a>
              <a className="mr-2" href="https://github.com/goutamdogri">
                <img
                  className="h-6 max-[950px]:h-5"
                  src="/assets/socialMediaIcon/github.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-7/12 min-[1428px]:w-6/12 max-[550px]:w-8/12 max-[450px]:w-9/12 h-full flex justify-center items-center pt-12 relative">
          <img
            className="absolute  bottom-0"
            src="/assets/photo element cropped bg removed.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
