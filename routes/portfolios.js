const express = require("express");
const { checkJwt } = require("../controllers/auth");
const router = express.Router();
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolios");

router.get("", getPortfolios);
router.get("/:id", getPortfolioById);

router.post("", checkJwt ,createPortfolio);
router.patch("/:id", checkJwt, updatePortfolio);
router.delete("/:id", deletePortfolio);
// router.delete('/:id', checkJwt, checkRole('admin'), deletePortfolio);

module.exports = router;
