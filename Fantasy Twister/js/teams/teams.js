function navToTeamsPage() {
    emptyContent();
    $('#content').append(teamListTemplate());
    getteamsData();
};

// function onclickPlayerName(targetElem) {
//     const playerUrl = targetElem.getAttribute('data-url');
//
//     $.get(playerUrl, function(response) {
//         navToPlayerProfile(response);
//         // console.log(response);
//     });
// }

function getteamsData() {
    $.ajax({
        type:'GET',
        //TODO: correct api
        url: "http://127.0.0.1:5000/api/home",
    }).done(function(data) {
        val=JSON.parse(data);
        renderTeamList(val.data.top_teams);
    });
}

function renderTeamList(teamsData) {
    teamsData.forEach((team) => {
        $("#team_list").append(topTeamTemplate(team));
    });
}
//
// function onclickTeamName(targetElem) {
//     const teamUrl = targetElem.getAttribute('data-url');
//     $.get(teamUrl, function(response) {
//         navToTeamProfile(response);
//     });
// }