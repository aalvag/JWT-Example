import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/profile", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.render("profile", { title: "Perfil", user: req.user });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/auth/login");
});

export default router;
