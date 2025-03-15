const data = [
    ["H", "水素", 1, 1], ["He", "ヘリウム", 1, 18], ["Li", "リチウム", 2, 1], ["Be", "ベリリウム", 2, 2],
    ["B", "ホウ素", 2, 13], ["C", "炭素", 2, 14], ["N", "窒素", 2, 15], ["O", "酸素", 2, 16],
    ["F", "フッ素", 2, 17], ["Ne", "ネオン", 2, 18], ["Na", "ナトリウム", 3, 1], ["Mg", "マグネシウム", 3, 2],
    ["Al", "アルミニウム", 3, 13], ["Si", "ケイ素", 3, 14], ["P", "リン", 3, 15], ["S", "硫黄", 3, 16],
    ["Cl", "塩素", 3, 17], ["Ar", "アルゴン", 3, 18], ["K", "カリウム", 4, 1], ["Ca", "カルシウム", 4, 2],
    ["Sc", "スカンジウム", 4, 3], ["Ti", "チタン", 4, 4], ["V", "バナジウム", 4, 5], ["Cr", "クロム", 4, 6],
    ["Mn", "マンガン", 4, 7], ["Fe", "鉄", 4, 8], ["Co", "コバルト", 4, 9], ["Ni", "ニッケル", 4, 10],
    ["Cu", "銅", 4, 11], ["Zn", "亜鉛", 4, 12], ["Ga", "ガリウム", 4, 13], ["Ge", "ゲルマニウム", 4, 14],
    ["As", "ヒ素", 4, 15], ["Se", "セレン", 4, 16], ["Br", "臭素", 4, 17], ["Kr", "クリプトン", 4, 18],
    ["Rb", "ルビジウム", 5, 1], ["Sr", "ストロンチウム", 5, 2], ["Y", "イットリウム", 5, 3], ["Zr", "ジルコニウム", 5, 4],
    ["Nb", "ニオブ", 5, 5], ["Mo", "モリブデン", 5, 6], ["Tc", "テクネチウム", 5, 7], ["Ru", "ルテニウム", 5, 8],
    ["Rh", "ロジウム", 5, 9], ["Pd", "パラジウム", 5, 10], ["Ag", "銀", 5, 11], ["Cd", "カドミウム", 5, 12],
    ["In", "インジウム", 5, 13], ["Sn", "スズ", 5, 14], ["Sb", "アンチモン", 5, 15], ["Te", "テルル", 5, 16],
    ["I", "ヨウ素", 5, 17], ["Xe", "キセノン", 5, 18], ["Cs", "セシウム", 6, 1], ["Ba", "バリウム", 6, 2],
    ["La", "ランタン", 6, 3], ["Ce", "セリウム", 6, 3], ["Pr", "プラセオジム", 6, 3], ["Nd", "ネオジム", 6, 3],
    ["Pm", "プロメチウム", 6, 3], ["Sm", "サマリウム", 6, 3], ["Eu", "ユウロピウム", 6, 3], ["Gd", "ガドリニウム", 6, 3],
    ["Tb", "テルビウム", 6, 3], ["Dy", "ジスプロシウム", 6, 3], ["Ho", "ホルミウム", 6, 3], ["Er", "エルビウム", 6, 3],
    ["Tm", "ツリウム", 6, 3], ["Yb", "イッテルビウム", 6, 3], ["Lu", "ルテチウム", 6, 3], ["Hf", "ハフニウム", 6, 4],
    ["Ta", "タンタル", 6, 5], ["W", "タングステン", 6, 6], ["Re", "レニウム", 6, 7], ["Os", "オスミウム", 6, 8],
    ["Ir", "イリジウム", 6, 9], ["Pt", "白金", 6, 10], ["Au", "金", 6, 11], ["Hg", "水銀", 6, 12],
    ["Tl", "タリウム", 6, 13], ["Pb", "鉛", 6, 14], ["Bi", "ビスマス", 6, 15], ["Po", "ポロニウム", 6, 16],
    ["At", "アスタチン", 6, 17], ["Rn", "ラドン", 6, 18], ["Fr", "フランシウム", 7, 1], ["Ra", "ラジウム", 7, 2],
    ["Ac", "アクチニウム", 7, 3], ["Th", "トリウム", 7, 3], ["Pa", "プロトアクチニウム", 7, 3], ["U", "ウラン", 7, 3],
    ["Np", "ネプツニウム", 7, 3], ["Pu", "プルトニウム", 7, 3], ["Am", "アメリシウム", 7, 3], ["Cm", "キュリウム", 7, 3],
    ["Bk", "バークリウム", 7, 3], ["Cf", "カリホルニウム", 7, 3], ["Es", "アインスタイニウム", 7, 3], ["Fm", "フェルミウム", 7, 3],
    ["Md", "メンデレビウム", 7, 3], ["No", "ノーベリウム", 7, 3], ["Lr", "ローレンシウム", 7, 3], ["Rf", "ラザホージウム", 7, 4],
    ["Db", "ドブニウム", 7, 5], ["Sg", "シーボーギウム", 7, 6], ["Bh", "ボーリウム", 7, 7], ["Hs", "ハッシウム", 7, 8],
    ["Mt", "マイトネリウム", 7, 9], ["Ds", "ダームスタチウム", 7, 10], ["Rg", "レントゲニウム", 7, 11], ["Cn", "コペルニシウム", 7, 12],
    ["Nh", "ニホニウム", 7, 13], ["Fl", "フレロビウム", 7, 14], ["Mc", "モスコビウム", 7, 15], ["Lv", "リバモリウム", 7, 16],
    ["Ts", "テネシン", 7, 17], ["Og", "オガネソン", 7, 18]
];

