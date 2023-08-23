function insert(num) {
    document.form.textarea.value = document.form.textarea.value + num;
}

function insert(symbol) {
    document.form.textarea.value = document.form.textarea.value + symbol;
}

function equal() {
    var results = document.form.textarea.value;
    document.form.textarea.value = eval(results);
}

