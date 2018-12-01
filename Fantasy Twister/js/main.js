/*function getmain() 
{
   var data="hello";
   $.get("http://localhost:5000/", function(response) {
        data = response;
   }).error(function(){
  alert("Sorry could not proceed");
});

   return JSON.stringify(data);
}*/

function emptyContent() {
    $('#content').empty();
};

$(document).ready(function(){
    emptyContent();
    renderHomeContent();
});


    // <div class="list-group">
    //   <a href=" " class="list-group-item list-group-item-action flex-column align-items-start active">
    //     <div class="d-flex w-100 justify-content-between">
    //       <h5 class="mb-1">ID: ${id}</h5>
    //       <small>${time}</small>
    //     </div>
    //     <p class="mb-1">${text}</p >
    //   </a >
