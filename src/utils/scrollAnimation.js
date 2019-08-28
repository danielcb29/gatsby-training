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
        console.log('Inside build scene');
        Array.from(this.components).forEach(component => this.sceneDefinition(component));
    }

    sceneDefinition(component) {
        console.log('Inside scene def');
        new ScrollMagic.Scene({triggerElement: component})
            .triggerHook(0)
            .on("enter", () => {
                console.log('magic enter');
                this.animationClassToggle(component, this.animationClassNameOut, this.animationClassNameIn);
            })
            .on("leave", () => {
                console.log('magic leave');
                this.animationClassToggle(component, this.animationClassNameIn, this.animationClassNameOut);
            })
            .addTo(this.controller);
    }

    animationClassToggle(component, removeClass, addClass) {
        component.classList.remove(removeClass);
        component.classList.add(addClass);
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