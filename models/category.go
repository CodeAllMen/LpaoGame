/**
  create by yy on 2020/4/13
*/

package models

import (
	"github.com/astaxie/beego/orm"
)

type CategoryModel struct {
	Id   int    `orm:"pk;auto;column(id)" json:"id"`
	Name string `orm:"column(name)" json:"name"`
}

func (c *CategoryModel) TableName() string  {
	return "category"
}

func getCategoryTableName() string  {
	return "category"
}

func GetCategoryList() (list []CategoryModel, err error) {
	db := orm.NewOrm()

	_, err = db.QueryTable(getCategoryTableName()).All(&list)

	return
}

func GetCategoryById(categoryId string) (category *CategoryModel, err error) {
	var (
		categoryModel CategoryModel
	)

	db := orm.NewOrm()

	err = db.QueryTable(getCategoryTableName()).Filter("id", categoryModel).One(&categoryModel)

	category = &categoryModel

	return
}