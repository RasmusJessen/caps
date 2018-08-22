module.exports = function (app) {
    const joinProducts = `
    SELECT produkter.id, produkter.navn, produkter.info, produkter.pris, kategori.navn
      AS kategori 
      FROM produkter 
      INNER JOIN kategori 
      ON produkter.fk_kategori = kategori.id
    `;

    app.get('/products', function(req, res) {
        db.query(joinProducts, function (err, data) {
            if (err) console.log(err);
            res.send(data);
        })
    })
}