import { useState } from "react";
import "../css/FeedbackForm.css";

type FormData = {
  name: string;
  email: string;
  feedbackType: string;
  message: string;
  subscribe: boolean;
  terms: boolean;
};

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    feedbackType: "general",
    message: "",
    subscribe: true,
    terms: false,
  });

  const feedbackOptions = [
    { value: "general", label: "General Feedback" },
    { value: "bug", label: "Bug Report" },
    { value: "feature", label: "Feature Request" },
    { value: "complaint", label: "Complaint" },
    { value: "praise", label: "Praise" },
  ];

  // ✅ ONE UNIVERSAL HANDLER (MEMORY CODE)
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("You must agree to the terms");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you for your feedback!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      feedbackType: "general",
      message: "",
      subscribe: true,
      terms: false,
    });
  };

  return (
    <div className="feedback-container">
      <h1>User Feedback Form</h1>

      <form onSubmit={handleSubmit} className="feedback-form">
        {/* TEXT */}
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* SELECT */}
        <select
          name="feedbackType"
          value={formData.feedbackType}
          onChange={handleChange}
        >
          {feedbackOptions.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* TEXTAREA */}
        <textarea
          name="message"
          placeholder="Your feedback"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
        <small>Characters: {formData.message.length}</small>

        {/* CHECKBOXES */}
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>

        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          Agree to terms
        </label>

        {/* BUTTONS */}
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {/* LIVE PREVIEW */}
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default FeedbackForm;
