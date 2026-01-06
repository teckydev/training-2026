import { useState } from "react";
import type { FormData } from "../types/formdata.types";

const NestedForm = () => {
  const [form, setForm] = useState<FormData>({
    personal: {
      name: "",
      email: "",
      age: "",
      gender: "",
    },
    preferences: {
      agree: false,
      skills: [],
      feedback: "",
    },
  });

  // 🔑 UNIVERSAL HANDLER
 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target;

  // ✅ MULTIPLE CHECKBOX (skills)
  if (type === "checkbox" && name === "skills") {
    const checked = (e.target as HTMLInputElement).checked;

    setForm(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        skills: checked
          ? [...prev.preferences.skills, value]
          : prev.preferences.skills.filter(v => v !== value),
      },
    }));
    return;
  }

  // ✅ SINGLE CHECKBOX (agree)
  if (type === "checkbox") {
    const checked = (e.target as HTMLInputElement).checked;

    setForm(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [name]: checked,
      },
    }));
    return;
  }

  // ✅ OTHER INPUTS
  setForm(prev => ({
    ...prev,
    personal: {
      ...prev.personal,
      [name]: value,
    },
  }));
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Nested Form</h3>

      {/* TEXT */}
      <input
        name="name"
        placeholder="Name"
        value={form.personal.name}
        onChange={handleChange}
      />

      {/* EMAIL */}
      <input
        name="email"
        placeholder="Email"
        value={form.personal.email}
        onChange={handleChange}
      />

      {/* NUMBER */}
      <input
        name="age"
        placeholder="Age"
        value={form.personal.age}
        onChange={handleChange}
      />

      {/* RADIO */}
      <p>Gender</p>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={form.personal.gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={form.personal.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>

      {/* SINGLE CHECKBOX */}
      <label>
        <input
          type="checkbox"
          name="agree"
          checked={form.preferences.agree}
          onChange={handleChange}
        />
        Agree to terms
      </label>

      {/* MULTIPLE CHECKBOX */}
      <p>Skills</p>
      {["React", "Node", "Angular"].map(skill => (
        <label key={skill}>
          <input
            type="checkbox"
            name="skills"
            value={skill}
            checked={form.preferences.skills.includes(skill)}
            onChange={handleChange}
          />
          {skill}
        </label>
      ))}

      {/* TEXTAREA */}
      <textarea
        name="feedback"
        placeholder="Feedback"
        value={form.preferences.feedback}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default NestedForm;