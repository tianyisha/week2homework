var express = require('express');
var router = express.Router();
var Mongo = require('mongodb-curd');
var db = "1701Buser";
var col_username = "username";
var col_usercontent = "usercontent";
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//查找登录注册用户
router.post('/api/getUserOne', function(req, res, next) {
    let name = req.body.name;
    let pass = req.body.pass;
    Mongo.find(db, col_username, { "name": name, "pass": pass }, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "查找用户失败",
            })
        } else {
            res.json({
                code: 1,
                msg: "查找用户成功",
                data: result
            })
        }
    })
});
//查找用户对应的信息
router.post('/api/getUserContentOne', function(req, res, next) {
    let id = req.body.id;
    Mongo.find(db, col_usercontent, { "id": id }, function(result) {
        if (!result) {
            res.json({
                code: 0,
                msg: "查找失败",
            })
        } else {
            res.json({
                code: 1,
                msg: "查找成功",
                data: result
            })
        }
    })
});

module.exports = router;