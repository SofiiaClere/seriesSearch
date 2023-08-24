const serie = document.querySelectorAll('.series');
const searchField = document.querySelector('#search');

searchField.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();


serie.forEach(item => {
    item.querySelector("p").textContent.toLowerCase().includes(word) ?(item.style.display="block") : (item.style.display="none");
})
})