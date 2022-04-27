const getData = () => {
    //Api Calls 
    console.log("Fetching Data...")
}

const debounceMethod = function (func, delay) {
    let timer;
    return function () {
        // let context = this;
        // let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            // getData.apply(context, args)
            getData()
        }, delay)
    }
}

const myFunction = debounceMethod(getData, 500)