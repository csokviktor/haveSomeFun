package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

type Product struct {
	ProductID      int    `json:"productId"`
	Manufacturer   string `json:"manufacturer"`
	Sku            string `json:"sku"`
	Upc            string `json:"upc"`
	PricePerUnit   string `json:"pricePerUnit"`
	QuantityOnHand int    `json:"quantityOnHand"`
	ProductName    string `json:"productName"`
}

func getNextID() int {
	highestID := -1
	for _, product := range productList {
		if highestID < product.ProductID {
			highestID = product.ProductID
		}
	}
	return highestID + 1
}

var productList []Product

func init() {
	productsJON := `[
		{
			"productId": 1,
			"manufacturer": "Johns-Jenkins",
			"sku": "asdqewqew",
			"upc": "32eqweqwda",
			"pricePerUnit": "234.1",
			"quantityOnHand": 231231,
			"productName": "sa"
		},
		{
			"productId": 2,
			"manufacturer": "Johns-Jenkins",
			"sku": "asdqewqew",
			"upc": "32eqweqwda",
			"pricePerUnit": "234.1",
			"quantityOnHand": 231231,
			"productName": "nyika"
		}
	]`
	err := json.Unmarshal([]byte(productsJON), &productList)
	if err != nil {
		log.Fatal(err)
	}
}

func productsHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		productsJson, err := json.Marshal(productList)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(productsJson)
	case http.MethodPost:
		var newProduct Product
		bodyBytes, err := ioutil.ReadAll(r.Body)

		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		err = json.Unmarshal(bodyBytes, &newProduct)

		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		if newProduct.ProductID != 0 {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		newProduct.ProductID = getNextID()
		productList = append(productList, newProduct)

		w.WriteHeader(http.StatusCreated)
		return
	}

}

func main() {
	http.HandleFunc("/products", productsHandler)
	http.ListenAndServe(":5000", nil)
}
