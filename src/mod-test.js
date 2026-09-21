const modTest = () => {
    const main = document.querySelector("main");

    const info = document.createElement("div");
    info.textContent = "This is a dynamic div!";

    main.appendChild(info);
};

export default modTest;
