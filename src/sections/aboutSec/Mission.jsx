import { useInView } from "react-intersection-observer";

const mvv = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "To make home services simple, fast, and reliable by connecting users with trusted and verified skilled professionals anytime they need help.",
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "To become the most trusted platform for on-demand home services, where every household can easily access skilled artisans with confidence and convenience.",
  },
  {
    id: "values",
    title: "Our Values",
    description:
      "We value trust, quality, and accessibility. We are committed to ensuring reliable service, fair opportunities for artisans, and a seamless experience for every user.",
  },
];

// duplicate array for continuous flow
const loopMvv = [...mvv, ...mvv];

function Mission() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <div
      className="w-full overflow-hidden mt-15"
      ref={ref}
    >
      <div
        className={`flex w-max gap-5 animate-scroll ${
          inView ? "animate-fade-in1" : ""
        }`}
      >
        {loopMvv.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 w-[370px] laptop:w-[350px] tablet:w-[370px] tablet:p-8 laptop:p-6 h-auto space-y-2 rounded-sm shadow-md flex-shrink-0"
          >
            <h5 className="font-semibold text-black text-center text-[18px] tablet:text-[20px] laptop:text-[20px]">
              {item.title}
            </h5>

            <p className="text-[12px] laptop:text-[14px] tablet:text-[14px] text-[#4E545F]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;