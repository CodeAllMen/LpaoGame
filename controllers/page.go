package controllers

import (
	"github.com/astaxie/beego"

	"fmt"
	"github.com/astaxie/beego/logs"
	"io/ioutil"
	"net/http"
	"strings"
)

type LpPage struct {
	beego.Controller
}

func (c *LpPage) Get() {

	URL := "http://cpx5.allcpx.com:8088/returnid?type=at_gogame_144"
	requestURL := strings.Split(c.Ctx.Request.URL.String(), "?")

	if len(requestURL) == 2 {
		URL = URL + "&" + requestURL[1]
	}
	fmt.Println(URL)
	req, err := http.Get(URL)
	if err != nil {
		logs.Error(err.Error())
		c.Ctx.WriteString("ERROR")
		return
	}
	defer req.Body.Close()
	body, _ := ioutil.ReadAll(req.Body)
	fmt.Println(string(body))
	c.Data["ptxid"] = string(body)

	c.TplName = "it/lp.html"
}

type HelpPage struct {
	beego.Controller
}

func (this *HelpPage) Get() {
	this.TplName = "it/help.html"
}

type PrivacyPage struct {
	beego.Controller
}

func (this *PrivacyPage) Get() {
	this.TplName = "it/privacy.html"
}

type TNCPage struct {
	beego.Controller
}

func (this *TNCPage) Get() {
	this.TplName = "it/tnc.html"
}
