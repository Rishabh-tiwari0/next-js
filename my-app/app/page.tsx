import Image from "next/image";
import ContactForm from "./components/ContactForm";
import SuccessPopup from "./components/SuccessPopup";

export default function Home() {
  return (
    <>
      <SuccessPopup />
      <ContactForm />
    </>
  );
}
