const Estado = () => {
    let nome = "Carlos Silva";
  
    return (
      <div>
        <h1>{nome}</h1>
        <input type="button" value="Mudar Nome" onClick={() => console.log(nome)}/>
      </div>
    )
  }
  
  export default Estado