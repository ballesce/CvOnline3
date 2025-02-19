import { MdEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section className="mt-10 w-full max-w-3xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">Kontak</h3>
      <div className="flex flex-col items-center gap-4">
        <p className="flex items-center gap-2">
          <MdEmail size={24} /> 
          <span>Email: <a href="mailto:reval@example.com" className="text-gray-300 underline">reval@example.com</a></span>
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineWhatsApp size={24} /> 
          <span>WhatsApp: <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline">+62 812-3456-789</a></span>
        </p>
        <p className="flex items-center gap-2">
          <FaGithub size={24} /> 
          <span>LinkedIn: <a href="https://linkedin.com/in/reval" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline">linkedin.com/in/reval</a></span>
        </p>
      </div>
    </section>
  );
}
