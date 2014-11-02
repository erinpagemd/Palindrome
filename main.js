$(document).ready(initialize);

function initialize(){

var balance = 0;
balance = parseFloat(balance);
$('#balance').val(balance);

$('#deposit').click(function(){
  var deposit = prompt('Amount of Deposit')
  deposit = parseFloat(deposit);
  balance += deposit
  $('#balance').val(balance);
  $('#transaction').val('Deposit');
  $('#amount').val(deposit);

})

$('#withdrawal').click(function(){
  var withdrawal = prompt('Amount of Withdrawal')
  withdrawal = parseFloat(withdrawal);
  balance -= withdrawal
  if(balance >= 0){
    $('#balance').val(balance);
    $('#transaction').val('Withdrawal');
    $('#amount').val(withdrawal);
  }else{
    overdraft = 50
    withdrawal += overdraft
    balance -= overdraft
    $('#balance').val(balance);
    $('#transaction').val('Withdrawal/Overdraft Fee');
    $('#amount').val(withdrawal);


  }



})

}
