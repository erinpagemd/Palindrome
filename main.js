$(document).ready(initialize);

function initialize(){

  var raw;
  var rev;

  $('#reverse').click(function(){
    raw = $('#raw').val();

    var splitraw = [];
    for(var i = 0; i< raw.length; i++){
      splitraw.push(raw.charAt(i));
    }

    rev = splitraw.reverse().join("");
    $('#rev').val(rev);
  })

  $('#palindrome').click(function(){
    var pal = raw + rev;
    $('#pal').val(pal);

  })

}
