const express = require('express')
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const PORT = 8080

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next;
});

router.get('/', function(req, res) {
    res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req, res) {
    res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(PORT, function () {
    console.log('App listening on port 8080!!')
})