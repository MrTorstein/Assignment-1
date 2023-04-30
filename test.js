function func() {
    fetch("./Poeng.txt").then(x => x.text()).then(y => let varible = y);
    alert(varible);
};
