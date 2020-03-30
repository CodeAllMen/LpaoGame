package models

import (
	"github.com/astaxie/beego/logs"
	"github.com/astaxie/beego/orm"
)

// GetGameList 获取游戏列表
func GetGameList() []Game {
	o := orm.NewOrm()
	var gameList []Game
	SQL := "select * from game order by random() "
	o.Raw(SQL).QueryRows(&gameList)
	return gameList
}

// GetGameByGameID
func GetGameByGameID(gameID string) (*Game, error) {
	game := new(Game)
	o := orm.NewOrm()
	err := o.QueryTable("game").Filter("id", gameID).One(game)
	if err != nil {
		logs.Error("GetGameByGameID 查询数据失败")
	}
	return game, err
}
