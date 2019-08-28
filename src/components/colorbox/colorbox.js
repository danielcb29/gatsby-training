import { ScrollAnimation } from '../../utils/scrollAnimation'

class ColorBoxComponent {
    constructor() {
        console.log("hello world!");
        new ScrollAnimation('box', 'component--fadeout', 'component--fadein');
    }
}

export {
    ColorBoxComponent
}