var init = require("sqlite3").verbose();
var e = require('events').EventEmitter();
var db = null;
var qry = "";
var datamulti = [];
var counter= 0;
// its going to be terminal app for now

var argv = "";

var manager = function(path_name){
	db = new init.Database(path_name);
	e.on('res_done', this.listenercb);
};

manager.prototype.data = {};
manager.prototype.datamulti = [];
manager.prototype.list = [];
manager.prototype.qry = "";
manager.prototype.listenercb= function(data){
	counter++;
	console.log(data);
	datamulti.push(data.detail);
};
manager.prototype.listenercdn = null;
/**
 @var [] lst 
*/
manager.prototype.multiquery = function(lst)
{
	var p = null;
	var selff = this;
	this.list = lst;
		lst.forEach((qy)=>
		{
				qry =  qy;
				this.transaction(qry)
		});
};

manager.prototype.transaction = function(qry)
{
	db.all(qry,(err,row)=>{
		if (err) console.log(err);
		e.emit("res_done",{detail:row});
	});
};
module.exports = manager;


