import { useState } from "react";
import contactUseCase from "../applications/ContactUseCase";
import { extractAxiosErrorMessage } from "@/core/services/axiosError";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("idle");
    try {
      await contactUseCase({ name, email, message });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(extractAxiosErrorMessage(error));
    }
  }
  return (
    <div className="bg-white rounded-xl p-10 shadow-md">
      <h3 className="text-2xl font-bold mb-3">Send a Message</h3>
      <p className="text-gray-600 mb-6">
        Fill out the form below and I&apos;ll get back to you within 24 hours.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-3 border rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Send Message
        </button>
        {status === "success" && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {status === "error" && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}
