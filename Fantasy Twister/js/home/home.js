function renderHomeContent() {
    emptyContent();
    $('#content').append(carouselTemplate());
    $('#content').append(highLightsTemplate());
    getHomeData();
};

function getHomeData() {
    $.ajax({
        type:'GET',
        url: "http://127.0.0.1:5000/api/home",
    }).done(function(data) {
        val=JSON.parse(data);

        renderTopPlayers(val.data.top_players);
        renderTopTeams(val.data.top_teams);
    });
}

function renderTopPlayers(playersData) {
    playersData.forEach((player) => {
        $("#player_list").append(topPlayerTemplate(player));
    });
}

function renderTopTeams(teamsData) {
    teamsData.forEach((team) => {
        $("#team_list").append(topTeamTemplate(team));
    });
}