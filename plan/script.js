window.addEventListener("load", () => {
    document.getElementById("add").addEventListener("click", () => {
        console.log("!");
    });
    Array.from(document.getElementsByClassName("set-c")).forEach(ele => {
        ele.addEventListener("input", () => {
            ele.parentElement.style.backgroundColor = ele.value;
        });
    });
});
