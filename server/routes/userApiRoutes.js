module.exports = app => {
    app.get('/api/check_auth', (req, res) => {
        res.send(req.user);
    });
}