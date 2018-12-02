function predictionTemplate() {
    return `
            <div id="data" class="container text-center">
                <h1>Predictions</h1>
                <p>&nbsp;</p>
                <ul id="prediction_list" class="media-list">
				</ul>
					<div class="row">
						<p id="champion"></p>
					</div>
					&nbsp;
					<div class="row">
						<div class="col-sm-6">
							<h4>East team to playoffs</h3>
							<div class="thumbnail">
								<p id="east_playoffs"></p>
							</div>
						</div>
						<div class="col-sm-6">
							<h4>West team to playoffs</h3>
							<div class="thumbnail">
								<p id="west_playoffs"></p>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<p id="MVP"></p>
						</div>
						<div class="col-sm-6">
							<p id="MIP"></p>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6 col-sm-offset-3">
						<p id="coach"></p>
						</div>					
					</div>
            </div>
    `
}

function displayChampion(champion1,champion2,champion3) {
	
	const team1Url = `http://localhost:5000/api/team/${champion1.team_id}`;
	const team2Url = `http://localhost:5000/api/team/${champion2.team_id}`;
	const team3Url = `http://localhost:5000/api/team/${champion3.team_id}`;

	
    return `
            <div class="col-sm-4">
				<h4>East Champion</h4>
					<div class="thumbnail">
						<img src=${champion1.logo}>
						<div class="caption">
							<a onclick=onclickTeamName(this) data-url=${team1Url}>
								<p>${champion1.team_name}</p>
							</a>
						</div>
					</div>
			</div>
			
			<div class="col-sm-4">
				<h4>West Champion</h4>
					<div class="thumbnail">
						<img src=${champion2.logo}>
						<div class="caption">
							<a onclick=onclickTeamName(this) data-url=${team2Url}>
								<p>${champion2.team_name}</p>
							</a>
						</div>
					</div>
			</div>
			<div class="col-sm-4">
				<h4>Final Champion</h4>
					<div class="thumbnail">
						<img src=${champion3.logo}>
						<div class="caption">
							<a onclick=onclickTeamName(this) data-url=${team3Url}>
								<p>${champion3.team_name}</p>
							</a>
						</div>
					</div>
			</div>
    `
}

function displayMVP(player){
    const playerUrl = `http://localhost:5000/api/player/${player.player_id}`;

	return `
				<h3>MVP</h3>
					<div class="thumbnail">
						<!--<img src=${player.logo}>-->
						<p>#player pic</p>
						<div class="caption text-center">
							<a onclick=onclickPlayerName(this) data-url=${playerUrl}>
								<p>${player.player_name}</p>
							</a>
							<p>points: ${player.prediction.statistics.points}</p>
							<p>rebounds: ${player.prediction.statistics.rebounds}</p>
							<p>assists: ${player.prediction.statistics.assists}</p>
							<p>blocks: ${player.prediction.statistics.blocks}</p>
							<p>steals: ${player.prediction.statistics.steals}</p>
							<p>turnovers: ${player.prediction.statistics.turnovers}</p>
						</div>
					</div>
	`;
	
}

function displayMIP(player){
	 const playerUrl = `http://localhost:5000/api/player/${player.player_id}`;

	return `
				<h3>MIP</h3>
					<div class="thumbnail">
						<!--<img src=${player.logo}>-->
						<p>#player pic</p>
						<div class="caption text-center">
							<a onclick=onclickPlayerName(this) data-url=${playerUrl}>
								<p>${player.player_name}</p>
							</a>
							<p>points: ${player.prediction.statistics.points}</p>
							<p>rebounds: ${player.prediction.statistics.rebounds}</p>
							<p>assists: ${player.prediction.statistics.assists}</p>
							<p>blocks: ${player.prediction.statistics.blocks}</p>
							<p>steals: ${player.prediction.statistics.steals}</p>
							<p>turnovers: ${player.prediction.statistics.turnovers}</p>
						</div>
					</div>
		`;
	
}

function displaycoach(coach){
	const team1Url = `http://localhost:5000/api/team/${coach.team_id}`;

	return `
				<h3>Coach of the Year</h3>
					<div class="thumbnail">
						<img src=${coach.coach_photo}>
						<div class="caption text-center">
							<h4>${coach.coach_name}</h4>
							<a onclick=onclickTeamName(this) data-url=${team1Url}>
								<p>${coach.team_name}</p>
							</a>
						</div>
					</div>
        `;
}

function displayTeam(team,name){
	 const teamUrl = `http://localhost:5000/api/team/${team}`;

	return `		
						<div class="caption text-center">
							<a onclick=onclickTeamName(this) data-url=${teamUrl}>
								<p>${name}</p>
							</a>
						</div>
        `;
	
}


function predictionListDataTemplate(champion) {	
	    return `
				<li class="media">
					<div class="media-left">
						<p>${champion.logo}</p>
					</div>
					<div class="media-body">
						<p>${champion.team_name}</p>
					</div>
				</li>
        `;
}