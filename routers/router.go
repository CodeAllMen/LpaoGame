package routers

import (
	"github.com/MobileCPX/LpaoGame/controllers"
	"github.com/MobileCPX/LpaoGame/controllers/ae"
	"github.com/MobileCPX/LpaoGame/controllers/at"
	"github.com/MobileCPX/LpaoGame/controllers/ksa"
	"github.com/MobileCPX/LpaoGame/controllers/lancio_it"
	"github.com/MobileCPX/LpaoGame/controllers/ma"
	"github.com/MobileCPX/LpaoGame/controllers/pl"
	"github.com/MobileCPX/LpaoGame/controllers/sk"
	"github.com/MobileCPX/LpaoGame/controllers/slovenia"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/game/:game_id", &controllers.MainController{}, "Get:PlayGame")
	beego.Router("/category", &controllers.MainController{}, "Get:CategoryPage")
	beego.Router("/logout", &controllers.MainController{}, "Get:Logout")
	beego.Router("/login", &controllers.LoginController{})
	beego.Router("/user/?:method", &controllers.UserController{})

	// 页面
	beego.Router("/lp", &controllers.LpPage{})
	beego.Router("/lpage", &ae.SubPage{}, "*:Lp")
	beego.Router("/tan", &ae.SubPage{}, "*:Tan")
	beego.Router("/confirm", &ae.SubPage{}, "*:Confirm")
	beego.Router("/tnc", &ae.SubPage{}, "*:Condition")
	beego.Router("/help", &ae.SubPage{}, "*:Help")
	beego.Router("/privacy", &ae.SubPage{}, "*:Privacy")
	beego.Router("/welcome", &ae.SubPage{}, "*:Welcome")
	beego.Router("/cz/register_msisdn", &ae.SubPage{}, "*:Register")
	beego.Router("/at/register_msisdn", &ae.SubPage{}, "*:Register")
	beego.Router("/cz/confirm_sms_ajax", &ae.SubPage{}, "*:ConfirmSMSAjax")
	beego.Router("/cz/confirm_sms", &ae.SubPage{}, "*:ConfirmSMS")

	// at
	beego.Router("/at/lp", &at.SubPage{}, "*:Lp")
	beego.Router("/at/tan", &at.SubPage{}, "*:Tan")
	beego.Router("/at/confirm", &at.SubPage{}, "*:Confirm")
	beego.Router("/at/tnc", &at.SubPage{}, "*:Condition")
	beego.Router("/at/help", &at.SubPage{}, "*:Help")
	beego.Router("/at/privacy", &at.SubPage{}, "*:Privacy")
	beego.Router("/at/AGB", &at.SubPage{}, "*:AGB")
	beego.Router("/at/Impressum", &at.SubPage{}, "*:Impressum")
	beego.Router("/at/Datenschutz", &at.SubPage{}, "*:Datenschutz")
	beego.Router("/at/KONTAKT", &at.SubPage{}, "*:KONTAKT")
	beego.Router("/at/KUNDIGUNG", &at.SubPage{}, "*:KUNDIGUNG")
	beego.Router("/at/Rucktrittsrechts", &at.SubPage{}, "*:Rucktrittsrechts")
	beego.Router("/at/FAQ", &at.SubPage{}, "*:FAQ")
	beego.Router("/at/welcome", &at.SubPage{}, "*:Welcome")
	beego.Router("/at/wifi/msisdn", &at.SubPage{}, "*:InputMsisdnPage")
	beego.Router("/at/unsub-result", &at.SubPage{}, "*:Unsub")

	// pl
	beego.Router("/pl/lp", &pl.SubPage{}, "*:Lp")
	beego.Router("/pl/tan", &pl.SubPage{}, "*:Tan")
	beego.Router("/pl/confirm", &pl.SubPage{}, "*:Confirm")
	beego.Router("/pl/tnc", &pl.SubPage{}, "*:Condition")
	beego.Router("/pl/help", &pl.SubPage{}, "*:Help")
	beego.Router("/pl/privacy", &pl.SubPage{}, "*:Privacy")

	// ksa
	beego.Router("/ksa/lp", &ksa.SubPage{}, "*:Lp")
	beego.Router("/ksa/tan", &ksa.SubPage{}, "*:Tan")
	beego.Router("/ksa/confirm", &ksa.SubPage{}, "*:Confirm")
	beego.Router("/ksa/tnc", &ksa.SubPage{}, "*:Condition")
	beego.Router("/ksa/help", &ksa.SubPage{}, "*:Help")
	beego.Router("/ksa/privacy", &ksa.SubPage{}, "*:Privacy")

	// sk
	beego.Router("/sk/lp", &sk.SubPage{}, "*:Lp")
	beego.Router("/sk/terms", &sk.SubPage{}, "*:Terms")
	beego.Router("/sk/privacy", &sk.SubPage{}, "*:Privacy")
	beego.Router("/sk/help", &sk.SubPage{}, "*:Help")

	beego.Router("/sv/lp", &slovenia.SubPage{}, "*:Lp")
	beego.Router("/sv/tan", &slovenia.SubPage{}, "*:Tan")
	beego.Router("/sv/confirm", &slovenia.SubPage{}, "*:Confirm")
	beego.Router("/sv/tnc", &slovenia.SubPage{}, "*:Condition")
	beego.Router("/sv/help", &slovenia.SubPage{}, "*:Help")
	beego.Router("/sv/privacy", &slovenia.SubPage{}, "*:Privacy")
	// beego.Router("/h", &controllers.HelpPage{})
	// beego.Router("/p", &controllers.PrivacyPage{})
	// beego.Router("/t", &controllers.TNCPage{})

	// 泰国lp

	// Lancio 意大利服务
	beego.Router("/gbb/?:lancio_it", &lancio_it.HelpHomePageControllers{})

	// H3G条款
	beego.Router("/TC", &lancio_it.HelpHomePageControllers{}, "Get:TCPage")
	beego.Router("/INFO", &lancio_it.HelpHomePageControllers{}, "Get:InfoPage")
	beego.Router("/TERMINALI", &lancio_it.HelpHomePageControllers{}, "Get:TerminaPage")

	beego.Router("/success/unsub", &lancio_it.LancioITUnsubController{}, "Get:UnsubSuccessPage")
	beego.Router("/unsub/wifi", &lancio_it.LancioITUnsubController{}, "Get:UnsubMsisdn")

	beego.Router("/sub/req", &lancio_it.LancioITUnsubController{}, "Get:StartSub")

	beego.Router("/ma/lp", &ma.SubPage{}, "Get:Lp")

	beego.Router("/help/divide_category", &controllers.HelpController{}, "Get:DivideCategory")
}
