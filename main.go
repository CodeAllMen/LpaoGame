package main

import (
	_ "github.com/MobileCPX/LpaoGame/initial"
	_ "github.com/MobileCPX/LpaoGame/routers"
	"github.com/astaxie/beego"
)

func main() {
	// models.AddVideo()
	beego.Run()
}
