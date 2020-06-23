package models

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"strings"
	"time"

	"github.com/astaxie/beego/orm"
)

func AddVideo() {
	o := orm.NewOrm()
	b, err := ioutil.ReadFile("game_list.txt")
	if err != nil {
		fmt.Print(err)
	}
	fmt.Println(b)
	str := string(b)
	splitVideo := strings.Split(str, "\n")
	fmt.Println(splitVideo)
	for _, one := range splitVideo {
		splitOne := strings.Split(one, "####")
		if len(splitOne) == 3 {
			var game Game
			game.GameName = splitOne[1]
			game.GameURL = splitOne[0]
			game.ImageURL = "https://s3-us-west-1.amazonaws.com/static-soource/game/img/" + splitOne[2] + "/img/game.png"
			game.Stars = randStars()
			o.Insert(&game)
		}

	}
	// fmt.Println(str)
}

func RandTime() string {
	time.LoadLocation("UTC")
	rand.Seed(time.Now().UnixNano())
	result := rand.Intn(100)
	dd := result * 24
	fmt.Println(dd)
	d, _ := time.ParseDuration(fmt.Sprintf("-%dh", dd))

	formatTime := time.Now().Add(d).Format("2006-01-02")
	fmt.Println(formatTime)
	return formatTime
}

func RandPlayNum() int {
	time.LoadLocation("UTC")
	rand.Seed(time.Now().UnixNano())
	result := rand.Intn(10000) + 2000
	// strconv.Itoa(result)
	return result
}
func randStars() int {
	time.LoadLocation("UTC")
	rand.Seed(time.Now().UnixNano())
	result := rand.Intn(3) + 3
	// strconv.Itoa(result)
	return result
}
