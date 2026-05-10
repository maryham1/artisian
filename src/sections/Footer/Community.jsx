import { useNavigate } from "react-router-dom";
import CancelButton from "../../ui/CancelButton";

function Community() {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={() => navigate(-1)}
    >
      <div className="bg-white shadow-md p-10 rounded-md w-[320px] laptop:w-[400px] tablet:w-[500px] h-auto relative">
        <CancelButton />

        <div className="space-y-3">
          <h4 className="text-[18px] laptop:text-[22px] tablet:text-[20px] font-semibold text-center">
            Community Rules
          </h4>
          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            Quick Artisan is built on trust, respect, and professionalism
            between users and artisans.
          </p>
          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            All users are expected to communicate respectfully and treat each
            other fairly. Any form of harassment, misuse of the platform, or
            inappropriate behavior is not allowed.
          </p>

          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            Artisans must deliver services honestly, safely, and according to
            agreed terms. Users should provide accurate details when booking
            services.
          </p>
          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            We encourage honest reviews to help maintain quality and trust
            within the community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Community;
