// public/script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.btn');
    const searchBar = document.querySelector('#ipd');
  
    searchButton.addEventListener('click', function(event) {
      event.preventDefault();
      const query = searchBar.value.trim();
  
      if (query) {
        window.location.href = `/${encodeURIComponent(query)}`;
      }
    });
  
    searchBar.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        searchButton.click();
      }
    });
  });
  