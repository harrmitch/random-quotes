import { useEffect, useState } from "react";
import randomColor from "randomcolor";

const Quotebox = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [color, setColor] = useState("grey");

  const getQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      if (res.ok) {
        return res.json();
      }
      return new Error("Error encountered!");
    } catch (err) {
      return err;
    }
  };

  const getNewQuote = async () => {
    try {
      setCurrentQuote(await getQuote());
      setColor(randomColor({ luminosity: "dark" }));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  useEffect(
    () => document.documentElement.style.setProperty("--color", color),
    [color]
  );

  return (
    <>
      {currentQuote && (
        <div className="container bg-white p-5 mt-5 rounded-2" id="quote-box">
          <section>
            <figure>
              <blockquote className="text-center">
                <p style={{ color: color }} id="text" className="fs-3">
                  <i className="bi bi-quote" />
                  {currentQuote.content}
                </p>
              </blockquote>
              <figcaption
                style={{ color: color }}
                className="fs-5 text-end fst-italic"
                id="author"
              >
                - {currentQuote.author}
              </figcaption>
            </figure>
          </section>

          <section>
            <div className="d-inline pt-3">
              <a
                style={{ backgroundColor: color }}
                className="btn text-white"
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${currentQuote.content}" ${currentQuote.author}`}
                target="_blank"
              >
                <i className="bi bi-twitter" />
              </a>
              <a
                style={{ backgroundColor: color }}
                className="btn text-white float-end"
                id="new-quote"
                onClick={getNewQuote}
              >
                New quote
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Quotebox;
/* :global(body) {
    background-color: var(--color);
  } */
