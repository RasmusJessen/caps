module.exports = function(app) {

    app.get('/slet', function(req, res) {
		var id = req.query.id;
		console.log('Produkt slettet ID:', req.query.id);
		db.query(
			`DELETE FROM produkter WHERE id = ${id}`
		)
		let sql = `SELECT * FROM produkter`;
        db.query(sql, [], function (req, produkter) {
        res.render('pages/ret_delete', {
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
        	res.render('pages/ret_delete', {
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
		values.push(info);
		values.push(price);
		values.push(select_catch);
		
		db.query(
			`UPDATE produkter SET navn = ?, fk_kategori = ?, info = ?, pris = ? WHERE id = ${id}`, 
			 values, function (err, rows) {
				 if(err) {
					 console.log(`UPDATE produkter SET navn = ?, fk_kategori= ?, info = ?, pris = ? WHERE id = ${id}`)
				 }
				 //res.redirect('/admin');
				 let sql = `SELECT * FROM produkter WHERE id = ${id}`;
				 db.query(sql, [], function (req, produkter) {
					 console.log(produkter);
				 res.render('pages/ret_delete', {
				 produkter: produkter,
				 message: "Produkt blev opdateret"
				 });

		 		});
			})
        });
	})
	});

	app.get('/ret_delete', function(req, res) { 
        let sql = `SELECT * FROM produkter`;
        db.query(sql, [], function (req, produkter) {
        res.render('pages/ret_delete', {
			produkter: produkter,
			message: ""
        });
    })
    });
}