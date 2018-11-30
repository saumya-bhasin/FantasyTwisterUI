function renderHomeContent() {
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
    });
}

function renderTopPlayers(playersData) {
    playersData.forEach((player) => {
        $("#player_list").append(topPlayersTemplate(player));
    });
}