let mode, sorted, max, count;

window.addEventListener("load", () => {
    init();
    let select = 0;
    Array.from(document.getElementsByClassName("select")).forEach(element => {
        const id = element.value;
        element.addEventListener("click", () => {
            select = id;
            document.getElementById("buttons").style.display = "none";
            if (id == "all") {
                document.getElementById("countset").style.display = "block";
            } else {
                document.getElementById("modes").style.display = "block";
            }
            if (id == 11) {
                max = 8;
            }
            if (id == 6 || id == 9) {
                document.getElementById("modes").querySelectorAll("button")[0].setAttribute("disabled", "true");
            }
        });
    });
    document.getElementById("maxsend").addEventListener("click", () => {
        max = document.getElementById("max").value;
        if (max < 1) {
            max = 1;
        } else if (max > 118) {
            max = 118;
        }
        document.getElementById("countset").style.display = "none";
        document.getElementById("modes").style.display = "block";
    });
    Array.from(document.getElementsByClassName("mode")).forEach(element => {
        element.addEventListener("click", () => {
            mode = element.value;
            document.getElementById("modes").style.display = "none";
            document.getElementById("question").style.display = "block";
            if (mode == 0) {
                document.getElementById("grid").style.display = "block";
            }
            if (mode == 2) {
                document.getElementById("mark").style.display = "none";
            } else if (mode == 3) {
                document.getElementById("name").style.display = "none";
            }
            start(select);
        });
    });
    document.getElementById("submit").addEventListener("click", () => {
        if (count - 1 == max) {
            document.getElementById("buttons").style.display = null;
            init();
            return;
        }
        if (document.getElementById("submit").innerText == "次へ") {
            document.getElementById("rans").style.display = "none";
            document.getElementById("submit").innerText = "決定";
            ask();
            return;
        }
        document.getElementById("submit").setAttribute("disabled", "true");
        let correct = true;
        if (mode == 0 || mode == 1 || mode == 3) {
            if (document.getElementById("mark").value != data[sorted[count - 1]][0]) correct = false;
        }
        if (mode == 0 || mode == 1 || mode == 2) {
            if (document.getElementById("name").value != data[sorted[count - 1]][1]) correct = false;
        }
        const right = document.getElementById("right");
        const wrong = document.getElementById("wrong");
        if (correct) {
            right.style.display = "block";
            right.classList.add("appear");
        } else {
            wrong.style.display = "block";
            wrong.classList.add("appear");
        }
        setTimeout(() => {
            right.style.display = "none";
            wrong.style.display = "none";
            count++;
            if (correct) {
                ask();
            } else {
                document.getElementById("submit").innerText = "次へ";
                if (mode == 0 || mode == 1) {
                    document.getElementById("rans").innerText = `正解:\n${data[sorted[count - 2]][0]}\n${data[sorted[count - 2]][1]}`
                } else if (mode == 2) {
                    document.getElementById("rans").innerText = `正解:\n${data[sorted[count - 2]][1]}`
                } else {
                    document.getElementById("rans").innerText = `正解:\n${data[sorted[count - 2]][0]}`
                }
                document.getElementById("rans").style.display = null;
            }
            if (count - 1 == max) {
                document.getElementById("submit").innerText = "ホームに戻る";
            }
            document.getElementById("submit").removeAttribute("disabled");
        }, 1000);
    });
});

