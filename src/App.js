import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("loading...");

  useEffect(() => {
    (async function () {
      await new Promise((resolveFuncForPromise) => {
        const timeoutToken = setTimeout(() => {
          clearTimeout(timeoutToken);
          resolveFuncForPromise();
        }, 6000);
      });
      const { text } = await (await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
