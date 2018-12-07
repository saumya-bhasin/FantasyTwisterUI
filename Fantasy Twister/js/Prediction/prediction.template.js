function predictionTemplate() {
    return `
            <div id="data" class="container text-center">
                <p>&nbsp;</p>
                <h1>Predictions</h1>
                <ul id="prediction_list" class="media-list">
				</ul>
					<div class="row">
						<div class="col-sm-3">
						</div>
						<div class="col-sm-6">
							<p id="MVP"></p>
						</div>
						<div class="col-sm-3">
						</div>
					</div>
					<div class="row">
						<p id="champion"></p>
					</div>
					
					<div class="row">
						<div class="col-sm-2">
						</div>
						<div class="col-sm-4">
							<h3>East team to playoffs</h3>
							<div class="thumbnail">
								<p id="east_playoffs"></p>
							</div>
						</div>
						<div class="col-sm-1">
						</div>
						<div class="col-sm-4">
							<h3>West team to playoffs</h3>
							<div class="thumbnail">
								<p id="west_playoffs"></p>
							</div>
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
				<h3>Final Champion</h3>
					<div class="thumbnail">
						<img src=${champion3.logo}>
						<div class="caption">
							<a onclick=onclickTeamName(this) data-url=${team3Url}>
								<p>${champion3.team_name}</p>
							</a>
						</div>
					</div>
			</div>
            <div class="col-sm-4">
				<h3>East Champion</h3>
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
				<h3>West Champion</h3>
					<div class="thumbnail">
						<img src=${champion2.logo}>
						<div class="caption">
							<a onclick=onclickTeamName(this) data-url=${team2Url}>
								<p>${champion2.team_name}</p>
							</a>
						</div>
					</div>
			</div>
			
    `
}

function displayMVP(player){
    const playerUrl = `http://localhost:5000/api/player/${player.player_id}`;
    console.log("displayMVP:", player.player_name);

	return `
			<style>
				.table-borderless > tbody > tr > td,
				.table-borderless > tbody > tr > th,
				.table-borderless > tfoot > tr > td,
				.table-borderless > tfoot > tr > th,
				.table-borderless > thead > tr > td,
				.table-borderless > thead > tr > th {
					border: none;
				}
			</style>
				<h3>MVP</h3>
					<div class="thumbnail">
						<div class="row">
							<p>&nbsp;</p>
							<div class="col-sm-3" style="text-align:center;">
							</div>
							<div class="col-sm-6" style="text-align:center;">
								<img src=${player.picture}>
								<div>&nbsp;</div>
								<a onclick=onclickPlayerName(this) data-url=${playerUrl}>
										<p>${player.player_name}</p>
								</a>
							</div>
							
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