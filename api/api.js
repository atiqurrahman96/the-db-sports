const searchButton = () => {
    document.getElementById('container').innerHTML = "";
    const inputField = document.getElementById('input-tex');
    const inputText = inputField.value;
    inputField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputText}
    `;
    fetch(url)
        .then(response => response.json())
        .then(data => showPlayers(data.player))


}
const showPlayers = players => {
    const container = document.getElementById('container');
    for (const player of players) {
        console.log(player.idPlayer);
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
         <img class="fluid p-4 rounded" src="${player.strThumb}" alt="">
        </div>
        <div>
        <h1>Name:${player.strPlayer}</h1>
        <button  onclick="showDetail('${player.idPlayer}')" class="bg-success rounded fw-bold">Details</button>
        </div>
        `;

        container.appendChild(div);
    }
}
const showDetail = info => {
    document.getElementById('container').innerHTML = "";
    console.log(info);
    const url = `
    https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}

    `;
    fetch(url)
        .then(response => response.json())
        .then(data => display(data.players[0]))
}

const display = id => {
    const displayContainer = document.getElementById('container');
    console.log(id)
    const detailDiv = document.createElement('div');
    detailDiv.innerHTML = `
    <div>
            <img src="${id.strThumb}" alt="">
        </div>

    <h1>Name:${id.strPlayer}</h1>
    <h1 class='text-success'>Country:${id.strNationality}</h1>
    <h1>description:${id.strDescriptionDE}</h1>
    `;
    displayContainer.appendChild(detailDiv);
}

