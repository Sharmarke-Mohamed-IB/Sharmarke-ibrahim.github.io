async function getJoke() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();

    if (data.type === "single") {
        document.getElementById("joke").innerText = data.joke;
    } else {
        document.getElementById("joke").innerText = `${data.setup} \n\n ${data.delivery}`;
    }
}
