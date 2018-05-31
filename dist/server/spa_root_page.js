function index(mountpath) {
    return `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <meta name="author" content="Clearbrook IT">
                        <title>Chanoch's Blog</title>

                        <link rel="stylesheet" href="/assets/plugins/ionicons/css/ionicons.min.css">

                        <link rel="stylesheet" href="/assets/css/newtheme.css">

                    </head>
                    <body>
                        <div id="root"></div>

                        <script crossorigin src="https://unpkg.com/react@16.3.1/umd/react.development.js"></script>
                        <script crossorigin src="https://unpkg.com/react-dom@16.3.1/umd/react-dom.development.js"></script>
                        
                        <script type="text/javascript" src="${mountpath}/manifest.bundle.js"></script>
                        <script type="text/javascript" src="${mountpath}/vendor.bundle.js"></script>
                        <script type="text/javascript" src="${mountpath}/index.bundle.js"></script></body>
                    </body>
                </html>`;
}

module.exports = function(mountpath) {
    const indexPage = index(mountpath);
    return function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(indexPage);
        res.end();
    }
}