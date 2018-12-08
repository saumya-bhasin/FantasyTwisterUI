function scheduleTopTemplate(){
    return`
        	<style>
				#schedule{
						/*background-color:darkseagreen;*/
				}
			</style>
            <div id="data" class="container text-center">
                <p>&nbsp;</p>
                <h2>Schedule</h2>
                
                <nav aria-label="...">
                  <ul class="pager">
                    <li class="previous"><a onclick="navToSchedulePage(getPreviousDate())" href="#"><span aria-hidden="true">&larr;</span> Previous Date</a></li>
                    <li><a onclick="navToSchedulePage(getCurDate())">Today</a></li>
                    <li class="next"><a onclick="navToSchedulePage(getNextDate())" href="#">Next Date <span aria-hidden="true">&rarr;</span></a></li>
                  </ul>
                </nav>
				<p>&nbsp;</p>
				
				<h3>${getCurDate()}</h3>
				<p>&nbsp;</p>
				<div id="schedule_list"></div>
            </div>
    `
}

function scheduleTemplate(response) {
    const teamAUrl = `http://127.0.0.1:5000/api/team/${response.teamA.team_id}`;
    const teamBUrl = `http://127.0.0.1:5000/api/team/${response.teamB.team_id}`;

    return `				
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
                            <td><a onclick=onclickTeamName(this) data-url=${teamAUrl}>${response.home}</a></td>
						</tr>
						<tr>
							<td>Visitor:</td>
                            <td><a onclick=onclickTeamName(this) data-url=${teamBUrl}>${response.visitor}</a></td>
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
				
    `
}

function scheduleListDataTemplate(team) {
	
	console.log(team);
	
	const teamUrl = `http://127.0.0.1:5000/api/team/${team.team_id}`;
    const imageAlt = `${team.team_name}'s logo`;

    return `
            <li class="media">
                <div>
                    <a onclick=onclickTeamName(this) data-url=${teamUrl}>
                        <img class="img-thumbnail" src=${team.logo} alt=${imageAlt}>
                    </a>                   
                </div>
				<p>&nbsp;</p>
                <div>
                    <a onclick=onclickTeamName(this) data-url=${teamUrl}>
                        <h4>${team.team_name}</h4>
                    </a>
                </div>
            </li>
        `;
	
}