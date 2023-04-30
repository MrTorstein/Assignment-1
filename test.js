function func() {
    fetch("./Poeng.txt").then(x => x.text()).then(y => alert(y));
};