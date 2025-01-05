package main

import (
	"fmt"
	"spt-the-message/utils"
)

func main() {
	fmt.Println("Hello, World!")
	utils.InitConfig()

	//r := gin.Default()
	//r.GET("/ping", func(c *gin.Context) {
	//	c.JSON(http.StatusOK, gin.H{
	//		"message": "pong",
	//	})
	//})
	//err := r.Run()
	//if err != nil {
	//	return
	//}
}
