package utils

import (
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

var GoogleAuthConfig *oauth2.Config

func GoogleAuth() {
	authConfig := Config.GetStringMapString("GoogleAuth")
	GoogleAuthConfig = &oauth2.Config{
		ClientID:     authConfig["clientid"],
		ClientSecret: authConfig["secret"],
		RedirectURL:  "http://localhost:3000/v1/user/callback",
		Scopes: []string{
			"https://www.googleapis.com/auth/userinfo.profile"},
		Endpoint: google.Endpoint,
	}
}
