class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.imgs = this.element.getElementsByTagName('img');
        this.imgs = Array.from(this.imgs)
        // console.log(this.imgs)
    }
}

let carousel = document.querySelector('.carousel');
// console.log(carousel);
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
