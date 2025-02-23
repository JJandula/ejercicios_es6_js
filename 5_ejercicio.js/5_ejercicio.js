

/* Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */



const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const buscadorStreamers = (list) => {

    const input = document.querySelector("input")
    input.addEventListener("keypress", (ev) => {
        if (ev.key === "Enter") {
        const result = ev.target.value.toLowerCase();

        const filtedList = streamers.filter((streamer) =>
          streamer.name.toLowerCase().includes(result)
        );
  
        const mappedList = filtedList.map((streamer) => streamer.name);
  
        if (mappedList.length === 0) {
          console.log("No se ha encontrado ningún Streamer que incluya", "(",result.toUpperCase(),")");
        } else {
            console.log(mappedList);
        }
      }
    });
}

buscadorStreamers(streamers)