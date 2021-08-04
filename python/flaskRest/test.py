import requests

BASE = "http://127.0.0.1:5000/"

res = requests.put(BASE + "video/12", {"likes": 10})

print(res.json())