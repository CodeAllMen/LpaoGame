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

func GetGameListByCategory(categoryId string) (list []Game, err error) {
	db := orm.NewOrm()

	_, err = db.QueryTable("game").Filter("category_id", categoryId).All(&list)

	return
}

func UpdateGameCategory(gameId int64, categoryId int) (err error) {

	db := orm.NewOrm()

	user := Game{
		ID: gameId,
	}

	user.CategoryId = categoryId

	_, err = db.Update(&user, "category_id")

	return

}
