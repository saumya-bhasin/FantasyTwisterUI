function navToPlayersPage() {
    emptyContent();
    $('#content').append(highLightsTemplate());
    getPlayersData();
};

function onclickPlayerName(targetElem) {
    const palyerUrl = targetElem.getAttribute('data-url');

    $.get(palyerUrl, function(response) {
        navToPlayerProfile(response);
        console.log(response);
    });
}

function getPlayersData() {
    $.ajax({
        type:'GET',
        url: "http://127.0.0.1:5000/api/home",
    }).done(function(data) {
        val=JSON.parse(data);

        renderPlayerList(val.data.top_players);
    });
}

function renderPlayerList(playersData) {
    playersData.forEach((player) => {
        $("#player_list").append(playerListTemplate(player));
    });
}