function handleFormSubmit(event) {
  console.log("Form Submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
