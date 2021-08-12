package main

import "fmt"

const pi = 3.14

const (
	first  = iota + 6
	second = 2 << iota
	third
	/*iota resets between constan blocks*/
)

func main() {
	/*
		Basic vars
		var i, f = 42, 3.14
		fmt.Println(i, f)

		firstName := "Viktor"
		fmt.Println(firstName)

		b := true
		fmt.Println(b)
	*/
	/*
		pointers
		var firstName *string = new(string)

		*firstName = "Sanyika"

		fmt.Println(*firstName)

		firstName := "Sanyika"
		fmt.Println(firstName)

		ptr := &firstName //point the ptr to the firstname address
		fmt.Println(ptr, *ptr)

		firstName = "Vitya"
		fmt.Println(ptr, *ptr)
	*/
	/*
		const a int = 3
		fmt.Println(a + 3)

		fmt.Println(float32(a) + 1.2)
	*/
	/*
		iota
		fmt.Println(first, second, third)
	*/
	/*
		arrays and slices
		var arr [3]int
		arr[0] = 1
		arr[1] = 2
		arr[2] = 3
		fmt.Println(arr)

		arr2 := [3]int{1, 2, 3}
		fmt.Println(arr2)

		slice := arr2[:]
		arr2[1] = 11
		slice[2] = 35 //slice is pointing to the data it is keeping
		fmt.Println(arr2, slice)
		slice := []int{0, 1, 2}
		slice = append(slice, 3, 4, 5)
		fmt.Println(slice)

		slice2 := slice[1:]
		slice3 := slice[:2]
		slice4 := slice[1:2]
		slice5 := append(slice2, slice3...)
		fmt.Println(slice2, slice3, slice4, slice5)
		type keyvalue map[string]interface{}
		keyvalueslice := make([]keyvalue, 1, 1)
		fmt.Println(keyvalueslice)
	*/

	/*
		maps
		m := map[string]int{"key": 32, "key2": 12}
		fmt.Println(m)
		fmt.Println(m["key"])

		mapOfSlices := map[int][]int{
			1: {},
			2: []int{1, 2, 3, 4, 5},
			3: []int{6, 7},
		}

		delete(mapOfSlices, 1)

		fmt.Println(mapOfSlices)
	*/

	/*
		struct
	*/
	type user struct {
		ID        int
		firstName string
		lastName  string
	}

	var u user
	u.ID = 1
	u.firstName = "Viktor"
	u.lastName = "Csok"
	fmt.Println(u)

	u2 := user{
		ID:        1,
		firstName: "Sanyi",
		lastName:  "Sanyesz",
	}
	fmt.Println(u2)

}
