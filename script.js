function insert(num) {
    document.form.textarea.value = document.form.textarea.value + num;
}

function equal() {
    var results = document.form.textarea.value;
    document.form.textarea.value = eval(results);
}
