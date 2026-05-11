import {
  FaCheckCircle,
  FaCreditCard,
  FaHeadset,
  FaTools,
} from "react-icons/fa";

import { useInView } from "react-intersection-observer";

const details = [
  {
    icon: <FaTools className="w-[10px] h-[10px] text-white" />,
    id: "f1",
    title: "Active Artisans",
    description:
      "Work with skilled and available professionals ready to take on your requests anytime. Get quick responses and fast service from experts near you.",
  },
  {
    icon: <FaHeadset className="w-[10px] h-[10px] text-white" />,
    id: "f2",
    title: "Constant Support",
    description:
      "Need help? Our support team is always available to assist you with bookings, issues, or any questions you may have.",
  },
  {
    icon: <FaCreditCard className="w-[10px] h-[10px] text-white" />,
    id: "f3",
    title: "Easy Payments",
    description:
      "Pay securely and conveniently through the app using trusted payment methods, with no hidden charges.",
  },
  {
    icon: <FaCheckCircle className="w-[10px] h-[10px] text-white" />,
    id: "f4",
    title: "Service Guarantee",
    description:
      "Enjoy peace of mind with our quality guarantee. If you’re not satisfied, we’re here to make it right.",
  },
];

// duplicate the array for seamless looping
const loopDetails = [...details, ...details];

function Flow() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      className={`bg-white w-full overflow-hidden px-5 py-10 tablet:px-10 laptop:px-15 ${
        inView ? "animate-fade-in1" : ""
      }`}
      ref={ref}
    >
      <div className="flex w-max gap-5 animate-scroll">
        {loopDetails.map((detail, i) => (
          <div
            key={i}
            className="min-w-[205px] laptop:min-w-[260px] tablet:min-w-[220px] flex gap-5 laptop:gap-10"
          >
            <div>
              <div className="flex gap-2 items-center">
                <figure className="w-[10px] h-[10px] laptop:w-[15px] laptop:h-[15px] tablet:w-[13px] tablet:h-[13px] p-3 rounded-full flex items-center justify-center bg-[#D03531]">
                  <span>{detail.icon}</span>
                </figure>

                <h4 className="text-[18px] laptop:text-[22px] tablet:text-[20px] font-semibold">
                  {detail.title}
                </h4>
              </div>

              <p className="text-[12px] laptop:text-[14px] tablet:text-[13px] text-[#4E545F]">
                {detail.description}
              </p>
            </div>

            <div className="border-2 border-r-0 border-t-0 border-b-0 border-[#D03531]/10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flow;