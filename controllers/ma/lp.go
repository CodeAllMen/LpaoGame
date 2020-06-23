/**
  create by yy on 2020/4/21
*/

package ma

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/httplib"
)

type SubPage struct {
	beego.Controller
}

func (s *SubPage) Lp() {
	trackId := s.GetString("tid")

	if trackId == "" {
		// 自动获取trackId
		trackId = getTrackId()
		s.Redirect("http://fn.3499games.com/ma/lp?tid="+trackId, 302)
		s.StopRun()
	}

	s.Data["TrackId"] = trackId
	s.TplName = "ma/lp.html"
}

func getTrackId() string {
	var (
		err      error
		response *httplib.BeegoHTTPRequest
		result   []byte
	)

	postData := make(map[string]interface{})

	postData["service_id"] = "36226-ML"
	postData["service_name"] = "MK-36226-ML"
	postData["PromoterID"] = 3
	postData["offer_id"] = 193
	postData["camp_id"] = 26
	postData["aff_name"] = "AAA"
	postData["PostbackPrice"] = 0.8

	getTrackIdUrl := "http://ml.foxseekmedia.com/aff/track"

	request := httplib.Post(getTrackIdUrl)

	if response, err = request.JSONBody(postData); err != nil {
		fmt.Println(err)
	}

	if result, err = response.Bytes(); err != nil {
		fmt.Println(err)
	}

	return string(result)
}
