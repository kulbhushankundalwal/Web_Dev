function hello() {
  console.log("Hello");
}

export default function Button() {
  return (
    <div>
      <button onClick={hello}>Click me!</button>
    </div>
  );
}
