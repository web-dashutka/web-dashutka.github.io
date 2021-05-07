$(document).ready(function(){

  // owlCarousel
  
    $("#premium-soft-pink, #premium-soft-marengo, #premium-narcissus, #premium-indigo, #premium-pearl, #premium-mix-pink-haze, #also-mix, #tablecloth").owlCarousel({
      margin: 20,
      nav: true,
      dots: false,
      autoHeight: true,
      navText: [
        '<svg width="58" height="29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#pattern0)" d="M.453033 0h57.547v28.7735h-57.547z"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="matrix(.00781 0 0 .01563 0 -.5)"/></pattern><image id="image0" width="128" height="128" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAwMIMQ7wvo6iAAADfklEQVR42u3bT0gUURwH8N8bZfUapZ2KbpFJEBRB6CGqYwTR7qRpXfpzKss/7apZmtqW6XYTOlRQgvPWMSTtFFZQXrKTIHape4ThoSCyel1iU5s3zj7/PObN93Nz346878+ZWXfe7xEBAAAAAAAAAAAAAAAAAAAAGI6pHjhYaaWogmI0Rf2JR0zoDrLOBcjWiQxZuR8HEqfCWoIClYN4A2UWlW7X9Gd3UncUNVb+h/BG6l36mqjXHURV3pdAtkn0eP6ijYkvusOoyPMM4Env+ESFyrfTEBUgm6Jb3iPi47FZ3VHWvAC8WaRlYyyjO4iqwCcub6Fu6WA2cSKsH4MBzwB+xSf+8FxNWOMHLABP0m3poDtXdX5edwx1AS4BnpTd+ojInasOc/wABfCLz4ZKqg/81B1hZZa5BHi72fGXKQBvp+vSwawJ8YkK5UNOB12Txy89aUJ8n3sAv0FtsjHBN9eYEV9agKjElxSAd9JV6RFOaa058T3vAU4XtUYlvsengNPF5PEHmUEnv2cBeLdP/IczNYlfuie82hbdA3g3tfjEP9P+W/d017QA/CY1S9/3YOasifEX3ASdNKWiFz93BjhpJo0v7r8/Z2p8IkYkGL/L6nRPZJ19Y5MiY48SFRCV3WGhfaqvLEbbqCoec18w5ygb0T0bfcQRi13WPQmdWL1Fe3VPQqs9FoX2ee7qsOid7iloNWmFd01nNbCMlXhKfbqnoU1X4lkB0dDz6Q20T/dc1tlXesMu2PcC/Sts8jeBXIuMO368mFVI3rO7ZEv52CtDPy1yPULueLyIKqUl2Fo+amYJFjRJuePxWPRKsOSpsO8zoUFWa94jsSXPBO1WIe8DqBIDLwvJMB7rAlFaFVBYGDFrXUiyOmy3UafsAGZ/MupCkC6OOh0sAmvDvh0i0SiBb4uMX4OEGf0hy/YImV+CFTVJhb9HLMB+AXci/p0OSQbLinccHhkL9TfFQK2y/IpPo+Sw8Y2SZpcg4JYZdyI+Twclg2XF28ufhPWbYuA9Q+7r+A9pCXZumnXf6o6iJo/9AnaayfsHLukOoirPjS684f8NU39/UTT2DNl9lNQ9Za0FILJ7qMnj5Q/h/Psr7Ru0e6lx6WsitOtLipvd+EXK/PsEEY/t02HdNKO+eXq/laIKKqIp1h8fCGt8AAAAAAAAAAAAAAAAAAAAgAj4A7WvAAZ0VqskAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAzLTAzVDA4OjQ5OjE0KzAwOjAwvwCfwQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMy0wM1QwODo0OToxNCswMDowMM5dJ30AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"/></defs></svg>',
        '<svg width="58" height="29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path transform="rotate(-180 58 28.7734)" fill="url(#pattern0)" d="M58 28.7734h57.547v28.7735H58z"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="matrix(.00781 0 0 .01563 0 -.5)"/></pattern><image id="image0" width="128" height="128" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAwMIMQ7wvo6iAAADfklEQVR42u3bT0gUURwH8N8bZfUapZ2KbpFJEBRB6CGqYwTR7qRpXfpzKss/7apZmtqW6XYTOlRQgvPWMSTtFFZQXrKTIHape4ThoSCyel1iU5s3zj7/PObN93Nz346878+ZWXfe7xEBAAAAAAAAAAAAAAAAAAAAGI6pHjhYaaWogmI0Rf2JR0zoDrLOBcjWiQxZuR8HEqfCWoIClYN4A2UWlW7X9Gd3UncUNVb+h/BG6l36mqjXHURV3pdAtkn0eP6ijYkvusOoyPMM4Env+ESFyrfTEBUgm6Jb3iPi47FZ3VHWvAC8WaRlYyyjO4iqwCcub6Fu6WA2cSKsH4MBzwB+xSf+8FxNWOMHLABP0m3poDtXdX5edwx1AS4BnpTd+ojInasOc/wABfCLz4ZKqg/81B1hZZa5BHi72fGXKQBvp+vSwawJ8YkK5UNOB12Txy89aUJ8n3sAv0FtsjHBN9eYEV9agKjElxSAd9JV6RFOaa058T3vAU4XtUYlvsengNPF5PEHmUEnv2cBeLdP/IczNYlfuie82hbdA3g3tfjEP9P+W/d017QA/CY1S9/3YOasifEX3ASdNKWiFz93BjhpJo0v7r8/Z2p8IkYkGL/L6nRPZJ19Y5MiY48SFRCV3WGhfaqvLEbbqCoec18w5ygb0T0bfcQRi13WPQmdWL1Fe3VPQqs9FoX2ee7qsOid7iloNWmFd01nNbCMlXhKfbqnoU1X4lkB0dDz6Q20T/dc1tlXesMu2PcC/Sts8jeBXIuMO368mFVI3rO7ZEv52CtDPy1yPULueLyIKqUl2Fo+amYJFjRJuePxWPRKsOSpsO8zoUFWa94jsSXPBO1WIe8DqBIDLwvJMB7rAlFaFVBYGDFrXUiyOmy3UafsAGZ/MupCkC6OOh0sAmvDvh0i0SiBb4uMX4OEGf0hy/YImV+CFTVJhb9HLMB+AXci/p0OSQbLinccHhkL9TfFQK2y/IpPo+Sw8Y2SZpcg4JYZdyI+Twclg2XF28ufhPWbYuA9Q+7r+A9pCXZumnXf6o6iJo/9AnaayfsHLukOoirPjS684f8NU39/UTT2DNl9lNQ9Za0FILJ7qMnj5Q/h/Psr7Ru0e6lx6WsitOtLipvd+EXK/PsEEY/t02HdNKO+eXq/laIKKqIp1h8fCGt8AAAAAAAAAAAAAAAAAAAAgAj4A7WvAAZ0VqskAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAzLTAzVDA4OjQ5OjE0KzAwOjAwvwCfwQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMy0wM1QwODo0OToxNCswMDowMM5dJ30AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"/></defs></svg>'
      ],
      responsiveClass: true,
      responsive:{
          0:{
              items: 1
          },
          660:{
              items: 2
          },
          992:{
              items: 3
          },
          1080:{
              items: 4
          }
      }
    });

    $("#reviews").owlCarousel({
      margin: 20,
      nav: true,
      dots: false,
      autoHeight: true,
      navText: [
        'Предыдущий',
        'Следующий'
      ],
      responsiveClass: true,
      responsive:{
          0:{
              items: 1
          },
          660:{
              items: 2
          },
          992:{
              items: 3
          },
          1080:{
              items: 4
          }
      }
    });

    // main form

    price = [5999, 6199, 6299, 6399];

    $('#linensSets').click(function() {
      $(".s-price__size-options--for-linens, .s-price__price-and-buy, .s-price__individual-size, .s-price__size-toggle, .s-price__color-type-options--for-linens").removeClass("hide-block");
      $(".s-price__doily-block, .s-price__type-component-block, .s-price__size-options--for-component, .s-price__color-type-options--for-tablecloth, .s-price__doily-block hide-block").addClass("hide-block");
    })

    $('#components').click(function() {
      $(".s-price__individual-size, .s-price__price-and-buy, .s-price__size-toggle, .s-price__size-options--for-linens, .s-price__color-type-options--for-tablecloth, .s-price__doily-block").addClass("hide-block");
      $(".s-price__type-component-block, .s-price__size-options--for-component, .s-price__color-type-options--for-linens").removeClass("hide-block");
    })

    $('#tableCloth').click(function() {
      $(".s-price__type-component-block, .s-price__color-type-options--for-linens, .s-price__size-toggle, .s-price__size-options--for-linens, .s-price__price-and-buy, .s-price__individual-size").addClass("hide-block");
      $(".s-price__color-type-options--for-tablecloth, .s-price__size-options--for-component, .s-price__doily-block").removeClass("hide-block");
    })

    $('.s-price__size-options--for-linens input').click(function() {
      inputId = $(this).attr("id");
      num = Number(inputId.slice(-1)) - 1;
      
      priceVal = price[num];

      $('.s-price__price span').text(priceVal + " грн");
    })

    // to-top

    $('.to-top').click(function() {
      $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    })

    $("#individual-size").click(function() {
      $('.s-price__price span').text("индивидуально");
    })

    //  height limiter

    reviewText = $(".s-reviews__author-text");
    readMore = "Читать полностью";
    readLess = "Свернуть";
    
    for (let i = 0; i < reviewText.length; i++) {
    
      lengthText = reviewText[i].offsetHeight;
    
      if (+lengthText > 75) {
    
        reviewText[i].classList.add('height-limiter');
    
        let readMoreBtn = document.createElement('button');
        readMoreBtn.classList.add('s-reviews__slide-height-limiter-btn');
        readMoreBtn.setAttribute('type', 'button');
        readMoreBtn.innerHTML = `${readMore}`;
        reviewText[i].parentElement.append(readMoreBtn);
    
      } else {
        continue;
      }
    
    }
    
    $('.s-reviews__slide-height-limiter-btn').click(function() {
      let text = $(this)[0].previousSibling;
      text.classList.toggle("height-limiter");
      text.closest(".owl-stage-outer.owl-height").setAttribute('style', 'height: auto;');
    
      if ($(this)[0].innerHTML == readMore) {
        $(this)[0].innerHTML = readLess;
      } else {
        $(this)[0].innerHTML = readMore;
      }
    })

    $('.header__consultation-btn, .s-price__btn, .s-price__buy').click(function() {
      $(".form-success").removeClass("form-success--hide");
      
    })

    $('.form-success__close').click(function() {
      $(".form-success").addClass("form-success--hide");
    })

    // menu

    $(".header__menu-btn").click(function() {
      $(this).toggleClass("header__menu-btn--open");
      $(this).toggleClass("header__menu-btn--close");
      $(".header__menu-nav").toggleClass("header__menu-nav--open");
      $(".header__menu-nav").toggleClass("header__menu-nav--close");
    })

});
