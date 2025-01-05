package utils

import (
	"fmt"
	"github.com/spf13/viper"
	"os"
)

var Config *viper.Viper

func InitConfig() {
	Config = initViper()
}

func initViper() *viper.Viper {
	env := GetEnv("ENV", "dev")
	configPath := GetEnv("CONFIG_DIR", "./service/config")
	configFileName := GetEnv("CONFIG_ENV", "config")
	fmt.Printf("ENV: %s, CONFIG_DIR: %s, CONFIG_ENV", env, configPath, configFileName+".json")

	v := viper.New()

	v.SetConfigType("yaml")
	v.SetConfigName(configFileName)
	v.AddConfigPath(configPath)

	if err := v.ReadInConfig(); err == nil {
		fmt.Println("Using config file:", v.ConfigFileUsed())
	} else {
		fmt.Println("Error:", err)
		panic(err)
	}

	return v
}

func GetEnv(key, defaultValue string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return defaultValue
}
