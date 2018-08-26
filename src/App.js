import Quotebox from "./Quotebox";

const App = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <span className="navbar-brand fw-bold">
              <img
                src="/favicon.svg"
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Random Quote Machine
            </span>
          </div>
        </nav>
      </header>

      <Quotebox />

      <footer className="text-white text-center mt-2">
        By{" "}
        <a
          className="text-white text-decoration-none fw-bold"
          href="https://github.com/harrmitch"
        >
          harrmitch
        </a>
      </footer>
    </>
  );
};

export default App;
