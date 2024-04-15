import React, { useState } from "react";
import "./App.css";

function App() {
  const [itemss, setItemss] = useState([]);

  const [input, setInput] = useState("");

  const dataFetch = () => {
    fetch("https://api.github.com/search/repositories?q=react")
      .then((response) => response.json())
      .then((data) => {
        setItemss(data.items);
      });
  };
  return (
    <>
      <h1>Repositories</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={dataFetch}>Search</button>

      <table>
        <tbody>
          <tr>
            <th> Name </th>

            <th>Url</th>
          </tr>

          {itemss.map((book) => (
            <tr key={book.id}>
              <td>{book.full_name}</td>

              <td>
                <a href={book.html_url}>{book.html_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
