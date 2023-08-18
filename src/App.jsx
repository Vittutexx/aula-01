
export default function App() {
  var nome = "Viturino";  
  const time =[
    "Corinthians",
    "São Paulo",
    "Pameiras",
    "Coritiba"
  ]

  return(
      <>
        <h1>React + Vite</h1>

        <h2>RM552228</h2>

          <p>Melhor programador: {nome}</p>
        <ul>

          {time.map((item,key) =>
            (<li key ={key}>{item}</li>)    
           )}
        </ul>



      </>
    )
}
  