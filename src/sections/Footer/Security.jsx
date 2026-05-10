import { useNavigate } from "react-router-dom";
import CancelButton from "../../ui/CancelButton";

function Security() {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={() => navigate(-1)}
    >
      <div className="bg-white shadow-md p-10 rounded-md w-[320px] laptop:w-[400px] tablet:w-[500px] h-auto relative">
        <CancelButton />

        <div className="space-y-3">
          <h4 className="text-[18px] tablet:text-[20px] laptop:text-[22px] font-semibold text-center">
            Security and Compliance
          </h4>
          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            Quick Artisan is committed to keeping your data safe and secure. We
            use standard security measures to protect personal information,
            transactions, and user activity on the platform.
          </p>
          <p className="text-[14px] laptop:text-[17px] tablet:text-[16px]">
            Access to data is limited and only used to provide and improve our
            services. All payments are processed through secure third-party
            systems to ensure safety and reliability.
          </p>

          <p className="text-[14px] laptop:text-[17px]">
            We follow applicable data protection practices to maintain user
            privacy and comply with industry standards. Regular updates are made
            to strengthen security and protect against unauthorized access.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Security;
