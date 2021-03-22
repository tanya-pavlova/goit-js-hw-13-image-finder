import './styles.css';
import getRefs from './js/refs';
import ApiService from './js/apiService';
import imageTpl from './templates/imageTpl.hbs'
import notification from './js/notification.js';

const refs = getRefs();

const apiService = new ApiService();

refs.loadMore.classList.add('is-hidden');
refs.searchForm.addEventListener('submit', onSubmit);
refs.loadMore.addEventListener('click', onLoadMoreBtn);

function onSubmit(event) {
    event.preventDefault();
    apiService.query = event.currentTarget.elements.query.value;

    if (apiService.query === '') {
        notification.enterImageName();
        return 
    }
  
    refs.gallery.innerHTML = '';
    apiService.resetPage();
    clear();
    apiService.fetchHits().then(hits => {
    updateMarkup(hits);
    apiService.incrementPage();
    
    refs.loadMore.classList.remove('is-hidden');
    refs.loadMore.classList.add('load-more-btn');
    });
}
 
function onLoadMoreBtn() {
    apiService.fetchHits().then(hits => {
        updateMarkup(hits);  
        apiService.incrementPage();

    window.scrollTo({
        top: document.documentElement.scrollHeight,            
        behavior: 'smooth'
    });
     
    });
}


function updateMarkup(hits) {
    const markup = imageTpl(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  
}

function clear(){
    refs.gallery.innerHTML = '';
}

