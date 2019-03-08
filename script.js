console.log('hi');

$(document).ready(function() {

let para1 = $('#para1');
let leftButton = $('#leftButton');
let rightButton = $('#rightButton');

para1.css({
 'color': 'red',
 'border':'20px solid green',
 'border-radius': '100%',
 'display': 'inline-block'
});

leftButton.click(function(){
  para1.css('margin-left','-=15px')
});

rightButton.click(function(){
  para1.css('margin-left','+=15px')
});








// para1.css('background-color','red');

});
