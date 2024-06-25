import ContactMeBtn from "../components/ContactMeBtn";

function ContactMe() {
  return (
    <section id="contactMe" className="w-full bg-page-dark flex justify-center">
      <div className="w-10/12 py-20 flex justify-center items-center">
        <div className="w-9/12 bg-page-light py-5 px-10 rounded-3xl flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl font-medium max-[600px]:font-bold mb-3 max-[600px]:text-xl max-[500px]:text-lg">
              Lets Work Together
            </h2>
            <p className=" text-sm mb-5 md:px-5 lg:px-24">
              Ready to elevate your project with cutting-edge web development?
              Let&apos;s work together to bring your vision to life. Tap
              &quot;Contact Me&quot; below to get started!
            </p>
          </div>
          <ContactMeBtn />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
