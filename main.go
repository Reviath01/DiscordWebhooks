package main

import (
	"github.com/gin-gonic/gin"

)

func main() {
	server := gin.Default()
    server.Static("/css", "./public/css")
	server.LoadHTMLGlob("public/*.html")

	server.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", gin.H{

		})
	})
	server.Run("localhost:9000")
}
