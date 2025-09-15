window.addEventListener("load", () => {
    document.getElementById("add").addEventListener("click", () => {
    });
    document.getElementById("add-submit").addEventListener("click", () => {
        const div = document.createElement("div"); //divを作成
        div.classList.add("col-10","col-md-4","col-lg-2","d-flex");

        const label = document.createElement("label"); //labelを作成
        label.classList.add("form-label","col-auto","m-auto","me-1");
        label.innerText = document.getElementById("set-subject").value; //labelの値

        const color = document.createElement("input"); //input-colorを作成
        color.classList.add("form-control","form-control-color","set-c");
        color.setAttribute("type","color");
        color.value = document.getElementById("set-color").value;



        div.appendChild(label);
        div.appendChild(color);
        div.innerHTML += '<input type="number" class="form-control col" id="subject-1">';
        document.getElementById("subjects").appendChild(div);
    });
});
