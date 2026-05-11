import { useInView } from "react-intersection-observer";

function Button({ type }) {
  const sizeStyle = {
    hidden: "hidden laptop:flex tablet:flex",
    large: "w-[100px] laptop:w-auto h-auto",
  };
  const { ref, inView } = useInView();
  return (
    // button
    <figure
      className={`${sizeStyle[type]} transition-all duration-700 ease-in-out flex gap-10 ${inView ? "animate-fade-in" : ""}`}
      ref={ref}
    >
      <button className="w-[150px] laptop:w-[200px] tablet:w-[150px] p-4 bg-black flex gap-2 animate-[fadeIn_0.5s_ease-out_forwards] ">
        <img
          src="\Quick-image\social-icon\Apple.png"
          className="object-contain w-[20px]"
        />
        <span className="text-left">
          <p className="text-[7px] laptop:text-[10px] tablet:text-[10px] text-[#4E545F]">
            FREE DOWNLOAD
          </p>
          <p className="text-[10px] laptop:text-[20px] tablet:text-[15px] text-white">
            App Store
          </p>
        </span>
      </button>
      <button className="w-[150px] laptop:w-[200px] tablet:w-[150px]  p-4 bg-black flex gap-2  animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
        <img
          src="\Quick-image\social-icon\Group.png"
          className="object-contain w-[20px]"
        />
        <span className="text-left">
          <p className="text-[7px] laptop:text-[10px] tablet:text-[10px] text-[#4E545F]">
            FREE DOWNLOAD
          </p>
          <p className="text-[10px] laptop:text-[20px] tablet:text-[15px] text-white">
            {" "}
            Google Play
          </p>
        </span>
      </button>
    </figure>
  );
}

export default Button;
