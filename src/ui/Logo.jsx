function Logo({ type }) {
  const sizeStyle = {
    small: "w-[80px] laptop:w-[90px] h-auto",
    large: "w-[100px] laptop:w-[130px] h-auto",
  };
  return (
    <div>
      <img
        src="\Quick-image\company\Asset 1@4x 1.png"
        className={`${sizeStyle[type]}`}
      />
    </div>
  );
}

export default Logo;
