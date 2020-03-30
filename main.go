package main

import (
	_ "github.com/MobileCPX/LpaoGame/initial"
	"github.com/MobileCPX/LpaoGame/models"

	// "github.com/MobileCPX/LpaoGame/models"
	_ "github.com/MobileCPX/LpaoGame/routers"
	"github.com/astaxie/beego"
)

func main() {
	models.AddVideo()
	beego.Run()
}
