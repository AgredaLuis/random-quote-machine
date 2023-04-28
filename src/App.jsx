import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";

function App() {
  const [author, setAuthor] = useState("Author name");
  const [quote, setQuote] = useState("Quote text goes here");

  const fetchQoute = async () => {
    try {
      const response = await $.getJSON("https://type.fit/api/quotes");
      const randomQoute = response[Math.floor(Math.random() * response.length)];
      setAuthor(randomQoute.author);
      setQuote(randomQoute.text);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNewQoute = () => {
    fetchQoute();
  };

  useEffect(() => {
    fetchQoute();
  }, []);

  /* useEffect(() => {
    axios.get('https://type.fit/api/quotes')
    .then(response => {
      const data = response.data
      console.log(data[1].text , data[1].author )
    })
    .catch(error => console.log(error))
  },[]) */

  return (
    <div id="wrapper" className="container">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h1 className="text-capitalize title">Quote Generator</h1>
        </div>
      </div>
      <div id="quote-box" className="row mt-5">
        <div className="col-8 mx-auto">
          <div className="card text-center">
            <div className="card-body">
              <h2 id="text" className="card-text">
                <i className="bi bi-quote"></i>
                {quote}
              </h2>
              <p id="author" className="card-text text-end ">
                - {author}
              </p>
            </div>
            <div className="card-body d-flex justify-content-between">
              <a
                id="tweet-quote"
                href="twitter.com/intent/tweet"
                className="btn btn-primary"
                title="Tweet this quote!"
                target="_top"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <button
                id="new-quote"
                className="btn btn-secondary rounded"
                onClick={handleNewQoute}
              >
                Generate new quote
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <p>
          Random Qoute Machine <br /> Luis Agreda
        </p>
      </div>
    </div>
  );
}

export default App;
