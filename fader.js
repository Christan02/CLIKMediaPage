const sliders = document.querySelectorAll('.slide-in');
const appearOnOptions = {};

const appearOnScroll = new IntersectionObserver
(function (
    entries,
     appearOnScroll
     ) {
         entries.forEach (entry => {
             if (!entry.isIntersecting){
                 return;
             } else {
                 entry.target.classList("appear");
                 appearOnScroll.unobserve(entry.target);
             }
         });
     },
    appearOnOptions);

    sliders.forEach(slider =>{
        appearOnScroll.observe(slider);
    });

