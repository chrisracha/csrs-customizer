const addFontLinks = () => {
    const head = document.head || document.getElementsByTagName("head")[0];
  
    const fontStylesheet = document.createElement("link");
    fontStylesheet.rel = "stylesheet";
    fontStylesheet.href = "https://fonts.cdnfonts.com/css/sf-pro-display";
    head.appendChild(fontStylesheet);
};

const changeFontFamily = () => {
    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
        el.style.fontFamily = "'SF Pro Display', sans-serif";
    });
};
  
addFontLinks();
changeFontFamily();
