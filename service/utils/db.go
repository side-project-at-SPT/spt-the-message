package utils

import (
	//"database/sql"
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

func InitDB() {
	fmt.Println("InitDB")
	dbConfig := Config.GetStringMapString("Database")
	psqlconn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", dbConfig["host"], dbConfig["port"], dbConfig["user"], dbConfig["password"], dbConfig["dbname"])

	// open database
	db, err := sql.Open("postgres", psqlconn)
	fmt.Println(db, err)
}
