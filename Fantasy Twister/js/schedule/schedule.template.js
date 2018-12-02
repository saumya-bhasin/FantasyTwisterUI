function scheduleTemplate() {
    return `
            <div id="data" class="container text-center">
                <h2>Schedule</h2>
                <p>&nbsp;</p>
                <!--<ul id="schedule_list" class="media-list">
				</ul>-->
				<div class="col-sm-4">
					<ul id="teamA_list" class="media-list"></ul>
				</div>
				<div class="col-sm-4">
					<img src="img/VS.png" height="80" width="70">
				</div>
				<div class="col-sm-4">
					<ul id="teamB_list" class="media-list"></ul>
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
                    <p>#teampic</p>
                </div>
                <div>
                    <p>${team.team_name}</p>
                </div>
            </li>
        `;
	
}