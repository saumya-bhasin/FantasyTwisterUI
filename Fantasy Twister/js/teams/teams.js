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
        url: "http://127.0.0.1:5000/api/top-teams/16",
    }).done(function(data) {
        val=JSON.parse(data);
        renderTeamList(val.data);
    });
}

function renderTeamList(teamsData) {
    // console.log(teamsData);
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