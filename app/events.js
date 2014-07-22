(function() {

  document.getElementById('cmn-toggle-1').addEventListener('change', function() {
    localStorage.night = document.getElementById('body').classList.toggle('night');
  });

  if (localStorage.night === 'true') {
    document.getElementById('body').classList.add('night');
    document.getElementById('cmn-toggle-1').checked = true;
  }

})();
