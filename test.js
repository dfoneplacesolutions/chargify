$(function() {
 var submitBtn = $("#subscription_submit");
 submitBtn.html('Another button name');
});

//This assigns classes to each component
$('.form__field--boxed').eq(0).addClass('First');
$('.form__field--boxed').eq(1).addClass('Fourth');
$('.form__field--boxed').eq(2).addClass('Second');
$('.form__field--boxed').eq(3).addClass('Third');

//This selects the component labeled with the 'Second' class and inserts it after the component labeled with the 'First' class
$('.form__field--boxed.Second').insertAfter('.form__field--boxed.First');

//At this point the order would be First, Second, Fourth, Third

//This selects the component labeled 'Third' and inserts it before the component labeled 'Fourth'
$('.form__field--boxed.Third').insertBefore('.form__field--boxed.Fourth');