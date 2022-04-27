var count = 0;
document
    .getElementById("click")
    .addEventListener("click", throttling(makeApiCall, 1000));

function makeApiCall() {
    console.log("api in Progress");
};

function throttling(makeApiCall, wait) {
    let lastcall = 0;

    return function () {
        console.log(count++);
        if (Date.now() - lastcall > wait) {
            lastcall = Date.now();
            makeApiCall.apply(this, arguments);
        }
    };
}