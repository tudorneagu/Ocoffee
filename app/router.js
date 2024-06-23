const express = require("express");
const router = express.Router();

const mainController = require("./controller/mainController");
const filterController = require("./controller/filterController");
const formController = require("./controller/formController");
const cartController = require("./controller/cartController");

router.get("/", mainController.homePage);
router.get("/about", mainController.aboutPage);
router.get("/catalog", mainController.catalogPage);
router.get("/product/:id", mainController.productPage);
router.get("/contact", mainController.contactPage);
router.get("/contact/sent", mainController.sentPage);

router.get("/shop", cartController.shopPage);
router.get("/shop/add/:id", cartController.cartAdd);
router.get("/shop/remove/:id", cartController.cartRemove);

router.get("/catalog/categories", filterController.byCaracteristic);

router.post("/send-mail", formController.sendMail);

module.exports = router;
