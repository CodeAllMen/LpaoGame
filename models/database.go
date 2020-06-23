package models

import "github.com/astaxie/beego/orm"

// Game 游戏信息
type Game struct {
	ID         int64 `orm:"pk;auto;column(id)"` // 自增ID
	GameName   string
	ImageURL   string `orm:"column(image_url)"`
	GameURL    string `orm:"column(game_url)"`
	Stars      int
	CategoryId int `orm:"column(category_id)" json:"category_id"`
}

type Users struct {
	Id       int64 `orm:"pk;auto"`
	UserName string
	Password string
	Sp       string
	Country  string
}

func init() {
	orm.RegisterModel(new(Game), new(CategoryModel), new(Users))
}
