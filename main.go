package main

import (
	"github.com/gin-gonic/gin"

)

func main() {
	server := gin.Default()
    server.Static("/css", "./public/css")
    server.Static("/js", "./public/js")
    server.Static("/img", "./public/img")
	server.LoadHTMLGlob("public/*.html")

	server.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", gin.H{})
	})

	server.NoRoute(func(c *gin.Context) {
		c.HTML(200, "error.html", gin.H{})
	})

	server.Run("localhost:9000")
}
