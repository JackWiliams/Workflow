$('button').click(function(){
  $('.pop-up').addClass('open');
});

$('.pop-up .close').click(function(){
  $('.pop-up').removeClass('open');
});

$('#submit_btn').click(function () {
  Swal.fire('Oops...', 'Something went wrong!', 'error');
  $('.pop-up').removeClass('open');
})