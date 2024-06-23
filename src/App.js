import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="form">
        <h1 className="m-4">Let's Generate your resume!</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
