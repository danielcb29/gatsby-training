import { ScrollAnimation } from '../utils/scrollAnimation'
import { ColorBoxComponent } from '../components/colorbox/colorbox'

class IndexPage {
}

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(() => {
        new IndexPage();
        // Instance the page component here
        
        new ColorBoxComponent();
    }, 2000);

});