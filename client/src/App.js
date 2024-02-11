import { useEffect } from "react";

function App() {
  useEffect(()=>{
    fetch('/api/hello').then((res)=> res.json()).then((data)=> {
      console.log(data);
    })
  }, []);
  return (
    <div className="App">
      <h1>Hellow World</h1>
    </div>
  );
}

export default App;
