import { useNavigate } from "react-router-dom";
import CancelButton from "../../ui/CancelButton";

function Policy() {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={() => navigate(-1)}
    >
      <div className="bg-white shadow-md p-10 rounded-md w-[400px] h-auto relative">
        <CancelButton />

        <div className="space-y-3">
          <h4 className="text-[18px] laptop:text-[22px] font-semibold text-center">
            Privacy Policy
          </h4>
          <p className="text-[14px] laptop:text-[17px]">
            We respect your privacy and are committed to protecting your
            personal information.
          </p>
          <p className="text-[14px] laptop:text-[17px]">
            We collect basic details like your name, contact information, and
            location to help connect you with trusted artisans and provide a
            smooth service experience.
          </p>
          <p className="text-[14px] laptop:text-[17px]">
            Your data is used only to improve our services, process bookings,
            and support your interactions on the platform. We do not sell your
            information to third parties.
          </p>
          <p className="text-[14px] laptop:text-[17px]">
            We take appropriate measures to keep your data secure and ensure
            your information is handled safely.
          </p>
          <p className="text-[14px] laptop:text-[17px]">
            By using our platform, you agree to the collection and use of your
            information as outlined here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Policy;
