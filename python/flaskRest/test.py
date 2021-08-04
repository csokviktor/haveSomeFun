import requests

BASE = "http://127.0.0.1:5000/"

data = [
    {"likes": 10, 'name': 'Viktor', 'views': 10},
    {"likes": 10, 'name': 'Vitya', 'views': 101},
    {"likes": 10, 'name': 'Gyula', 'views': 10}
]

for i in range(len(data)):
    res = requests.put(BASE + f"video/{i}", data[i])
    print(res.json())
    print(res.status_code)


for i in range(len(data)):
    res = requests.get(BASE + f'video/{i}')
    print(res.json())
    print(res.status_code)

for i in range(len(data)):
    res = requests.delete(BASE + f'video/{i}')
    print(res.status_code)
    print(res)
    