/**
  create by yy on 2020/3/19
*/

package pl

import "github.com/astaxie/beego"

type SubPage struct {
	beego.Controller
}

func (s *SubPage) Lp() {
	s.TplName = "pl/lp.html"
}

func (s *SubPage) Tan() {
	s.TplName = "pl/tan.html"
}

func (s *SubPage) Confirm() {
	s.TplName = "pl/confirm.html"
}

func (s *SubPage) Condition() {
	s.TplName = "pl/tnc.html"
}

func (s *SubPage) Help() {
	s.TplName = "pl/help.html"
}

func (s *SubPage) Privacy() {
	s.TplName = "pl/privacy.html"
}