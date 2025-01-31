package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/swaggo/files"
	"github.com/swaggo/gin-swagger" // gin-swagger middleware
	"net/http"
	_ "spt-the-message/docs"
	routes "spt-the-message/routers"
	"spt-the-message/utils"
)

func init() {
	utils.InitConfig()
	utils.InitDB()
	utils.GoogleAuth()
}

func main() {
	serverConfig := utils.Config.GetStringMapString("Server")

	gin.SetMode(serverConfig["mode"])
	router := gin.New()
	router.Use(cors.Default())

	router.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})

	v1Route := router.Group("/v1")
	routes.UserRouter(v1Route)

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	// TODO: request id middleware
	err := router.Run(serverConfig["port"])
	if err != nil {
		return
	}
}
