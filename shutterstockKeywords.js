// ==UserScript==
// @name          Shutterstock Keywords
// @author        skillup (skillup.lj.ru)
// @source        http://skillup.lj.ru
// @version       1.3.1
// @description   Easy to copy image keywords.
// @include       http*://www.shutterstock.com/image-photo/*
// @include       http*://www.shutterstock.com/image-vector/*
// @include       http*://www.shutterstock.com/image-illustration/*
// @include       http*://www.shutterstock.com/*/image-photo/*
// @include       http*://www.shutterstock.com/*/image-vector/*
// @include       http*://www.shutterstock.com/*/image-illustration/*
// ==/UserScript==

(() => {
    let keywords = document.querySelectorAll('.js-product-keywords-holder')[0].children,
        newKeywords = document.createElement("p"),
        keys = document.querySelector(".product-page-keywords"),
        parent = keys.parentNode;

    keywords = [...keywords].map(k => k.innerHTML).map(a => `<a href="/search/${a}">${a}</a>`);

    newKeywords.innerHTML = `${keywords.length} keywords:<br>${keywords.join(', ')}`;
    newKeywords.style.cssText = 'padding-left: 14px; text-align: left; line-height: 150%';

    parent.appendChild(newKeywords);
    parent.removeChild(keys);
})();