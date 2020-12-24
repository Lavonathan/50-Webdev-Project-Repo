/****************************
ScrollAnimaiont.js
PURPOSE: Additional scroll animation for FAQ project
AUTHOR: Lavon Marquise Edwards
DATE: December 23 2020
NOTES: 
****************************/

//  All of the boxes on our page.
const faqs = document.querySelectorAll('.faq');

//  Using the scrolling event. Every time the page scrolls down do this.
window.addEventListener('scroll', checkFaq)

//  Initially call check boxes to see which boxes are visible right when the page
//  loads.
checkFaq();

//  Check if the trigger point for the boxes has been reached. If they have,
//  Move them on to the screen.
function checkFaq() {
    
    //  This allows us to check which point of the window we want boxes
    //  To appear. Once it hits this trigger point, we can bring in a new box
    const triggerBottom = window.innerHeight / 5 * 4;

    faqs.forEach(faq => {

        const faqTop = faq.getBoundingClientRect().top;

        //  If the box top is above the trigger bottom, bring in the box.
        //  Otherwise remove the show class.
        if(faqTop <= triggerBottom) {
            faq.classList.add('show');
        } else {
            faq.classList.remove('active');
            faq.classList.remove('show');
        }
    })
}