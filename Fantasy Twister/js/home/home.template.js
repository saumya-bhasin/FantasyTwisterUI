function carouselTemplate() {
    return `
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			<li data-target="#myCarousel" data-slide-to="1"></li>
			<li data-target="#myCarousel" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner" role="listbox">
			<div class="item active">
			<img src="img/slide0.jpg">
			</div>
			<div class="item">
				<img src="img/slide1.jpg">
			</div>
			<div class="item">
				<img src="img/slide2.jpg">
			</div>
		</div>
		<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	
	</div>
    `;
}

function highLightsTemplate() {
  return `
    	<div id="data" class="container text-center">
            <div class="row">
                <div class="col-sm-6">
                    <p>&nbsp;</p>
                    <h2>Top Players</h2>
                    <p>&nbsp;</p>
                    <ul id="player_list" class="media-list"></ul>
                </div>
                <div class="col-sm-6">
                    <p>&nbsp;</p>
                    <h2>Top Teams</h2>
                    <p>&nbsp;</p>
                    <ul id="team_list" class="list-unstyled"></ul>
                </div>
            </div>
	    </div>
  `;
};

function topPlayerTemplate(player) {
    console.log('coming here topPlayerTemplate');
    const playerUrl = `http://127.0.0.1:5000/api/player/${player.player_id}`;
    const teamUrl = `http://127.0.0.1:5000/api/team/${player.team_id}`;
    const imageAlt = `${player.player_name}'s profile picture`;

    return `
            <li class="media player-list-item">
                <div class="media-left">
                    <a onclick=onclickPlayerName(this) data-url=${playerUrl}>
                        <img class="media-object" src=${player.picture} alt=${imageAlt}>
                    </a>
                </div>
                <div class="media-body player-list-item-body">
                    <a onclick=onclickPlayerName(this) data-url=${playerUrl}>
                        <h4 class="media-heading">${player.player_name}</h4>
                    </a>
                    <a onclick=onclickTeamName(this) data-url=${teamUrl}>${player.team_name}</a>
                </div>
            </li>
        `;
}

function topTeamTemplate(team) {
    const teamUrl = `http://127.0.0.1:5000/api/team/${team.team_id}`;
    const imageAlt = `${team.team_name}'s logo`;

    return `
            <li class="media player-list-item">
                <div class="media-left">
                    <a onclick=onclickTeamName(this) data-url=${teamUrl}>
                        <img class="media-object" src=${team.logo} alt=${imageAlt}>
                    </a>
                </div>
                <div class="media-body player-list-item-body">
                    <a onclick=onclickTeamName(this) data-url=${teamUrl}>
                        <h4 class="media-heading">${team.team_name}</h4>
                    </a>
                    ${team.location}
                </div>
            </li>
        `;
}