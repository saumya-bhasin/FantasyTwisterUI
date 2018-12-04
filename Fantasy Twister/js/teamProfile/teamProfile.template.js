function displayTeamProfile(response){
	
		return `
		<style>
			#table1{
					background-color:lightsteelblue;
			}
			#data{
				text-align:center;
			}
		</style>
		<div id="data" class="container centered-content">
			<h3>${response.team_name}</h3>
				<div class="row">
					<div class="col-sm-4" >
						<img src=${response.logo}>
					</div>
					<div class="col-sm-4">
						<table id="table1" class="table">
							<tr>
								<th scope="col">Location</th>
								<th scope="col">Stadium</th>
								<th scope="col">Owner</th>
								<th scope="col">Coach</th>
								<th scope="col">Manager</th>
								<th scope="col">Achievement</th>
								<th scope="col">Wikipedia</th>
							</tr>
							<tr>
								<td>${response.location}</td>
								<td>${response.stadium}</td>
								<td>${response.owner}</td>
								<td>${response.coach}</td>
								<td>${response.manager}</td>
								<td>${response.achievement}</td>
								<td><a href=${response.description}>${response.team_name}</a></td>
							</tr>
						</table>
					</div>
				</div>
				<p>&nbsp;</p>
				<div class="row">
					<div class="col-sm-4" >
					</div>
					<div class="col-sm-4" >
						<table class="table" id="test">
							<tr id="ppic">
							</tr>
							<tr id="pname">
							</tr>
						</table>
					</div>				
				</div>
			</div>
        `;
	
}

function displaypic(player){
	
	return `
			<th scope="col"><img src=${player.picture}></th>
	`;
	
}
							
function displayname(player){
	const playerUrl = `http://localhost:5000/api/player/${player.player_id}`;

	return `
			<td><a onclick=onclickPlayerName(this) data-url=${playerUrl}>${player.player_name}</a></td>
	`;
}