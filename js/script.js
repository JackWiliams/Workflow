$('button').click(function(){
  $('.pop-up').addClass('open');
});

$('.pop-up .close').click(function(){
  $('.pop-up').removeClass('open');
});


// $('#submit_btn').click(function () {
 
//     Swal.fire({
      
//       text: "Successfully Subcribed!",
//       icon: 'success',
//       showCancelButton: false,
//       confirmButtonColor: '#3085d6',
//       confirmButtonText: 'OK!'
//     }).then((result) => {
//       $('.pop-up').removeClass('open');
      
//       });
//     });
  

function validate() {
      const email =  $("#email").val();
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
     
$('#submit_btn').click(function () {
  console.log(validate());
  if(validate() ) {
    Swal.fire({
      
      text: "Successfully Subcribed!",
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK!'
    }).then((result) => {
      // $('.pop-up').removeClass('open');
      location.reload();
      
      });
  } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "Your email address is not valid",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Try again!'
      });
  }
});


