import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      username: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your full name</label>
      <br />
      <input
        name="fullName"
        type="text"
        id="name"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="username">Enter username</label>
      <br />
      <input
        name="username"
        type="text"
        id="username"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
