function noop() {}
class myPromise {
    constructor(executor) {

        this.queue = []
        this.errorHandler = noop
        this.finallyHandler = noop

        try {
            executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
        } catch (e) {
            this.errorHandler(e)
        } finally {
            this.finallyHandler()
        }
        
    }

    onResolve(data) {
        this.queue.forEach(callback => {
            data = callback(data)
        })
        this.finallyHandler()
    }

    onReject(error) {
        this.errorHandler(error)
        this.finallyHandler()
    }

    then(fn) {
        this.queue.push(fn)
        return this
    }
    catch(fn) {
        this.errorHandler = fn
        return this
    }
    finally(fn) {
        this.finallyHandler = fn
        return this
    }
}

const ajax = function (url, method) {

    const request = new XMLHttpRequest();

    const promise = new myPromise((resolve,reject) => {
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
    return promise
};


//testcase1

// const p1 = ajax('https://jsonplaceholder.typicode.com/posts', {
//     type: "GET",
//     headers: { 'Content-Type': 'application/json' },
//     data: { "id": 1 },
// })
//     .then(data => console.log('Data => ', JSON.parse(data.responseText)))
//     .catch(err => console.log('err => ', err))

//testcase2

// const p2 = ajax('https://jsonplaceholder.typicode.com/posts', {
//     type: "GET", 
//     headers: {'Content-Type': 'application/json'}, 
//     data: {},
//    })
//    .then(data => data)
//    .then(data => console.log('Data => ', JSON.parse(data.responseText)))
//    .catch(err => console.log('err => ', err))

//testcase3

// const p3 = ajax(url, {
//     type:"GET",
//     headers:  {'Content-Type': 'application/json'},
//     data: {}
//    })
//    .catch(() => {})
//    .then(() => {})
//    .then(() => {})

//    Promise.all(p1, p2, p3).catch(() => {}).then(([]) => {}).then(() => {})
//    Promise.all([p1, p2, p3]).catch(() => {}).then(() => {}).then(() => {})