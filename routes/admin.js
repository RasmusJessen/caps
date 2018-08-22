module.exports = function(app) {
    app.post('/admin', function (req, res) {
		var post = req.body;
		var name = post.name;
		var price = post.price;
        var info = post.info;
        var select_catch = post.select_catch;
		var submit = post.submit;
	
		if (name != "" && price != "" && info != "" && select_catch != "") {
			
			var sql1 = `
			     INSERT INTO produkter set navn = ?, fk_kategori = ?, info = ?, pris = ?
				`;
	
			db.query(sql1, [name, price, info, select_catch, submit], function (err, message) {
				if (err) {
					console.log ("signup error: " + err);
				}
				else {
					let sql = `SELECT * FROM produkter`;
        			db.query(sql, [], function (req, produkter) {
					message = "Et produkt er blevet oprettet";
					console.log(produkter);
        			res.render('pages/admin', {
            		produkter: produkter,
					message: message
        			});
				})
				}
	
			});
		}

});

app.get('/slet', function(req, res) {
	var id = req.query.id;
	console.log('Produkt slettet ID:', req.query.id);
	db.query(
		`DELETE FROM produkter WHERE id = ${id}`
	)
	let sql = `SELECT * FROM produkter`;
	db.query(sql, [], function (req, produkter) {
	res.render('pages/admin', {
		produkter: produkter,
		message: "Produkt slettet"
	});
})
});

app.get('/ret', function(req, res) {
	let id = req.query.id;	
	let sql = `SELECT * FROM produkter WHERE id = ${id}`;
		db.query(sql, [], function (req, produkter) {
			console.log(produkter);
		res.render('pages/admin', {
		produkter: produkter,
		message: ""
});

app.post('/gem_ret', function(req, res) {
	let values = [];
	let id = req.body.id;
	let name = req.body.name;
	let price = req.body.price;
	let info = req.body.info;
	let select_catch = req.body.select_catch;
	console.log('Produkt rettet');

	values.push(name);
	values.push(select_catch);
	values.push(info);
	values.push(price);
	
	db.query(
		`UPDATE produkter SET navn = ?, fk_kategori = ?, info = ?, pris = ? WHERE id = ${id}`, 
		 values, function (err, rows) {
			 if(err) {
				 console.log(`UPDATE produkter SET navn = ?, fk_kategori= ?, info = ?, pris = ? WHERE id = ${id}`)
			 }
			 let sql = `SELECT * FROM produkter WHERE id = ${id}`;
			 db.query(sql, [], function (req, produkter) {
				 console.log(produkter);
			 res.render('pages/admin', {
			 produkter: produkter,
			 message: "Produkt blev opdateret"
			 });

			 });
		})
	});
})
});

app.get('/admin', function(req, res) { 
    let sql = `SELECT * FROM produkter`;
    db.query(sql, [], function (req, produkter) {
    res.render('pages/admin', {
        produkter: produkter,
        message: ""
    });
})
});
}