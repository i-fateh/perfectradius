// les ciblages d'éléments à animer
let parentBorderRadius = document.getElementById('parentBorderSection');
let childBorderRadius = document.getElementById('childDiv');
let customPadding = 0;

// les inputs
let parentInputPX = document.getElementById('parentInputPX');
let childInputPX = document.getElementById('childInputPX');
let paddingInputPX = document.getElementById('paddingInputPX');

// Fonction pour définir les propriétés de bordure parent, enfant et de padding
function setBorderAndPadding(parentValue, childValue, paddingValue) {
    childBorderRadius.style.filter = "grayscale(0)";
    parentBorderRadius.style.borderTopLeftRadius = `${parseInt(parentValue)}px`;
    parentBorderRadius.style.borderTopRightRadius = `${parseInt(parentValue)}px`;
    childBorderRadius.style.borderTopLeftRadius = `${parseInt(childValue)}px`;
    childBorderRadius.style.borderTopRightRadius = `${parseInt(childValue)}px`;
    
    parentBorderRadius.style.padding = `${paddingValue}px`;
    
    parentInputPX.value = parentValue;
    childInputPX.value = childValue;
    paddingInputPX.value = paddingValue;
}

// Ecoute de l'input Outer px
parentInputPX.addEventListener('input', function () {    
    const parentValue = parseInt(parentInputPX.value);
    const paddingValue = parseInt(parentValue / 3);
    const childValue = parseInt(parentInputPX.value-paddingValue);
    setBorderAndPadding(parentValue, childValue, paddingValue);
});

// Ecoute de l'input Inner px
childInputPX.addEventListener('input', function () {
    const childValue = parseInt(childInputPX.value);
    const paddingValue = parseInt(childValue / 2);
    const parentValue = parseInt(childValue+paddingValue);
    setBorderAndPadding(parentValue, childValue, paddingValue);
});

// Ecoute de l'input padding px
paddingInputPX.addEventListener('input', function () {
    const paddingValue = parseInt(paddingInputPX.value);
    const parentValue = paddingValue * 3;
    const childValue = paddingValue * 2;
    setBorderAndPadding(parentValue, childValue, paddingValue);
});