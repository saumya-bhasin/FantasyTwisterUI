function navToPlayersPage() {
    console.log('coming here');
    emptyContent();
    $('#content').append(playerListTemplate());
    getPlayersData();
};

function onclickPlayerName(targetElem) {
    const playerUrl = targetElem.getAttribute('data-url');

    $.get(playerUrl, function(response) {
        navToPlayerProfile(response);
        // console.log(response);
    });
}

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
        $("#player_list").append(playerListDataTemplate(player));
    });
}

function onclickTeamName(targetElem) {
    const teamUrl = targetElem.getAttribute('data-url');
    $.get(teamUrl, function(response) {
        navToTeamProfile(response);
    });
}