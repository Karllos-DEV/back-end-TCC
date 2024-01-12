const router = require("express").Router();

const ComentController = require("../controller/ComentController");
const { authMiddleware } = require("../helpers/authMiddleware");

router.post("/post", authMiddleware, ComentController.create);

router.get("/", authMiddleware, ComentController.read);

router.get("/:id", authMiddleware, ComentController.readById);

router.delete("/del/:id", authMiddleware, ComentController.del);

module.exports = router;