package routers

import (
	"github.com/MobileCPX/LpaoGame/controllers"
	"github.com/MobileCPX/LpaoGame/controllers/ae"
	"github.com/MobileCPX/LpaoGame/controllers/lancio_it"
	"github.com/MobileCPX/LpaoGame/controllers/slovenia"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/game/:game_id", &controllers.MainController{}, "Get:PlayGame")
	beego.Router("/logout", &controllers.MainController{}, "Get:Logout")

	// 页面
	beego.Router("/lp", &controllers.LpPage{})
	beego.Router("/lpage", &ae.SubPage{}, "*:Lp")
	beego.Router("/tan", &ae.SubPage{}, "*:Tan")
	beego.Router("/confirm", &ae.SubPage{}, "*:Confirm")
	beego.Router("/tnc", &ae.SubPage{}, "*:Condition")
	beego.Router("/help", &ae.SubPage{}, "*:Help")
	beego.Router("/privacy", &ae.SubPage{}, "*:Privacy")

	beego.Router("/sv/lp", &slovenia.SubPage{}, "*:Lp")
	beego.Router("/sv/tan", &slovenia.SubPage{}, "*:Tan")
	beego.Router("/sv/confirm", &slovenia.SubPage{}, "*:Confirm")
	beego.Router("/sv/tnc", &slovenia.SubPage{}, "*:Condition")
	beego.Router("/sv/help", &slovenia.SubPage{}, "*:Help")
	beego.Router("/sv/privacy", &slovenia.SubPage{}, "*:Privacy")
	// beego.Router("/h", &controllers.HelpPage{})
	// beego.Router("/p", &controllers.PrivacyPage{})
	// beego.Router("/t", &controllers.TNCPage{})

	// Lancio 意大利服务
	beego.Router("/gbb/?:lancio_it", &lancio_it.HelpHomePageControllers{})

	// H3G条款
	beego.Router("/TC", &lancio_it.HelpHomePageControllers{}, "Get:TCPage")
	beego.Router("/INFO", &lancio_it.HelpHomePageControllers{}, "Get:InfoPage")
	beego.Router("/TERMINALI", &lancio_it.HelpHomePageControllers{}, "Get:TerminaPage")

	beego.Router("/success/unsub", &lancio_it.LancioITUnsubController{}, "Get:UnsubSuccessPage")
	beego.Router("/unsub/wifi", &lancio_it.LancioITUnsubController{}, "Get:UnsubMsisdn")

	beego.Router("/sub/req", &lancio_it.LancioITUnsubController{}, "Get:StartSub")
}
