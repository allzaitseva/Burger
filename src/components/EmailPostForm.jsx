import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://backend-url/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus("Subscribed!");
        setEmail("");
      } else {
        setStatus("Error. Try again.");
      }
    } catch {
      setStatus("Error. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        className="mt-10 lg:mt-13.5 w-[250px] h-[40px] -ml-51 bg-gray-50 border border-gray-300 text-orange-700/60 text-sm rounded-lg p-2.5"
        placeholder="Enter your e-mail..."
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-orange-500 text-white rounded-lg">Subscribe</button>
      {status && <div className="mt-2 text-white">{status}</div>}
    </form>
  );
}