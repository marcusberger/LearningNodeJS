//importanto o express
var express = require('express');
//criando objeto do express
var app = express();

app.set('view engine', 'ejs');

app.get('/produtos', function(req,res){
res.render("produtos/lista");
});

//pedindo para subir o servidor
//passando porta e função
app.listen(3000, function(){
    console.log("servidor rodando");

});
