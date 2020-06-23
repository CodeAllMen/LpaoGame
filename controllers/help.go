/**
  create by yy on 2020/4/13
*/

package controllers

import (
	"fmt"
	"github.com/MobileCPX/LpaoGame/models"
	"github.com/astaxie/beego"
	"math/rand"
	"time"
)

type HelpController struct {
	beego.Controller
}

func (h *HelpController) DivideCategory() {

	var (
		err error
	)

	// 首先获取到游戏列表
	gameList := models.GetGameList()

	for _, game := range gameList {

		// 随机生成一个6以内的随机数
		rand.Seed(time.Now().UnixNano())

		time.Sleep(10)

		if err = models.UpdateGameCategory(game.ID, rand.Intn(5)+1); err != nil {
			fmt.Println(err)
		}
	}

	h.Data["json"] = "Das"
	h.ServeJSON()
}
