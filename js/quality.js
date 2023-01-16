$(document).ready(function(){
    $('.quality__slider').slick({
        arrows: true,
        nextArrow: `<button class="slick-next">
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.71069 7.85547L17.2107 15.3555L9.71069 22.8555L11.2107 25.8555L21.7107 15.3555L11.2107 4.85547L9.71069 7.85547Z" fill="white"/>
                        </svg>
                    </button>`,
        prevArrow: `<button class="slick-prev">
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 7.85547L13.5 15.3555L21 22.8555L19.5 25.8555L9 15.3555L19.5 4.85547L21 7.85547Z" fill="white"/>
                        </svg>
                    </button>`,
    });
});