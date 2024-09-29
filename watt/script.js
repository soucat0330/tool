$(document).ready(function () { //読み込まれたとき
    $("#custom").hide();
    $("#w").hide();
    $("#aftercustom").hide();
    $("#afterw").hide();
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener("change", function () { //ライト・ダークが切り替えられたとき
        changedrak();
    });
    $("input:radio").click(function () { //ダークモード切替ボタン押されたら
        let checked = $("input:radio[name='theme']:checked").val(); //押されたやつ取得
        if (checked == "light") {
            $("body").attr("data-bs-theme", "light");
            colorchange();
        } else if (checked == "dark") {
            $("body").attr("data-bs-theme", "dark");
            colorchange();
        } else if (checked == "auto") {
            changedrak();
        }
        localStorage.setItem("theme", $("input:radio[name='theme']:checked").val());
    })
    function changedrak() {
        if ($("input:radio[name='theme']:checked").val() == "auto") {
            if (mediaQueryList.matches) {
                $("body").attr("data-bs-theme", "dark");
            } else {
                $("body").attr("data-bs-theme", "light");
            }
        }
        colorchange();
    }
    function colorchange() { //ボタンの色合い調節
        $("input:radio+label").css("background", "");
        if ($("body").attr("data-bs-theme") == "light") {
            $("input:checked+label").css("background", "#1bc8d8");
        } else if ($("body").attr("data-bs-theme") == "dark") {
            $("input:checked+label").css("background", "#094a50");
        }
    }
    if (localStorage.getItem("theme")) {
        $(`#${localStorage.getItem("theme")}`).click();
    } else {
        $("#light").click();
    }
    changedrak();

    let btn = $("#do");
    btn.click(function () { //計算ボタンが押されたら
        let joule;
        let sec = $("#min").val() * 60 + Number($("#sec").val());
        if ($("#watt").val() == "custom") {
            joule = $("#custom").val() * sec;
        } else {
            joule = $("#watt").val() * sec;
        }
        if ($("#afterwatt").val() == "custom") {
            $("#aftermin").val(Math.floor(joule / $("#aftercustom").val() / 60));
            $("#aftersec").val(Math.round(joule / $("#aftercustom").val() % 60));
        } else {
            $("#aftermin").val(Math.floor(joule / $("#afterwatt").val() / 60));
            $("#aftersec").val(Math.round(joule / $("#afterwatt").val() % 60));
        }
    });
    $("#watt").change(function () {
        if ($("#watt").val() == "custom") {
            $("#custom").show();
            $("#w").show();
        } else {
            $("#custom").hide();
            $("#w").hide();
        }
    });
    $("#afterwatt").change(function () {
        if ($("#afterwatt").val() == "custom") {
            $("#aftercustom").show();
            $("#afterw").show();
        } else {
            $("#aftercustom").hide();
            $("#afterw").hide();
        }
    });
});
