const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});
// Theme Change
var x = 0;
function themechange() {
  var body = document.getElementsByTagName('body');
  var cards = document.getElementsByClassName('card');
  var theme = document.getElementById('themee');
  var search = document.getElementsByClassName('form-control');
  var form = document.getElementsByClassName('contains');
  // var m = document.getElementsByClassName('d-flex input:focus');
  if (x % 2 == 0) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "#000";
      cards[i].style.border = "1px solid #383d40";
    }
    console.log('body theme changed.');
    theme.innerText = "Light Theme";
    body[0].style.backgroundColor = "#000";
    body[0].style.color = "#e8e6e3";
    for (let i = 0; i < search.length; i++) {
      const element = search[i];
      element.style.backgroundColor = "#000";
      element.style.border = "1px solid #3c4144";
    }
    for (let i = 0; i < form.length; i++) {
      const element = form[i];
      element.style.backgroundColor = "#212529";
    }
  }
  else {
    theme.innerText = "Dark Theme";
    body[0].style.backgroundColor = "#fff";
    body[0].style.color = "#212529";
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "#fff";
      cards[i].style.border = "1px solid #dfdfdf";
    }
    for (let i = 0; i < search.length; i++) {
      const element = search[i];
      element.style.backgroundColor = "#fff";
      element.style.border = "1px solid #ced4da";
    }
  }
  x++;
}
new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})

$(document).ready(function () {
  $(".name-button").click(function (event) {
    $('.modal-header h5.modal-title').html("New message to " + $(this).attr('data-name'));
  });
})