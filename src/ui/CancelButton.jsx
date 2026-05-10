import { useNavigate } from "react-router-dom";

function CancelButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-6 right-8 text-xl font-semibold"
    >
      ✕
    </button>
  );
}

export default CancelButton;
