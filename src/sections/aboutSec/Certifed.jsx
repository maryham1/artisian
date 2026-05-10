const roles = [
  {
    image: "/Quick-image/company-associate/clara.png",
    name: "Clara",
    role: "Mechanic",
  },
  {
    image: "/Quick-image/company-associate/kenedy.png",
    name: "Kenedy",
    role: "Electrician",
  },
  {
    image: "/Quick-image/company-associate/kate.png",
    name: "Kate ",
    role: "Car Mechanic",
  },
  {
    image: "/Quick-image/company-associate/kelvin.png",
    name: "Kelvin",
    role: "AC Technician",
  },
];
function Certifed() {
  return (
    <div className="w-full mt-15">
      <div className="flex flex-col gap-5 laptop:gap-10 items-center justify-center">
        <h4 className="text-[26px] laptop:text-[36px] font-semibold text-black">
          Certified Artisians
        </h4>
        <p className="text-[16px] laptop:text-[22px] text-[#4E545F] text-center ">
          We work with skilled and verified professionals who meet our quality
          standards. Every artisan goes through a screening process to ensure
          they have the experience, reliability, and professionalism needed to
          deliver excellent service. This means you can book with confidence,
          knowing your job is in capable hands.
        </p>
        <div className="flex justify-between gap-10 flex-wrap laptop:flex-nowrap items-center w-full">
          {roles.map((role) => (
            <>
              <div className="max-w-[150px]  w-[130px]  laptop:w-[250px] laptop:max-w-[250px] ">
                <img
                  src={role.image}
                  className="max-w-[150px] max-h-[170px] w-[130px] h-[150px]   laptop:w-[250px] laptop:max-w-[250px] laptop:max-h-[250px] laptop:h-[270px] rounded-sm object-cover"
                />
                <figure className="flex items-center justify-between">
                  <span className="text-[15px]">{role.name}</span>
                  <span className="text-[#D03531] text-[15px]">
                    {role.role}
                  </span>
                </figure>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifed;
