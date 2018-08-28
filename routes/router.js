module.exports = (app) => {
    require("./home")(app);
    require("./info")(app);
    require("./user")(app);
    require("./admin")(app);
    require("./contact")(app);
    require("./hentprodukter")(app);
}