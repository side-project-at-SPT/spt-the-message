package utils

import (
	"fmt"
	"github.com/spf13/viper"
)

var Config *viper.Viper

func InitConfig() {
	Config = initViper()
}

func initViper() *viper.Viper {
	env := "dev"
	configPath := "./service/config"
	configFileName := "config"
	fmt.Printf("ENV: %s, CONFIG_DIR: %s, CONFIG_ENV", env, configPath, configFileName+".json")

	v := viper.New()

	v.SetConfigType("yaml")
	v.SetConfigName(configFileName)
	v.AddConfigPath(configPath)

	if err := v.ReadInConfig(); err == nil {
		fmt.Println("Using config file:", v.AllSettings())
	} else {
		fmt.Println("Error:", err)
		panic(err)
	}

	return v
}
