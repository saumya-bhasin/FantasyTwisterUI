function scheduleTemplate(response) {
    console.log
    return `
			<style>
				#schedule{
						/*background-color:darkseagreen;*/
				}
			</style>
            <div id="data" class="container text-center">
                <p>&nbsp;</p>
                <h2>Schedule</h2>
                <p>&nbsp;</p>
                
                <nav aria-label="...">
                  <ul class="pager">
                    <li class="previous"><a onclick="navToSchedulePage(getPreviousDate())" href="#"><span aria-hidden="true">&larr;</span> Previous Date</a></li>
                    <li><a onclick="navToSchedulePage(getCurDate())" href="#">Today</a></li>
                    <li class="next"><a onclick="navToSchedulePage(getNextDate())" href="#">Next Date <span aria-hidden="true">&rarr;</span></a></li>
                  </ul>
                </nav>
				<p>&nbsp;</p>
				
				<div class="col-sm-4" style="text-align:right;">
					<ul id="teamA_list" class="media-list"></ul>
				</div>
				<div class="col-sm-4">
					<p>&nbsp;</p>
					<img src="img/VS.png" height="80" width="70" class="img-round">
				</div>
				<div class="col-sm-4" style="text-align:left;">
					<ul id="teamB_list" class="media-list"></ul>
				</div>
				<p>&nbsp;</p>
				
				<div class="row">
					<div class="col-sm-4">
					</div>
					<div class="col-sm-4">
					<table class="table table-striped" id="schedule">
					
						<tr>
							<td width=100px>Date:</td>
							<td>${response.date}</td>
						</tr>
						<tr>
							<td>Time:</td>
							<td>${response.start_time_ET}</td>
						</tr>
						<tr>
							<td>Home:</td>
							<td>${response.home}</td>
						</tr>
						<tr>
							<td>Visitor:</td>
							<td>${response.visitor}</td>
						</tr>
						<tr>
					        <td>Winner:</td>
							<td>${response.winner}</td>
                        </tr>
                        <tr>
					        <td> </td>
							<td> </td>
                        </tr>
					</table>
					</div>
				</div>
				
            </div>
    `
}

function scheduleListDataTemplate(team) {
	
	console.log(team);
	
	//const teamUrl = `http://localhost:5000/api/team/${schedule.team_id}`;
    //const imageAlt = `${schedule.team_name}'s logo`;

    return `
            <li class="media">
                <div>
                    <img src=${team.logo} class="img-thumbnail">
                </div>
				<p>&nbsp;</p>
                <div>
                    <h4>${team.team_name}</h4>
                </div>
            </li>
        `;
	
}