import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <span class="navbar-brand fw-bold">
              <img
                src="src/assets/favicon.svg"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
              Random Quote Machine
            </span>
          </div>
        </nav>
      </header>

      <footer class="text-white text-center mt-2">
        By{" "}
        <a
          class="text-white text-decoration-none fw-bold"
          href="https://github.com/harrmitch"
        >
          harrmitch
        </a>
      </footer>
    </>
  );
};

export default App;
