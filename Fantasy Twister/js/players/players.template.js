function playerListTemplate(player) {
    const playerUrl = `http://localhost:5000/api/player/${player.player_id}`;
    const teamUrl = `http://localhost:5000/api/team/${player.team_id}`;
    const imageAlt = `${player.player_name}'s profile picture"`;

    return `
			<li class="media my-4">
				<a href=${playerUrl}>
					<img class="mr-3" src=${player.picture} alt=${imageAlt}>
				</a>
				<div class="media-body">
				  	<a onclick=onclickPlayerName(this) data-url=${playerUrl}>
				  		<h5 class="mt-0 mb-1">${player.player_name}</h5>
				  	</a>
				  	<a href=${teamUrl}>${player.team_name}</a>
				</div>
			</li>
		`;
}