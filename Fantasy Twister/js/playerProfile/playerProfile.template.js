function displayPlayer(response){
	const teamUrl = `http://127.0.0.1:5000/api/team/${response.team_id}`;
	return `
	<style>
		.table{
				/*background-color:lightsteelblue;*/
		}
		#data{
			text-align:center;
		}
	</style>
            <div id="data" class="container centered-content">
				<p>&nbsp;</p>
				<h3>${response.player_name}</h3>
				<p>&nbsp;</p>
				<div class="row">
					<div class="col-sm-4" >
					</div>
					<div class="col-sm-4" >
						<img src=${response.picture}>
					</div>
				</div>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<div class="row">
					<div class="col-sm-4" >
					</div>
					<div class="col-sm-4">
						<table class="table table-striped">
							<tr>
								<td width=150px>Team Name:</td>
								<td><a onclick=onclickTeamName(this) data-url=${teamUrl}>${response.team_name}</a></td>
							</tr>
							<tr>
								<td>Position:</td>
								<td>${response.position}</td>
							</tr>
							<tr>
								<td>Gender:</td>
								<td>${response.gender}</td>
							</tr>
							<tr>
								<td>Height:</td>
								<td>${response.height}</td>
							</tr>
							<tr>
								<td>Weight:</td>
								<td>${response.weight}</td>
							</tr>							
							<tr>
								<td>Points:</td>
								<td>${response.points}</td>
							</tr>
							<tr>
								<td>Wikipedia:</td>
								<td><a href=${response.description}>${response.player_name}</a></td>
							</tr>
							<tr>
								<td> </td>
								<td> </td>
                        	</tr>
						</table>
					</div>
				</div>
			</div>
        `;
	
}