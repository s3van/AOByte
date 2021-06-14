const ajax = function (url, method) {
    const request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            console.log('request => ', request)
            if (request.readyState !== 4) return;
            if (request.status >= 200 && request.status < 300) {
                // If successful
                resolve(request);
            } else {
                // If failed
                reject({
                    status: request.status,
                    statusText: request.statusText
                });
            }
        };

        // Setup our HTTP request
        request.open(method.type || 'GET', url, true);

        // Send the request
        request.send(null);

    });
};

const p1 = ajax('https://jsonplaceholder.typicode.com/posts', {
    type: "GET",
    headers: { 'Content-Type': 'application/json' },
    data: { "id": 1 },
})
    .then(data => console.log('Data => ', JSON.parse(data.responseText)))
    .catch(err => console.log('err => ', err))


