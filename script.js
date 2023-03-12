const opacity = '0.4';
const scale = 'scale(1.05)';
const blur = 'blur(4px)';



function changeItem() {
    document.getElementsByClassName('actual-photo')[0].style.cssText = `
    opacity: ${opacity};
    transform: ${scale};
    filter: ${blur};
    cursor: pointer;
`
    document.getElementById('one').style.opacity = '1'
}

function rechangeItem() {
    document.getElementsByClassName('actual-photo')[0].style.cssText = `
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
    cursor: default
`

    document.getElementById('one').style.opacity = '0'
}


// SECOND

function changeItem2() {
    document.getElementsByClassName('actual-photo')[1].style.cssText = `
    opacity: 0.4;
    transform: scale(1.05);
    filter: ${blur};
    cursor: pointer;
`

    document.getElementById('two').style.opacity = '1'
}

function rechangeItem2() {
    document.getElementsByClassName('actual-photo')[1].style.cssText = `
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
    cursor: default;
`

    document.getElementById('two').style.opacity = '0'
}

// THIRD


function changeItem3() {
    document.getElementsByClassName('actual-photo')[2].style.cssText = `
    opacity: ${opacity};
    transform: ${scale};
    filter: ${blur};
    cursor: pointer;
`
    document.getElementById('three').style.opacity = '1'
}

function rechangeItem3() {
    document.getElementsByClassName('actual-photo')[2].style.cssText = `
    transform: scale(1);
    filter: blur(0);
    cursor: default;
`

    document.getElementById('three').style.opacity = '0'
}

// FOURTH

function changeItem4() {
    document.getElementsByClassName('actual-photo')[3].style.cssText = `
    opacity: ${opacity};
    transform: ${scale};
    filter: ${blur};
    cursor: pointer;
`
    document.getElementById('four').style.opacity = '1'
}

function rechangeItem4() {
    document.getElementsByClassName('actual-photo')[3].style.cssText = `
    transform: scale(1);
    filter: blur(0);
    cursor: default;
`

    document.getElementById('four').style.opacity = '0'
}

// FIFTH

function changeItem5() {
    document.getElementsByClassName('actual-photo')[4].style.cssText = `
    opacity: ${opacity};
    transform: ${scale};
    filter: ${blur};
    cursor: pointer;
`
    document.getElementById('five').style.opacity = '1'
}

function rechangeItem5() {
    document.getElementsByClassName('actual-photo')[4].style.cssText = `
    transform: scale(1);
    filter: blur(0);
    cursor: default;
`

    document.getElementById('five').style.opacity = '0'
}

// SIXTH

function changeItem6() {
    document.getElementsByClassName('actual-photo')[5].style.cssText = `
    opacity: ${opacity};
    transform: ${scale};
    filter: ${blur};
    cursor: pointer;
`
    document.getElementById('six').style.opacity = '1'
}

function rechangeItem6() {
    document.getElementsByClassName('actual-photo')[5].style.cssText = `
    transform: scale(1);
    filter: blur(0);
    cursor: default;
`
    document.getElementById('six').style.opacity = '0'
}

// SEVENTH

function changeItem7() {
    document.getElementsByClassName('actual-photo')[6].style.cssText = `
    opacity: ${opacity};
    transform: ${scale};
    filter: ${blur};
    cursor: pointer;
`
    document.getElementById('seven').style.opacity = '1'
}

function rechangeItem7() {
    document.getElementsByClassName('actual-photo')[6].style.cssText = `
    transform: scale(1);
    filter: blur(0);
    cursor: default;
`
    document.getElementById('seven').style.opacity = '0'
}

// EIGHT

function changeItem8() {
    document.getElementsByClassName('actual-photo')[7].style.cssText = `
    opacity: ${opacity};
    transform: ${scale};
    filter: ${blur};
    cursor: pointer;
`
    document.getElementById('eight').style.opacity = '1'
}

function rechangeItem8() {
    document.getElementsByClassName('actual-photo')[7].style.cssText = `
    transform: scale(1);
    filter: blur(0);
    cursor: default;
`

    document.getElementById('eight').style.opacity = '0'
}