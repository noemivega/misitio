var express = require('express');
var router = express.Router();
var nombres = ['Andrea', 'Brenda','Carlos','Daniela','Eduardo', 'Fernando','Gabriela','Humberto','Ilian','Jorge'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mi primera página', name: 'Noemí Pérez Vega', list: 'Lista de nombres',nombres});
});

/*router.get('/', function(req, res, next){
  res.render('index', {title:'Lista de nombres', nombres: nombres});
});*/

router.post('/',function(req,res){
  res.send('Tengo una petición con POST');
});

router.put('/greeting', function(req,res){
  res.send('Te doy un saludo con Greeting');
});

router.delete('/hello', function(req,res){
  res.send('Te doy un saludo con DELETE');
});

module.exports = router;