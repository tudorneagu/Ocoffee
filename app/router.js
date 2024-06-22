const express = require("express");
const router = express.Router();

const mainController = require("./controller/mainController");
const filterController = require("./controller/filterController");
const formController = require("./controller/formController")

router.get("/", mainController.homePage);
router.get("/about", mainController.aboutPage);
router.get("/catalog", mainController.catalogPage);
router.get("/product/:id", mainController.productPage);
router.get("/contact", mainController.contactPage);
router.get("/contact/sent", mainController.sentPage);
router.get("/shop", mainController.shopPage);

router.get("/catalog/categories", filterController.byCaracteristic);

router.post("/send-mail", formController.sendMail)

module.exports = router;
