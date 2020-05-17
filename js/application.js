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
  var total = costArr.length > 0 ? costArr.reduce((sum, num) => sum + num) : 0;
    $('#grandTotal').html(total.toFixed(2)); 
});

$(document).ready(updateCost);

$(document).on('click', '.remove', function() {
  $(this).closest('tr').remove();
  updateCost();
});
