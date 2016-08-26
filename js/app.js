// wait for the DOM to finish loading
$(document).ready(function() {
    console.log( "ready!" );
    var game = true;
    var turn = "X"
    $('#player').html(turn);
    var spaces = [];
    $('.box').on("click", function setSquare(){
      var $box = $(this);
      var boxNum = $(this).attr('id');
      if(!spaces[boxNum] && game){
        $box.html(turn);
        spaces[boxNum] = turn;
        $box.addClass(turn);
        if(turn === "X"){
          turn = "O"
        }
        else{
          turn = "X"
        }
        $('#player').html(turn);

        if((spaces[0] === spaces[1] && spaces[1] === spaces[2] && !!spaces[0])||(spaces[0]===spaces[3] && spaces[0] === spaces[6]&& !!spaces[0])||(spaces[0]===spaces[4] && spaces[0] ===spaces[8]&& !!spaces[0])){
          alert(spaces[0] + " player wins!");
          game = false;
        }
        else if(spaces[1] === spaces[4] && spaces[7] === spaces[1] && !!spaces[1]){
          alert(spaces[1] + " player wins!");
          game = false;
        }
        else if((spaces[2] === spaces[5] && spaces[2] === spaces[8] && !!spaces[2])||(spaces[2] === spaces[4] && spaces[2] === spaces[6] && !!spaces[2])){
          alert(spaces[2] + " player wins!");
          game = false;
        }
        else if(spaces[3]  === spaces[4] && spaces[3] === spaces [5] && !!spaces[3]){
          alert(spaces[3] + " player wins!");
          game = false;
        }
        else if(spaces[6] === spaces[7] && spaces[7] === spaces[8] && !!spaces[6]){
          alert(spaces[6] + " player wins!");
          game = false;
        }
        else if(spaces[0] && spaces[1] && spaces[2] && spaces[3] && spaces[4] && spaces[5]
            && spaces[6] && spaces[7] && spaces[8] && game){
              alert("Draw Game");
              game = false;
            }
      }
    });
    $("#reset").on("click", function(event){
      event.preventDefault();
      $(".box").html("");
      turn = "X";
      spaces = [];
      game = true;
      $('.box').removeClass("X O");
      $('#player').html(turn);
    })
});
