package controllers

import (
	"net/http"
	"regexp"
)

type userController struct {
	userIDPattern *regexp.Regexp
}

func (uc userController) ServeHTTP(w http.ResponseWriter, r *http.Request) { //binding to a variable so it will be a method (oop)
	w.Write([]byte("Hello from the User Controller!"))
}

//constructor
func newUserController() *userController {
	return &userController{
		userIDPattern: regexp.MustCompile(`^/user/(\d+)/?`),
	}
}
