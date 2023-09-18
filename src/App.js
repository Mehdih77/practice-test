function App() {
  return (
    <form>
      <h1>Fruit form</h1>
      <label htmlFor="input-example">First name</label>
      <input type="text" id="input-example" defaultValue="Luca" />
      <label htmlFor="textarea-example">Description</label>
      <textarea
        id="textarea-example"
        defaultValue={"An example description here."}
      />
      <label htmlFor="single-select-example">Fruit</label>
      <select id="single-select-example">
        <option value>Select a fruit...</option>
        <option value="banana">Banana</option>
        <option value="ananas">Ananas</option>
        <option value="avocado">Avocado</option>
      </select>
      <label htmlFor="multiple-select-example">Fruits</label>
      <select id="multiple-select-example" multiple>
        <option value>Select a fruit...</option>
        <option value="banana">Banana</option>
        <option value="ananas">Ananas</option>
        <option value="avocado">Avocado</option>
      </select>
      <button>submit</button>
    </form>
  );
}
export default App;
