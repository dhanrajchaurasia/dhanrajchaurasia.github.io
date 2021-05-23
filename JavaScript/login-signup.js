const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

new bootstrap.Popover(document.querySelector('.example-popover'), {
    container: 'body'
  })
  
  $(document).ready(function() {
    $(".name-button").click(function(event) {
      $('.modal-header h5.modal-title').html("New message to " + $(this).attr('data-name'));
    });
  })