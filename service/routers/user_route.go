package routes

import (
	"github.com/gin-gonic/gin"
	"spt-the-message/controllers"
)

func UserRouter(route *gin.RouterGroup) {
	userRoute := route.Group("/user")
	{
		userRoute.POST("/login", controllers.Login)
	}
}
