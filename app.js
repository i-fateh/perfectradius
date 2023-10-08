let parentBorderRadius = document.getElementById('parentBorderSection')
let parentPX = document.getElementById('parentPX');

let customParentRadius = 0;
let customEnfantRadius = 0;
var customPadding = 0;

parentBorderRadius.style.padding = customPadding+"px"

let enfantBorderRadius = document.getElementById('img1')

// pour recuperer le padding
let outerElement = window.getComputedStyle(parentBorderRadius);
let outerElementPadding = outerElement.getPropertyValue("padding");

// pour recuperer le border radius de Parent
let outerElementBorderRadius = outerElement.getPropertyValue("border-radius");

// PARENT
function setParentPx(value){
    // RAZ
    customPadding = parseInt(value/3)
    parentBorderRadius.style.padding = customPadding+"px"

    document.getElementById('enfantPX').value = 0
    document.getElementById('paddingPX').value = 0
    document.getElementById('parentBorderSection').style.paddingBottom = "0px"

    parentBorderRadius.style.borderTopLeftRadius = `${parseInt(value)}px`;
    enfantBorderRadius.style.borderTopLeftRadius = `${parseInt(value) - parseInt(customPadding)}px`
    parentBorderRadius.style.borderTopRightRadius = `${parseInt(value)}px`;
    enfantBorderRadius.style.borderTopRightRadius = `${parseInt(value) - parseInt(customPadding)}px`
    
    document.getElementById('parentBox').textContent= parentBorderRadius.style.borderTopRightRadius
    document.getElementById('paddingBox').textContent= customPadding+"px"
    document.getElementById('imageBox').textContent= enfantBorderRadius.style.borderTopLeftRadius
}

// ENFANT
function setEnfantPx(value){
    // RAZ
    customPadding = parseInt(value/2)
    parentBorderRadius.style.padding = customPadding+"px"

    document.getElementById('parentPX').value = 0
    document.getElementById('paddingPX').value = 0

    document.getElementById('parentBorderSection').style.paddingBottom = "0px"

    enfantBorderRadius.style.borderTopLeftRadius = `${parseInt(value)}px` 
    parentBorderRadius.style.borderTopLeftRadius = `${parseInt(value) + customPadding}px`
    enfantBorderRadius.style.borderTopRightRadius = `${parseInt(value)}px` 
    parentBorderRadius.style.borderTopRightRadius = `${parseInt(value) + customPadding}px`

    document.getElementById('parentBox').textContent= parentBorderRadius.style.borderTopRightRadius
    document.getElementById('paddingBox').textContent= customPadding+"px"
    document.getElementById('imageBox').textContent= enfantBorderRadius.style.borderTopLeftRadius
}


// PADDING
function setPaddingPx(value){
    customPadding = value;
    
    parentBorderRadius.style.borderTopLeftRadius = `${parseInt(value*3)}px`;
    enfantBorderRadius.style.borderTopLeftRadius = `${value*3 - customPadding}px`
    parentBorderRadius.style.borderTopRightRadius = `${parseInt(value*3)}px`;
    enfantBorderRadius.style.borderTopRightRadius = `${value*3 - customPadding}px`

    parentBorderRadius.style.padding = value+"px"

    // RAZ
    document.getElementById('parentPX').value = 0
    document.getElementById('enfantPX').value = 0
    document.getElementById('parentBorderSection').style.paddingBottom = "0px"

    // RESPONSE
    document.getElementById('parentBox').textContent= parentBorderRadius.style.borderTopRightRadius
    document.getElementById('paddingBox').textContent= customPadding+"px"
    document.getElementById('imageBox').textContent= enfantBorderRadius.style.borderTopLeftRadius
}

document.getElementById('parentBorderSection').style.paddingBottom = "0px"
