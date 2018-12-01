function navToPlayersPage() {
    emptyContent();
    $('#content').append(playerListTemplate());
    getPlayersData();
};

function getPlayersData() {
    $.ajax({
        type:'GET',
        //TODO: correct api
        url: "http://127.0.0.1:5000/api/home",
    }).done(function(data) {
        val=JSON.parse(data);
        renderPlayerList(val.data.top_players);
    });
}

function renderPlayerList(playersData) {
    playersData.forEach((player) => {
        $("#player_list").append(topPlayerTemplate(player));
    });
}
