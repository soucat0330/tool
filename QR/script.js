window.addEventListener("load", () => {
    const body = document.body;
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener("change", () => { //ライト・ダークが切り替えられたとき
        changedrak();
    });

    document.querySelectorAll("input[type='radio']").forEach((radio) => { //ライト・ダークのボタン取得
        radio.addEventListener("click", () => {
            const checked = document.querySelector("input[name='theme']:checked").value;
            switch (checked) {
                case "light":
                    body.setAttribute("data-bs-theme", "light");
                    colorchange();
                    break;
                case "dark":
                    body.setAttribute("data-bs-theme", "dark");
                    colorchange();
                    break;
                case "auto":
                    changedrak();
                    break;
            }
            localStorage.setItem("theme", checked);
        });
    });

    if (localStorage.getItem("theme")) {
        document.getElementById(localStorage.getItem("theme")).click();
    } else {
        document.getElementById("light").click();
    }
    changedrak();

    function changedrak() {
        if (document.querySelector("input[name='theme']:checked").value == "auto") {
            if (mediaQueryList.matches) {
                body.setAttribute("data-bs-theme", "dark");
            } else {
                body.setAttribute("data-bs-theme", "light");
            }
        }
        colorchange();
    }
    function colorchange() { //ボタンの色合い調節
        document.querySelectorAll("input[type='radio'] + label").forEach((label) => css(label, "background", ""));
        const mode = body.getAttribute("data-bs-theme");
        if (mode == "light") {
            css(document.querySelector("input[type='radio']:checked + label"), "background", "#1bc8d8");
        } else if (mode == "dark") {
            css(document.querySelector("input[type='radio']:checked + label"), "background", "#094a50");
        }
    }
    function css(element, key, value) {
        element.style[key] = value;
    }

    document.getElementById("do").addEventListener("click", () => {
        let text = document.getElementById("URL").value;
        let ele = document.getElementById("QR");
        document.getElementById("QR").textContent = "";
        let qrcode = new QRCode("QR", {
            text: text,
            width: 256,
            height: 256,
            correctLevel: QRCode.CorrectLevel.H
        });
    });
});
