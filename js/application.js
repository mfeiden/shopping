var updateCost = (function() {
  var costArr = [];
  $('tbody tr').each(function (i, item) {
    var linePrice = parseFloat($(item).find('.price').text());
    var quantity = parseFloat($(item).find('.qty input').val());
    var itemCost = linePrice * quantity;
    if(quantity) {
      $(item).children('.cost').html(itemCost.toFixed(2));
      costArr.push(itemCost);
    };
  });
  var total = costArr.reduce((sum, num) =>
    sum + num);
  $('#grandTotal').html(total.toFixed(2));
});

$(document).ready(updateCost);
