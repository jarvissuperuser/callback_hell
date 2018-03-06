var m = require("./app");


var man =  new m("stores/app.db");
var app = new Promise(function(resolve,reject){

	resolve();
	//resolve (man.multiquery(["CREATE TABLE IF NOT EXISTS tst(id integer, newf varchar)"," select datetime('now') as today"]));
//setTimeout(function(){
});
app.then(function(mn){
	console.log(man.datamulti,mn);
});
//},600);
