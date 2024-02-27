$(document).ready(function () {
    $("#custom").hide();
    $("#w").hide();
    $("#aftercustom").hide();
    $("#afterw").hide();
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener("change", function () {
        changedrak();
    });
    $("input:radio").click(function () {
        let checked = $("input:radio[name='theme']:checked").val();
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
    function colorchange() {
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
    btn.click(function () {
        let joule
        if ($("#watt").val() == "custom") {
            joule = $("#custom").val() * ($("#min").val() * 60 + $("#sec").val());
        } else {
            joule = $("#watt").val() * ($("#min").val() * 60 + $("#sec").val());
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