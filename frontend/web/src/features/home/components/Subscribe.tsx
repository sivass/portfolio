"use client";

import { useState } from "react";
import subscribeUseCase from "../applications/SubscribeUseCase";
import { extractAxiosErrorMessage } from "@/core/services/axiosError";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubscribe(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");

    try {
      // Call the subscribe use case here
      await subscribeUseCase({ email });
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(extractAxiosErrorMessage(error));
    }
  }
  return (
    <div className="bg-blue-600/10  rounded-xl p-10 shadow-lg backdrop-blur-sm">
      {/* Title with Icon */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white p-3 rounded-sm flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="w-6 h-6 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 7.5l-9.75 6-9.75-6m0 0L12 3l9.75 4.5m-19.5 0v9a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-9"
            />
          </svg>
        </div>

        <h3 className="text-2xl font-bold ">Stay Updated</h3>
      </div>

      <p className=" mb-4">
        Subscribe to my newsletter for tech updates & tutorials.
      </p>

      {/* Ordered List */}
      <ul className="pl-6 space-y-1 mb-6 list-disc">
        <li>Full-Stack Development Tutorials</li>
        <li>React & Node.js Best Practices</li>
      </ul>

      {/* Subscribe Form */}
      <form className="space-y-2 py-10" onSubmit={handleSubscribe}>
        <div className="relative w-full">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 pr-32 bg-white text-black border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Button placed inside the input */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </div>

        <p className="text-xs text-gray-400">No spam. Unsubscribe anytime</p>
        {status === "success" && (
          <p className="text-green-500">Subscribed successfully!</p>
        )}
        {status === "error" && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}
