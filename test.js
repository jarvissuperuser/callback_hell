var m = require("./sqlite_con_man");


var man =  new m("stores/app.db");
(man.multiquery(["CREATE TABLE IF NOT EXISTS tst(id integer, newf varchar)"," select datetime('now') as today"]));

man.e.on('done',function(){
	console.log(man.datamulti);
});
/*setTimeout(function(){
console.log(man.datamulti);
},400);
*/
