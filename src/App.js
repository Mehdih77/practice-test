function App({ name }) {
  return (
    <div>
      <p>{name ? `Hello ${name}` : "Hello"}</p>
    </div>
  );
}

export default App;
