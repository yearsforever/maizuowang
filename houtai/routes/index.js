var express = require('express');
var router = express.Router();
var http = require('http');
var MgC = require('mongodb').MongoClient;
var CONN_STR = 'mongodb://127.0.0.1:27017/client';

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//登录注册验证
router.get('/reg',function(req, res) {
  var user = req.query.user;
  var pwd = req.query.pwd;
  console.log(pwd);

  MgC.connect(CONN_STR,function(err, db) {
    if (err) {
      console.log(err)
    }else{
      var coll = db.collection('yangzhiwensb');
      coll.save(req.query,function(err, res) {
        if (err) {
          console.log(err);
          return;
        }
        db.close();
      })
    }
  } )
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 轮播图
router.get('/lunbo', function(req, res) {
  var time = new Date().getTime();

  http.get('http://m.maizuo.com/v4/api/billboard/home?__t=' + time , function(ress) {

    var html = '';
    ress.on('data', function(chunk) {
      html += chunk;
    })

    ress.on('end', function() {
      res.send(html);
    })

  })
})

// now-playing
router.get('/nowPlaying', function(req, res) {
  var time = new Date().getTime();
  var page = req.query.page? req.query.page : 1 ;
  var count = req.query.count? req.query.count : 5 ;
  var num = '&page=' + page + '&count=' + count;

  http.get('http://m.maizuo.com/v4/api/film/now-playing?__t=' + time + num , function(ress) {

    var html = '';
    ress.on('data', function(chunk) {
      html += chunk;
    })

    ress.on('end', function() {
      res.send(html);
    })

  })
})

// comingSoon
router.get('/comingSoon', function(req, res) {
  var time = new Date().getTime();
  var page = req.query.page? req.query.page : 1 ;
  var count = req.query.count? req.query.count : 5 ;
  var num = '&page=' + page + '&count=' + count;

  http.get('http://m.maizuo.com/v4/api/film/coming-soon?__t=' + time + num , function(ress) {

    var html = '';
    ress.on('data', function(chunk) {
      html += chunk;
    })

    ress.on('end', function() {
      res.send(html);
    })

  })
})

// film-detail 页面数据
router.get('/film',function(req, res) {
  var id = req.query.id;
  // console.log(id);
  var time = new Date().getTime();
  var url = 'http://m.maizuo.com/v4/api/film/'+id+'?__t=' + time ;

  http.get( url ,function(ress) {

    var html = '';
    ress.on('data', function(chunk) {
      html += chunk;
    })

    ress.on('end', function() {
      res.send(html);
    })

  })
})

// 获取电影院数据
router.get('/cinema',function(req, res) {
  //http://m.maizuo.com/v4/api/cinema?__t=1500341208806
  var time = new Date().getTime();
  var url = 'http://m.maizuo.com/v4/api/cinema?__t='+ time;
  http.get(url , function(ress) {

    var html = '';
    ress.on('data', function(chunk) {
      html += chunk;
    })

    ress.on('end', function() {
      res.send(html);
    })
  })
})



module.exports = router;
