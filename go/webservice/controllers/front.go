package controllers

import "net/http"

func RegisterControllers() {
	uc := newUserController()

	http.Handle("/", *uc)
	http.Handle("/users", *uc)
	http.Handle("/users/", *uc)
}
