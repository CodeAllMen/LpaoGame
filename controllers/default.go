package controllers

import (
	"github.com/MobileCPX/LpaoGame/models"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	subID := c.GetString("s")
	if subID != "" {
		c.Ctx.SetCookie("user", subID, "10000000")
	}

	if c.Ctx.GetCookie("user") != "" {
		logs.Info("user cookie: ", c.Ctx.GetCookie("user"))
		c.Data["subID"] = c.Ctx.GetCookie("user")
	}

	gameList := models.GetGameList()

	c.Data["GameList"] = gameList
	c.TplName = "index.html"
}

func (c *MainController) PlayGame() {
	var (
		err  error
		game *models.Game
	)

	gameID := c.Ctx.Input.Param(":game_id")
	if game, err = models.GetGameByGameID(gameID); err != nil {
		logs.Error(err)
	}

	c.Redirect(game.GameURL, 302)
	// if c.Ctx.GetCookie("user") != "" {
	// 	if err != nil {
	// 		gameList := models.GetGameList()
	// 		c.Data["GameList"] = gameList
	// 		c.TplName = "index.html"
	// 	} else {
	// 		c.Redirect(game.GameURL, 302)
	// 	}
	// } else {
	// 	c.Redirect("https://li.lpaosub.com/sub/req?from=content", 302)
	// }

}

func (c *MainController) Logout() {
	c.Ctx.SetCookie("user", "")
	gameList := models.GetGameList()

	c.Data["GameList"] = gameList
	c.TplName = "index.html"
}
