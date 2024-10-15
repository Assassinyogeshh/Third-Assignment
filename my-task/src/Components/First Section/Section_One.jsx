import webLogo from "../../assets/web_logo.webp";
import Section_Two from "../Second Section/Section_Two";
import Section_Third from "../Third Section/Section_Third";
const Section_One = () => {
  return (
    <>
      <div className=" h-auto w-full flex-col justify-center items-center">
        <div className="flex flex-col justify-start gap-20 mt-8 items-center h-[95vh] w-full">
          <div className="flex flex-col justify-center gap-2 items-center w-full">
            <span>
              <img src={webLogo} alt="icon" />
            </span>
            <span className="flex gap-4">
              <p className="hover:text-pink-500 hover:underline hover:underline-offset-4 cursor-pointer">
                HOME
              </p>
              <p className="hover:text-pink-500 hover:underline hover:underline-offset-4 cursor-pointer">
                APPLY
              </p>
            </span>
          </div>

          <div className=" w-full h-[55vh] gap-10 flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center gap-[1rem] text-center items-center w-[75vw]">
              <h1 className=" text-[64px] text-[rgb(203,65,84)] uppercase leading-tight tracking-wide font-[400]">
                MS Artificial intelligence -in usa
              </h1>
              <h3 className=" text-[36px] font-[400] text-[rgb(203, 65, 84)] whitespace-pre-line">
                January, May, Aug 2025 semesters
              </h3>
              <p className="text-[23px] text-[rgb(94, 94, 94)] font-[700] text-[rgb(94,94,94)]">
                Processing Charge of Rs.1000 per University. Choice of Top 200
                Universities
              </p>
            </div>
            <button className=" border font-[600] text-white bg-[rgb(203,65,84)] rounded-[2rem] w-[10rem] h-[3rem]">
              {" "}
              REGISTER{" "}
            </button>
          </div>
        </div>
        <Section_Two />
        <Section_Third />
      </div>

      <footer className="flex flex-col justify-center items-center gap-[3rem] w-full pl-[5rem] pr-[5rem] h-[18vh]">
        <span className=" text-[13px] uppercase w-full flex justify-between  items-center">
          <p>Copyright © 2024 ANCONS International- All Rights Reserved.</p>
          <p>Powered by ANCONS</p>
        </span>
        <span className=" flex justify-evenly items-center w-[30%] text-[18px] capitalize text-[rgb(203,65,84)]">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </span>
      </footer>
    </>
  );
};

export default Section_One;
