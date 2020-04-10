const zerorpc = require("zerorpc");
let client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4212");

function addChild() {
    let formula = document.querySelector('#formula');
    let result = document.querySelector('#result');
    formula.addEventListener('input', () => {
        client.invoke("__init__", (error, res) => {})
    });
    formula.dispatchEvent(new Event('input'));
}