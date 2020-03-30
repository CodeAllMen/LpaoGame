package models

import "github.com/astaxie/beego/orm"

// Game 游戏信息
type Game struct {
	ID       int64 `orm:"pk;auto;column(id)"` //自增ID
	GameName string
	ImageURL string `orm:"column(image_url)"`
	GameURL  string `orm:"column(game_url)"`
	Stars    int
}

func init() {
	orm.RegisterModel(new(Game))
}
