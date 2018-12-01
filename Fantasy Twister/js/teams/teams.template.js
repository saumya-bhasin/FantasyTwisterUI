function teamListTemplate() {
    return `
            <div id="data" class="container text-center">
                <h2>Teams</h2>
                <p>&nbsp;</p>
                <ul id="team_list" class="media-list"></ul>
            </div>
    `
}
//
// function playerListDataTemplate(player) {
//     const playerUrl = `http://localhost:5000/api/player/${player.player_id}`;
//     const teamUrl = `http://localhost:5000/api/team/${player.team_id}`;
//     //TODO: alt text cut off
//     const imageAlt = `${player.player_name}'s profile picture"`;
//     return `
// 			<li class="media">
// 			    <div class="media-left">
//                     <a onclick=onclickPlayerName(this) data-url=${playerUrl}>
//                         <img class="media-object" src=${player.picture} alt=${imageAlt}>
//                     </a>
//                 </div>
//                 <div class="media-body">
//                     <a onclick=onclickPlayerName(this) data-url=${playerUrl}>
//                         <h5 class="media-heading">${player.player_name}</h5>
//                     </a>
//                     <a onclick=onclickTeamName(this) data-url=${teamUrl}>${player.team_name}</a>
//                 </div>
// 			</li>
// 		`;
// }