function start(select) {
    let order = Array.from({ length: (select == "all") ? 118 : max }, (_, index) => index);
    sorted = [];
    const k = max;
    if (select == "all" && mode == 0) {
        max = max > 88 ? 88 : max;
    }
    for (let i = 0; i < k; i++) {
        const j = Math.floor(Math.random() * order.length);
        const ratio = select == "all" ? 0 : select * 10
        if (mode == 0) {
            const l = 56 <= order[j] + ratio && order[j] + ratio <= 70;
            const a = 88 <= order[j] + ratio && order[j] + ratio <= 102;
            if (l || a) {
                if (select == "all") {
                    i--;
                } else {
                    max--;
                }
                order.splice(j, 1);
            } else {
                if (select == "all") {
                    if (sorted.length == max) break;
                }
                sorted.push(order.splice(j, 1)[0]);
            }
        } else {
            sorted.push(order.splice(j, 1)[0]);
        }

    }
    if (select !== "all") {
        sorted = sorted.map(num => num + select * 10);
    }
    ask();
}

function ask() {
    document.getElementById("count").innerText = `${count}問目/${max}問`;
    document.getElementById("mark").value = null;
    document.getElementById("name").value = null;
    if (mode == 0) {
        const td = document.getElementById("qtable").querySelectorAll("td");
        td.forEach(element => {
            element.innerText = "";
            element.classList.add("grid-item");
            element.style.backgroundColor = null;
        });
        for (let i = 1; i < 16; i++) {
            const now = data[sorted[count - 1]];
            if ([1, 2, 3].some(num => num == i)) {
                const j = now[3] + (i - 2)
                if (1 <= j && j <= 18) {
                    td[i].style.fontSize = "25px";
                    td[i].innerText = j;
                }
            } else if ([4, 8, 12].some(num => num == i)) {
                const j = now[2] + i / 4 - 2;
                if (1 <= j && j <= 7) {
                    td[i].style.fontSize = "25px";
                    td[i].innerText = j;
                }
            } else {
                const y = Math.floor(i / 4) - 2;
                const x = i % 4 - 2;
                const genso = data.find(element => element[2] == now[2] + y && element[3] == now[3] + x);
                if (y == 0 && x == 0) {
                    td[i].style.backgroundColor = "skyblue";
                    td[i].style.fontSize = "25px";
                    td[i].innerText = "?";
                } else if (genso) {
                    td[i].innerText = `${genso[0]}\n${genso[1]}`;
                } else {
                    td[i].style.backgroundColor = "lightgray";
                }
            }
        }
    } else if (mode == 1) {
        document.getElementById("text").innerText = sorted[count - 1] + 1;
    } else if (mode == 2) {
        document.getElementById("text").innerText = data[sorted[count - 1]][0];
    } else if (mode == 3) {
        document.getElementById("text").innerText = data[sorted[count - 1]][1];
    }
}

function init() {
    mode, sorted = null;
    max = 10;
    count = 1;
    document.getElementById("max").value = null;
    document.getElementById("rans").style.display = "none";
    document.getElementById("submit").innerText = "決定";
    document.getElementById("question").style.display = "none";
    document.getElementById("grid").style.display = "none";
    document.getElementById("modes").style.display = "none";
    document.getElementById("countset").style.display = "none";
    document.getElementById("text").style.display = "none";
}
