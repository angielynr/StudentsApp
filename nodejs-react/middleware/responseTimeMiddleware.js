// responseTimeMiddleware.js

function responseTimeMiddleware(req, res, next) {
    const startTime = Date.now(); // Start time in milliseconds

    res.on("finish", () => {
        const endTime = Date.now(); // End time in milliseconds
        const responseTime = endTime - startTime; // Response time in milliseconds
        const responseTimeInSeconds = responseTime / 1000; // Response time in seconds

        console.log(
            `-\nRequest Method: ${req.method}\nRequest URL: ${req.url}\nResponse Time: ${responseTimeInSeconds} seconds`
        );
    });

    next();
}

module.exports = responseTimeMiddleware;
