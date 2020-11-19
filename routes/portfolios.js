const express = require("express");
const router = express.Router();
// const {} = require('../controllers/auth');
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolios");

router.get("", getPortfolios);
router.get("/:id", getPortfolioById);

router.post("", createPortfolio);
router.patch("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);
// router.delete('/:id', checkJwt, checkRole('admin'), deletePortfolio);

module.exports = router;
