package controllers

import (
	"github.com/gin-gonic/gin"
	"spt-the-message/services"
)

type LoginType struct {
	Email string `json:"email"`
}

// Login
// @Summary User Login
// @Tags User
// @version 1.0
// @produce application/json
// @param email string body true "email"
// @Success 200 string string
// @Router /v1/user/login [post]
func Login(c *gin.Context) {
	login := LoginType{
		Email: c.Param("email"),
	}

	services.GetGoogleAuthUrl()

	c.JSON(200, login)
	c.Done()
}
