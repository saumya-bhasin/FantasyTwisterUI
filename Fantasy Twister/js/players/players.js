function navToPlayersPage(initial) {
    emptyContent();
    $('#content').append(playerListTemplate());
    renderInitialList()
    getPlayersData(initial);
};

function getPlayersData(initial) {
    $.ajax({
        type:'GET',
        url: "http://127.0.0.1:5000/api/players/" + initial,
    }).done(function(data) {
        val=JSON.parse(data);
        renderPlayerList(val.data);
    });
}

function renderPlayerList(playersData) {
    playersData.forEach((player) => {
        $("#player_list").append(`<div className="col-sm-3"> </div>`);
        $("#player_list").append(topPlayerTemplate(player));
    });
}

function renderInitialList() {
    for (i = 0; i < 26; i++) {
        $("#alpha_list").append(initialListTemplate(String.fromCharCode(97 + i)));
    }
}