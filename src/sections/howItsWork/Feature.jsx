import AppInfo from "./AppInfo";

const steps = [
  {
    id: "s1",
    title: "Download the Application",
    description:
      "Download our mobile application and get instant access to trusted home services anytime, anywhere.",
  },
  {
    id: "s2",
    title: "Sign Up",
    description:
      "Create your account in just a few steps and start connecting with skilled artisans near you.",
  },
  {
    id: "s3",
    title: "Explore Features",
    description:
      "Discover powerful features like easy booking, secure payments, and reliable support all in one place.",
  },
];

function Feature() {
  return (
    <section className="bg-[#F4F4F6] px-5 py-10 laptop:px-15 laptop:py-10 w-full tablet:px-10 tablet-py-10">
      <div className="flex flex-col gap-5 items-center ">
        <div>
          <h4 className="text-[26px] laptop:text-[36px] tablet:text-[30px] font-semibold text-black text-center">
            How it work
          </h4>
          <p className="text-[16px] laptop:text-[22px] tablet:text-[20px] text-[#4E545F] text-center">
            Follow a few simple steps to connect with trusted artisans.
          </p>
        </div>
        <div className="w-full flex flex-col gap-15 tablet:gap-10 laptop:flex-row laptop:justify-between">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`
        flex flex-col
        ${i === 1 ? "items-end" : "items-start"}
        laptop:items-center
        relative
      `}
            >
              {/* CARD */}
              <div className="bg-white p-6  w-[290px] max-w-[300px] laptop:w-[350px] tablet:w-[320px] tablet:max-w-[320px] rounded-md shadow-md space-y-2">
                <h5 className="font-semibold text-black text-center text-[20px]">
                  {step.title}
                </h5>

                <p className="text-[14px] text-[#4E545F] border-[3px] border-t-0 border-b-0 border-r-0 p-3 border-[#D03531] laptop:border-none">
                  {step.description}
                </p>
              </div>

              {/* CONNECTORS */}
              {i === 0 && (
                <img
                  src="/Quick-image/company/right-Connector.png"
                  className="block laptop:hidden w-[60px] max-w-[100px] tablet:w-[100px] -mt-18 ml-70 self-center"
                />
              )}

              {i === 1 && (
                <img
                  src="/Quick-image/company/left-connector.png"
                  className="block laptop:hidden w-[60px] max-w-[100px] tablet:w-[100px] -mt-18 -ml-70 self-center"
                />
              )}
            </div>
          ))}
        </div>
        <AppInfo />
      </div>
    </section>
  );
}

export default Feature;
