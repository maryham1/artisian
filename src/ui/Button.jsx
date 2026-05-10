function Button({ type }) {
  const sizeStyle = {
    hidden: "hidden laptop:flex ",
    large: "w-[100px] laptop:w-auto h-auto",
  };
  return (
    // button
    <figure className={`${sizeStyle[type]} flex gap-10`}>
      <button className="w-[150px] laptop:w-[200px] p-4 bg-black flex gap-2 ">
        <img
          src="\Quick-image\social-icon\Apple.png"
          className="object-contain w-[20px]"
        />
        <span className="text-left">
          <p className="text-[7px] laptop:text-[10px] text-[#4E545F]">
            FREE DOWNLOAD
          </p>
          <p className="text-[10px] laptop:text-[20px] text-white">App Store</p>
        </span>
      </button>
      <button className="w-[150px] laptop:w-[200px] p-4 bg-black flex gap-2 ">
        <img
          src="\Quick-image\social-icon\Group.png"
          className="object-contain w-[20px]"
        />
        <span className="text-left">
          <p className="text-[7px] laptop:text-[10px] text-[#4E545F]">
            FREE DOWNLOAD
          </p>
          <p className="text-[10px] laptop:text-[20px] text-white">
            {" "}
            Google Play
          </p>
        </span>
      </button>
    </figure>
  );
}

export default Button;
