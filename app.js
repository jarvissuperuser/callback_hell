var init = require("sqlite3").verbose();
var db = null;
var qry = "";
var datamulti = [];
// its going to be terminal app for now

var argv = "";

var manager = function(path_name){
	db = new init.Database(path_name);
};

manager.prototype.data = {};
manager.prototype.datamulti = [];
manager.prototype.list = [];
manager.prototype.qry = "";
manager.prototype.listenercb= function(data){
	con
};
manager.prototype.listenercdn = null;
/**
 @var [] lst 
*/
manager.prototype.multiquery = function(lst)
{
	this.listenercdn = new process.addLister('res_done', this.listenercb)
	var p = null;
	var selff = this;
		lst.forEach((qy)=>
		{
				qry =  qy;
				//var selff;
				p = new Promise(selff.transaction);
				p.then((row)=>{
					datamulti.push(row);
					//resolve();
				});
		});
		if (p) p.then(()=>{
			selff.datamulti = datamulti;
		});
};

manager.prototype.transaction = function(qry)
{
	db.all(qry,(err,row)=>{
		if (err) reject(err);
	});
};
module.exports = manager;


