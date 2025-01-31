package services

import (
	"fmt"
	"spt-the-message/utils"
)

func GetGoogleAuthUrl() {
	url := utils.GoogleAuthConfig.AuthCodeURL("state")
	fmt.Print(url)
}
