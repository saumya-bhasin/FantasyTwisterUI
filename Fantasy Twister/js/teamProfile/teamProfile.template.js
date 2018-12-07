function displayTeamProfile(response){
	
		return `
		<style>
			#table1{
					/*background-color:lightsteelblue;*/
			}
			#data{
				text-align:center;
			}
		</style>
		<div id="data" class="container centered-content">
			<p>&nbsp;</p>	
			<h3>${response.team_name}</h3>
			<p>&nbsp;</p>
			<div class="row">
				<div class="col-sm-4" >
				</div>
				<div class="col-sm-4" >
					<img src=${response.logo}>
				</div>
			</div>
			<p>&nbsp;</p>
			<p>&nbsp;</p>
			<div class="row">
				<div class="col-sm-2" >
				</div>
				<div class="col-sm-8">
					<table id="table1 striped" class="table">
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
						<tr>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
						</tr>
					</table>
				</div>
				<div class="col-sm-2" >
				</div>
			</div>
			<p>&nbsp;</p>
			<ul id="player_team" class="media-list"></ul>
		</div>
        `;
	
}

function displayTeamPlayer(player){
    const playerUrl = `http://127.0.0.1:5000/api/player/${player.player_id}`;
    const imageAlt = `${player.player_name}'s profile picture`;

    return `
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
                </div>
            </li>
        `;
}