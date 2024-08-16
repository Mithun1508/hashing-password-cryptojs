import "./styles.css";
import React, { useState } from "react";
import { SHA256 } from "crypto-js";

export default function App() {
  const [password, setPassword] = useState("");
  const p = "5981eda53eeb4100828394dd43631aede8015e58311c5caaa3f5c67598a327d5";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document.getElementsByName("password")[0].value);
    console.log("Default password " + password);
    let encryption = SHA256(password).toString();
    console.log("Hashing password " + encryption);
    if (p === encryption) {
      console.log("OK");
    } else {
      console.log("nax");
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
