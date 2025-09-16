window.addEventListener("load", () => {
    document.getElementById("add").addEventListener("click", () => { //ホームの追加ボタン
        document.getElementById("alert").classList.add("d-none");
        document.getElementById("set-subject").value = null;
        document.getElementById("set-color").value = "#000000";
    });

    document.getElementById("add-submit").addEventListener("click", () => { //modal内の追加ボタン

        const name = document.getElementById("set-subject").value.trim();
        if (name == "") { //inputが空
            document.getElementById("alert-body").innerText = "教科名を空白にすることはできません";
            document.getElementById("alert").classList.remove("d-none");
        } else if (name.length > 10) {
            document.getElementById("alert-body").innerText = "教科名を10字以上にすることはできません";
            document.getElementById("alert").classList.remove("d-none");
        }
        else {

            const div = document.createElement("div"); //divを作成
            div.classList.add("col-10", "col-md-6", "col-lg-3", "d-flex");

            const label = document.createElement("label"); //labelを作成
            label.classList.add("form-label", "col-auto", "m-auto", "me-1");
            label.innerText = name; //labelの値

            const color = document.createElement("input"); //input-colorを作成
            color.type = "color";
            color.classList.add("form-control", "form-control-color", "set-c");
            color.value = document.getElementById("set-color").value;

            const number = document.createElement("input");
            number.type = "number";
            number.classList.add("form-control", "col");

            div.appendChild(label);
            div.appendChild(color);
            div.appendChild(number);
            document.getElementById("subjects").appendChild(div);

            bootstrap.Modal.getInstance(document.getElementById("add-subject")).hide();
        }
    });

    document.getElementById("alert-close").addEventListener("click", () => { //アラートを閉じるボタン
        document.getElementById("alert").classList.add("d-none");
    });

    document.getElementById("rem").addEventListener("click", () => {
        modal_body = document.getElementById("rem-subject").querySelector(".modal-body");
        modal_body.innerText = null;

        const div = document.createElement("div");
        div.innerText = "削除する教科を選択";

        modal_body.appendChild(div);

        Array.from(document.getElementById("subjects").querySelectorAll("label")).forEach((ele, i) => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox"
            checkbox.classList.add("btn-check");
            checkbox.id = `rem_i_${i}`;
            const label = document.createElement("label");
            label.innerText = ele.innerText;
            label.classList.add("btn", "btn-outline-primary");
            label.htmlFor = `rem_i_${i}`;

            modal_body.appendChild(checkbox);
            modal_body.appendChild(label);
        });
    });
});
