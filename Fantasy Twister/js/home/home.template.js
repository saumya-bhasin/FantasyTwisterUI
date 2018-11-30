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
			<img src="img/slide1.jpg">
			<!--<div class="carousel-caption">
				<h1>get to know bootstrap</h1>
				<br>
				<button type="button" class="btn btn-default">Get Started</button>
			</div>-->
			</div>
			<div class="item">
				<img src="img/slide2.jpg">
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
		<h2>HighLights</h2>
		<p>&nbsp;</p>
		<div class="row">
			<div class="col-sm-6">
				<h3>Top Players</h3>
				<ul id="player_list" class="media-list"></ul>
			</div>
			<div class="col-sm-6">
				<h3>Top Teams</h3>
				<ul id="team_list" class="list-unstyled"></ul>
			</div>
		</div>
	</div>
  `;
};

function topPlayersTemplate(player) {
    const playerUrl = `http://localhost:5000/api/player/${player.player_id}`;
    const teamUrl = `http://localhost:5000/api/team/${player.team_id}`;
    const imageAlt = `${player.player_name}'s profile picture"`;

    return `
            <li class="media">
                <div class="media-left">
                    <a href=${playerUrl}>
                        <img class="media-object" src=${player.picture} alt="Generic placeholder image">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">${player.player_name}</h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </li>
        `;
}