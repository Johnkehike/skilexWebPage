function scrollFn(){

    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let testimonial = document.getElementById('testimonial');

    let scrolLevel = 100;

    left.addEventListener('click', () => {
        testimonial.scrollLeft -= scrolLevel;

    });

    right.addEventListener('click', () => {
        testimonial.scrollLeft += scrolLevel;
    });
}

export { scrollFn };