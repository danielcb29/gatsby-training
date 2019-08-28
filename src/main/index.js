import { ColorBoxComponent } from '../components/colorbox/colorbox'

class IndexPage {
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        
        // setTimeout(() => {
            new IndexPage();
            // Instance the page component here
            
            new ColorBoxComponent();
        // }, 2000);
    
    });
}
