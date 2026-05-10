import { useQuery } from "@tanstack/react-query";
import { getFAQ } from "../../Services/faqApi";
import { useState } from "react";

function Faq() {
  const [showAnswer, setShowAnswer] = useState(null);
  const { isLoading, data: faqs } = useQuery({
    queryKey: ["faq"],
    queryFn: getFAQ,
  });
  console.log(faqs);
  return (
    <section className="bg-[#F4F4F6]   px-5 py-10 pt-10 laptop:px-15 laptop:py-10 laptop:pt-30 pb-0 w-full">
      <div className="flex flex-col items-center ">
        <div className=" w-auto laptop: w-[600px] space-y-5 ">
          <figure className="flex p-2 justify-between border-2 border-l-0 border-r-0 border-[#a6a7a9]">
            <h4 className="text-[20px] laptop:text-[30px] font-semibold text-black">
              Faq
            </h4>
            <button className="font-semibold text-[18px]">x</button>
          </figure>
          <figure>
            <p className="text-[15px] laptop::text-[20px] text-[#a6a7a9] border-2 border-l-0 border-r-0 border-t-0 p-0 pb-2 border-[#a6a7a9]">
              Find answers to common questions about our services.
            </p>
          </figure>
          {isLoading && <p>Loading</p>}
          <ul>
            {faqs?.map((faq, index) => (
              <figure className="flex justify-between border-[1px] p-2  border-l-0 border-r-0 border-t-0  border-[#a6a7a9]">
                <div>
                  <li className="text-[14px] laptop:text-[18px]">
                    {index + 1}. {faq.question}
                  </li>
                  {showAnswer === index && (
                    <li
                      className=" p-2 pl-4 text-[13px] laptop:text-[16px]"
                      key={faq.id}
                    >
                      {faq.answer}
                    </li>
                  )}
                </div>
                <button
                  className="text-[18px] font-semibold cursor-pointer"
                  onClick={() =>
                    setShowAnswer(showAnswer === index ? null : index)
                  }
                >
                  {showAnswer === index ? "-" : "+"}
                </button>
              </figure>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;
