import propTypes from "prop-types";
import { useEffect } from "react";

function ContactMeBtn({ className = "" }) {
  useEffect(() => {
    document.querySelectorAll(".contactMeBtn").forEach((btn) =>
      btn.addEventListener("click", () => {
        window.location.href =
          "mailto:goutamdogri@gmail.com?subject=Web%20Development%20Services%20Inquiry";
      })
    );
  });
  return (
    <button
      className={`contactMeBtn bg-gradient-to-r from-btn-dark to-btn-light text-white px-3 h-11 w-fit rounded-xl font-normalText hover:from-[#3c3cba] hover:to-[#8b8bff] ${className}`}
    >
      <p className=" leading-[44px]">Contact me</p>
    </button>
  );
}

ContactMeBtn.propTypes = {
  className: propTypes.string,
};

export default ContactMeBtn;
