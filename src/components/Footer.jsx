import Logo from "./Logo";

function Footer() {
  return (
    <div className=" bg-page-light h-20 flex justify-center items-center">
      <div className="w-10/12 h-full flex justify-between items-center">
        <Logo>GOUTAM DOGRI</Logo>
        <div className="flex ml-4">
          <a className="mr-2" href="#">
            <img
              className="h-6 max-[950px]:h-5"
              src="src\assets\socialmediaicon\youtube.png"
              alt=""
            />
          </a>
          <a className="mr-2" href="#">
            <img
              className="h-6 max-[950px]:h-5"
              src="src\assets\socialmediaicon\Facebook.png"
              alt=""
            />
          </a>
          <a className="mr-2" href="#">
            <img
              className="h-6 max-[950px]:h-5"
              src="src\assets\socialmediaicon\Instagram.png"
              alt=""
            />
          </a>
          <a className="mr-2" href="https://www.linkedin.com/in/goutamdogri">
            <img
              className="h-6 max-[950px]:h-5"
              src="src\assets\socialmediaicon\linkedin.png"
              alt=""
            />
          </a>
          <a className="mr-2" href="#">
            <img
              className="h-6 max-[950px]:h-5"
              src="src\assets\socialmediaicon\X-logo.png"
              alt=""
            />
          </a>
          <a className="mr-2" href="https://github.com/goutamdogri">
            <img
              className="h-6 max-[950px]:h-5"
              src="src\assets\socialmediaicon\github.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
