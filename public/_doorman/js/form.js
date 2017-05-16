document.getElementsByClassName('input')[0].addEventListener('input', function (e) {
  if (e.target.value.length > 0) {
    document.getElementsByClassName('js-float-label')[0].classList.remove('hide-label');
    e.target.classList.remove('form-control-error');
    document.getElementsByClassName('error')[0].classList.add('hide-error');
  } else {
    document.getElementsByClassName('js-float-label')[0].classList.add('hide-label');
  }
});
