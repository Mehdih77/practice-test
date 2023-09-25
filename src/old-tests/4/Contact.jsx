import { useState } from "react";

export default function Contact({ onSave }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ email });
    setEmail("");
    setIsSubmitted(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p role="alert">Success</p>}
    </div>
  );
}
