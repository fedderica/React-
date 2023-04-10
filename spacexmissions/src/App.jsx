import { useState, useEffect } from 'react';
import * as API from "./services/launches";

export function App() {
  const [launches, setLaunches] = useState ([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
    <div> Hola Mundo </div>
    <div> Pepe </div>
    </>
  );
  
}


