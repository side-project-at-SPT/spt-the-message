package controllers

import "github.com/gin-gonic/gin"

type LoginType struct {
	Email string `json:"email"`
}

func Login(c *gin.Context) {
	login := LoginType{
		Email: c.Param("email"),
	}

	c.JSON(200, login)
	c.Done()
}
