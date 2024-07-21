import { CiCircleCheck } from "react-icons/ci";

const SuccessPopup = () => {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 sm:top-6 text-white px-4 py-5 rounded-lg min-w-[300px]"
      style={{ background: "hsl(187, 24%, 22%)", display: "none" }}
      id="successModal"
    >
      <h1 className="flex gap-2 font-bold items-center mb-3">
        <CiCircleCheck className="text-[24px]" />
        <span> Message Sent!</span>
      </h1>
      <p className="text-[12px]">
        {`Thanks for completing the form. We'll be in touch soon!`}
      </p>
    </div>
  );
};

export default SuccessPopup;
