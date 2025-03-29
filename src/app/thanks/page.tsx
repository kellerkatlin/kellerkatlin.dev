"use client";

export default function Thanks() {
  return (
    <div className="container mx-auto w-screen h-screen flex flex-col items-center justify-center text-center">
      <div className="text-2xl font-bold mb-4">
        Thank you for your message, I will get back to you as soon as possible.
      </div>
      <button
        className="bg-accent text-white px-4 py-2 rounded-md mt-4"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
}
