
const Home = () => {

/*   const env = Deno.env.get("yema");

  if (!env) {
    throw console.error(".env IS NOT readed"); 
  } else {
    console.log(".env IS readed and is " + env)
  } */
  return (
    <div>
      <h1>Welcome to my DenoFresh projects</h1>
      <h2><a href="./Rick&Morty/characters">Rick & Morty API</a></h2>
      <h2><a href="./saludar">Greet</a></h2>
      <h2><a href="./button">Buttons</a></h2>
      <h2><a href="./contacts">Contacts</a></h2>
      <h2><a href="./form">Formulario</a></h2>
      <h2><a href="./client-ricky">Client-ricky</a></h2>
      <h2><a href="./signals-ricky">Signals-ricky</a></h2>
      <h2><a href="./signals">Signals</a></h2>
      <h2><a href="./cookies">Cookies</a></h2>



      {/* <h2><a href="./greet">Dynamic Route</a></h2> */}

    </div>
  )
}



export default Home;
 