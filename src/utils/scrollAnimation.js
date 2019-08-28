import ScrollMagic from 'scrollmagic'

class ScrollAnimation {
    constructor(className, animationClassNameIn, animationClassNameOut) {
        this.controller = new ScrollMagic.Controller();
        this.components = document.getElementsByClassName(className);
        this.className = className;
        this.animationClassNameIn = animationClassNameIn;
        this.animationClassNameOut = animationClassNameOut;
        this.buildScenes();
    }

    buildScenes() {
        Array.from(this.components).forEach((component , id) => {
                console.log('Scrolling', this.className, this.animationClassNameIn)
                new ScrollMagic.Scene({triggerElement: `#trigger-${id}`})
                .triggerHook(0)
                .on("enter", () => {
                    component.classList.remove(this.animationClassNameOut);
                    component.classList.add(this.animationClassNameIn);
                })
                .on("leave", () => {
                    component.classList.remove(this.animationClassNameIn);
                    component.classList.add(this.animationClassNameOut);
                })
                .addTo(this.controller); 
            }
        )
    }

    

}

export {
    ScrollAnimation
}

/**
Array.from(this.components).forEach(component => {
                const componentHeight = component.offsetHeight;
                const componentTopPosition = component.offsetTop;
                const componentBottomPosition = componentHeight + componentTopPosition;
                new ScrollMagic.Scene({
                    duration: componentBottomPosition,    // the scene should last for a scroll distance of 100px
                    offset: componentTopPosition    // start this scene after scrolling for 50px
                })
                .setClassToggle(component, animationClassName)
                // .setPin(`.${className}`) // pins the element for the the scene's duration
                .addTo(this.controller); // assign the scene to the controller
            }
        ) 
        */


/**

constructor(componentClassName, animationClass) {
        //this.windowTopPosition = 0;
        // this.windowBottomPosition = 0;
        // this.components = document.getElementsByClassName(componentClassName);
        // this.initScrollListener();
    }

initScrollListener() {
        window.addEventListener('scroll', debounce(() => this.detectScrollingLimit()));
    }

    detectScrollingLimit() {
        const windowHeight = window.innerHeight;
        this.windowTopPosition = window.scrollX;
        this.windowBottomPosition = this.windowTopPosition + windowHeight;

        Array.from(this.components).forEach(component => this.animateComponentIfScroll(component))
    }

    animateComponentIfScroll(component) {
        const componentHeight = component.offsetHeight;
        const componentTopPosition = component.offsetTop;
        const componentBottomPosition = componentHeight + componentTopPosition;
        console.log(this.windowTopPosition);

        if (this.windowTopPosition >= componentTopPosition && this.windowTopPosition <= componentBottomPosition
        ) {
            console.log('Animating my friend', component);
            // component.addClass(animatedClass);
        }
        
    }

 */