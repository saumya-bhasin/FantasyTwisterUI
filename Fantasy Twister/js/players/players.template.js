function playerListTemplate() {
    return `
            <div id="data" class="container text-center">
                <p>&nbsp;</p>
                <h2>Players</h2>
                <nav aria-label="Page navigation">
                  <ul  id="alpha_list" class="pagination">
                  </ul>
                </nav>
                <p>&nbsp;</p> 
                <ul id="player_list" class="media-list"></ul>
            </div>
    `
}

function initialListTemplate(initial) {
    return `
        <li><a onclick="navToPlayersPage('${initial}')" >${initial}</a></li>
    `
}

function playersTemplate(player) {
    //TODO
    const playerUrl = `http://localhost:5000/api/player/${player.player_id}`;
    const teamUrl = `http://localhost:5000/api/team/${player.team_id}`;
    const imageAlt = `${player.player_name}'s profile picture`;
    // ${topPlayerTemplate(player)}
    return `
            <div class="col-sm-3">
			</div>
            <li class="media">
                <div class="media-left">
                    <a onclick=onclickPlayerName(this) data-url=${playerUrl}>
                        <img class="media-object" src=${player.picture} alt=${imageAlt}>
                    </a>
                </div>
                <div class="media-body">
                    <a onclick=onclickPlayerName(this) data-url=${playerUrl}>
                        <h4 class="media-heading">${player.player_name}</h4>
                    </a>
                    <a onclick=onclickTeamName(this) data-url=${teamUrl}>${player.team_name}</a>
                </div>
            </li>
    `
}