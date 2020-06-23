/**
  create by yy on 2020/3/19
*/

package ksa

import "github.com/astaxie/beego"

type SubPage struct {
	beego.Controller
}

func (s *SubPage) Lp() {
	s.TplName = "ksa/lp.html"
}

func (s *SubPage) Tan() {
	s.TplName = "ksa/tan.html"
}

func (s *SubPage) Confirm() {
	s.TplName = "ksa/confirm.html"
}

func (s *SubPage) Condition() {
	s.TplName = "ksa/tnc.html"
}

func (s *SubPage) Help() {
	s.TplName = "ksa/help.html"
}

func (s *SubPage) Privacy() {
	s.TplName = "ksa/privacy.html"
}