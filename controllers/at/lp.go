/**
  create by yy on 2020/3/19
*/

package at

import (
	"github.com/MobileCPX/PreBaseLib/splib/tracking"
	"github.com/MobileCPX/PreBaseLib/util"
	"github.com/astaxie/beego"
)

const (
	// UnsubSuccessCode 退订成功
	UnsubSuccessCode = "0"

	// MsisdnIsEmptyCode 退订电话号码为空
	MsisdnIsEmptyCode = "-1"

	// MsisdnNotExistCode 退订电话号码不存在
	MsisdnNotExistCode = "-2"

	// XMLErrorCode xml解析错误
	XMLErrorCode = "-3"

	// UnsubFaieldCode  退订失败
	UnsubFaieldCode = "-4"
)

type SubPage struct {
	beego.Controller
}

func (s *SubPage) Lp() {

	trackID := s.GetString("track")
	if trackID == "" {
		track := new(tracking.Track)
		track.ServiceID = "113142"
		track.ServiceName = "FNGAME"
		track.IP = util.GetIPAddress(s.Ctx.Request)
		track.UserAgent = s.Ctx.Request.UserAgent()
		track.Refer = s.Ctx.Request.Referer()
		track.ClickTime, _ = util.GetNowTime()
		track.AffName = "Test"
		trackID = track.RequestInsertTrack("http://pd.argameloft.com/aff/click")

		s.Redirect("http://pd.argameloft.com/identify?track="+trackID, 302)
		s.StopRun()
	}

	// s.Data["URL"] = "http://pd.argameloft.com/start-sub?track=" + trackID
	s.Data["URL"] = "http://pd.argameloft.com/identify?track=" + trackID

	subID := s.Ctx.GetCookie("user")
	if subID != "" {
		s.Redirect("/", 302)
		s.StopRun()
	}

	s.TplName = "at_new/lp.html"
}

func (s *SubPage) Tan() {
	s.TplName = "at/tan.html"
}

func (s *SubPage) Confirm() {
	s.TplName = "at/confirm.html"
}

func (s *SubPage) Condition() {
	s.TplName = "at/tns.html"
}

func (s *SubPage) Help() {
	s.TplName = "at/help.html"
}

func (s *SubPage) Privacy() {
	s.TplName = "at/privacy.html"
}

func (s *SubPage) AGB() {
	s.TplName = "at_new/AGB.html"
}

func (s *SubPage) Impressum() {
	s.TplName = "at_new/IMPRESSUM.html"
}

func (s *SubPage) Datenschutz() {
	s.TplName = "at_new/Datenschutz.html"
}

func (s *SubPage) KONTAKT() {
	s.TplName = "at_new/KONTAKT.html"
}

func (s *SubPage) KUNDIGUNG() {
	s.TplName = "at_new/KUNDIGUNG.html"
}

func (s *SubPage) Rucktrittsrechts() {
	s.TplName = "at_new/Rucktrittsrechts.html"
}

func (s *SubPage) FAQ() {
	s.TplName = "at_new/FAQ.html"
}

func (s *SubPage) Welcome() {
	s.TplName = "at_new/welcome.html"
}

// 电话号码输入页面
func (s *SubPage) InputMsisdnPage() {
	trackID := s.GetString("track")
	s.Data["trackID"] = trackID
	s.TplName = "at_new/msisdn_input.html"
}

func (s *SubPage) Unsub() {
	code := s.GetString("status")
	if code == UnsubSuccessCode {
		s.Data["text"] = "Ihr Abonnement wurde erfolgreich gekündigt"
		s.Data["URL"] = "/"
	} else {
		s.Data["text"] = "Die Kündigung des Abonnements ist fehlgeschlagen"
		s.Data["failed_desc"] = "Sie können Ihr Abonnement per E-Mail an info@mobileinfo.cc oder telefonisch unter 0800 100 336 (EUR 0,00/Min.) kündigen."
		s.Data["URL"] = "/"
	}
	s.TplName = "at_new/unsub_result.html"
}
