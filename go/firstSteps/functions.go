package main

import (
	"fmt"
)

func demo() {
	fmt.Println("Test")
	port := 3000
	_, err := startWebserver(port, 5)
	fmt.Println(err)
}

func startWebserver(port, numberOfRetries int) (int, error) {
	fmt.Println(port)
	fmt.Println(numberOfRetries)
	fmt.Println("Server started")
	return port, nil
}
