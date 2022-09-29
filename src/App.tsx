import { useEffect, useState } from "react";

function App() {
  const [dolar, setDolar] = useState(0);

  async function fetch_dolar() {
    const URL = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';
    let response = await fetch(URL);
  
    if (response.ok) { 
      let json = await response.json();
      setDolar(json.USDBRL.bid);      
    } else {
      alert("HTTP-Error: " + response.status);
    }    
  }

  useEffect(() => {
    const dolar = fetch_dolar();
    console.log(dolar);
      
  }, [])


  return (
    <table>
      <tbody>
        <td>
          <td>{dolar}</td>
        </td>
      </tbody>
    </table>
  );
}

export default App
