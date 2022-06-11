const SegundoComponente = () => {

    const handleLogin = (e) => {
        e.preventDefault() //Necessário apenas se o input for tipo "submit"
        console.log("login")
    }

  return (
    <form>
        <label>
            Email: 
            <input type="text" placeholder='digite seu email'/>
        </label>
        <label style={{display: 'block'}}>
            Senha: 
            <input type="password" placeholder='digite sua senha'/>
        </label>
        {/* <input type="button" value="Entrar" onClick={() => console.log("ON CLICK")} /> */}
        <input type="submit" value="Entrar" onClick={handleLogin} />

    </form>
  )
}

export default SegundoComponente


