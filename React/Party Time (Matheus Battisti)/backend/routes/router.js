const router = require("express").Router()

//services router
const servicesRouter = require("./services")

router.use("/", servicesRouter)

//parties routes

const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;