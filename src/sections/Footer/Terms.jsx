import { useNavigate } from "react-router-dom";
import CancelButton from "../../ui/CancelButton";

function Terms() {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={() => navigate(-1)}
    >
      <div className="bg-white shadow-md p-10 rounded-md w-[320px] laptop:w-[400px] tablet:w-[500px] h-auto relative">
        <CancelButton />

        <div className="space-y-3">
          <h4 className="text-[14px] laptop:text-[22px] tablet:text-[20px] font-semibold text-center">
            Terms and Conditions
          </h4>
          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            By using Quick Artisan, you agree to use the platform responsibly
            and for its intended purpose of booking and providing home services.
          </p>
          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            All users must provide accurate information when creating an
            account. Artisans are expected to deliver services professionally
            and meet agreed standards.
          </p>
          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            Your data is used only to improve our services, process bookings,
            and support your interactions on the platform. We do not sell your
            information to third parties.
          </p>
          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            Bookings, cancellations, and payments must follow the rules outlined
            within the app. We are not responsible for disputes between users
            and artisans, but we aim to help resolve issues fairly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
