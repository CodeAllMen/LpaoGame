/**
  create by yy on 2020/3/19
*/

package ae

import (
	"github.com/MobileCPX/LpaoGame/models"
	"github.com/astaxie/beego"
)

type SubPage struct {
	beego.Controller
}

func (s *SubPage) Lp() {
	// 获取 track_id
	trackId := s.GetString("tid")

	// 如果 trackId 不存在，则 获取
	if trackId == "" {
	}

	s.Data["TrackId"] = trackId

	s.TplName = "ae/lp.html"
}

func (s *SubPage) Tan() {
	// 获取 track_id
	trackId := s.GetString("tid")
	s.Data["TrackId"] = trackId
	s.Data["service_name"] = "FNGame"

	s.TplName = "ae/tan.html"
}

func (s *SubPage) Confirm() {
	s.TplName = "ae/confirm.html"
}

func (s *SubPage) Condition() {
	s.TplName = "ae/tnc.html"
}

func (s *SubPage) Help() {
	s.TplName = "ae/help.html"
}

func (s *SubPage) Privacy() {
	s.TplName = "ae/privacy.html"
}

func (s *SubPage) Welcome() {
	s.TplName = "ae/welcome.html"
}

func (s *SubPage) ConfirmSMSAjax() {
	msisdn := s.GetString("msisdn")

	uid := models.CheckUser(msisdn)
	if uid == "" {
		s.Data["json"] = failedReply("Zkontrolujte svou SMS a dokončete registraci")
	} else {
		s.Data["json"] = successReply("")
	}

	s.ServeJSON()
}

func (s *SubPage) ConfirmSMS() {
	msisdn := s.GetString("msisdn")
	s.Data["Msisdn"] = msisdn
	s.SetSession("user", msisdn)
	s.TplName = "ae/confirm_sms.html"
}

func (s *SubPage) Register() {
	msisdn := s.GetString("msisdn")

	// 将电话号码或者那个id存到数据库
	user := models.Users{
		UserName: msisdn,
		Password: msisdn,
		Sp:       "Dimoco",
		Country:  "CZ",
	}
	models.RegistereUser(user)

	s.Data["json"] = msisdn
	s.ServeJSON()
}

type reply struct {
	Status int    `json:"status"`
	Desc   string `json:"desc"`
}

func successReply(desc string) *reply {
	return &reply{
		Status: 1,
		Desc:   desc,
	}
}

func failedReply(desc string) *reply {
	return &reply{
		Status: 0,
		Desc:   desc,
	}
}
