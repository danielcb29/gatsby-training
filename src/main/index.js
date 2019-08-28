import { ScrollAnimation } from '../utils/scrollAnimation'
import { ColorBoxComponent } from '../components/colorbox/colorbox'

class IndexPage {
    constructor() {
        // this.componentsToAnimateOnScroll = [
        //     {
        //         className: 'box',
        //         animationClass: 'fadeout'
        //     }
        // ];
        
        // new ScrollAnimation(this.componentsToAnimateOnScroll);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(() => {
        new IndexPage();
        // Instance the page component here
        
        new ColorBoxComponent();
    }, 2000);

});