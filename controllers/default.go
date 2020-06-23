package controllers

import (
	"fmt"
	"github.com/MobileCPX/LpaoGame/models"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
)

type MainController struct {
	beego.Controller
}

func (c MainController) Prepare() {
	var (
		err          error
		categoryList []models.CategoryModel
	)

	if categoryList, err = models.GetCategoryList(); err != nil {
		fmt.Println(err)
	}

	c.Data["CategoryList"] = categoryList
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

func (c *MainController) CategoryPage() {
	var (
		err      error
		gameList []models.Game
		category *models.CategoryModel
	)

	categoryId := c.GetString("category_id")
	fmt.Println(categoryId)

	if gameList, err = models.GetGameListByCategory(categoryId); err != nil {
		fmt.Println(err)
	}

	if category, err = models.GetCategoryById(categoryId); err != nil {
		fmt.Println(err)
	}

	c.Data["GameList"] = gameList
	c.Data["Title"] = category.Name

	c.TplName = "category.html"
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


	// c.Redirect(game.GameURL, 302)
	if c.GetSession("user") != nil {

		msisdn := c.GetSession("user").(string)

		uid := models.CheckUser(msisdn)

		if uid == "" {
			c.Redirect("/login", 302)
			c.StopRun()
		}

		if err != nil {
			gameList := models.GetGameList()
			c.Data["GameList"] = gameList
			c.TplName = "index.html"
		} else {
			c.Redirect(game.GameURL, 302)
		}
	} else {
		c.Redirect("/login", 302)
	}

}

func (c *MainController) Logout() {
	c.Ctx.SetCookie("user", "")
	gameList := models.GetGameList()

	c.Data["GameList"] = gameList
	c.TplName = "index.html"
}
