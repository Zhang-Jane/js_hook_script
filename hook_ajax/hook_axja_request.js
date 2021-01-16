const {proxy, unProxy} = require("./xhr-porxy");
let request = require("request");


request('', function (error, response, body) {
if (!error && response.statusCode == 200) {
console.log(body) // Show the HTML for the baidu homepage.
}
})

proxy({
    onRequest: (config, handler) => {
        if (config.url === '') {
            handler.resolve({
                config: config,
                status: 200,
                headers: {'content-type': 'text/text'},
                response: 'hi world'
            })
        } else {
            handler.next(config);
        }
    },
    onError: (err, handler) => {
        if (err.config.url === '') {
            handler.resolve({
                config: err.config,
                status: 200,
                headers: {'content-type': 'text/text'},
                response: 'hi world'
            })
        } else {
            handler.next(err)
        }
    },
    onResponse: (response, handler) => {
        if (response.config.url === location.href) {
            handler.reject({
                config: response.config,
                type: 'error'
            })
        } else {
            handler.next(response)
        }
    }
});
