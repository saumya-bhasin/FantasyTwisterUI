function displayPlayer(response){
	
	return `
	<style>
		.table{
				background-color:lightsteelblue;
		}
		#data{
			text-align:center;
		}
	</style>
            <div id="data" class="container centered-content">
			<h3>${response.player_name}</h3>
				<div class="row">
					<div class="col-sm-4" >
						<img src=${response.picture}>
					</div>
					<div class="col-sm-4">
						<table class="table">
							<tr>
								<td width=100px>Team Name</td>
								<td>${response.team_name}</td>
							</tr>
							<tr>
								<td width=30px>Position</td>
								<td>${response.position}</td>
							</tr>
							<tr>
								<td width=30px>Gender</td>
								<td>${response.gender}</td>
							</tr>
							<tr>
								<td width=30px>Height</td>
								<td>${response.height}</td>
							</tr>
							<tr>
								<td width=30px>Weight</td>
								<td>${response.weight}</td>
							</tr>							
							<tr>
								<td width=30px>Points</td>
								<td>${response.points}</td>
							</tr>
							<tr>
								<td width=30px>Wikipedia</td>
								<td><a href=${response.description}>${response.player_name}</a></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
        `;
	
}