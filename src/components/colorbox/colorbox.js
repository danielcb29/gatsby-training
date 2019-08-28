import { ScrollAnimation } from '../../utils/scrollAnimation'

class ColorBoxComponent {
    constructor() {
        new ScrollAnimation('box', 'component--fadeout', 'component--fadein');
    }
}

export {
    ColorBoxComponent
}