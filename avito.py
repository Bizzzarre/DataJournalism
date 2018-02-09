import requests
from bs4 import CData
from bs4 import BeautifulSoup

url = "https://www.avito.ru/moskva/kvartiry/sdam/na_dlitelnyy_srok?pmax=40000&pmin=0&metro=7-31-110&f=550_5702-5703-5704"

session = requests.Session()
html_code = session.get(url)
soup = BeautifulSoup(html_code.text, 'html.parser')

res = []
for elem in soup.find_all("div", {"class": "item_without-autoteka"}):
    res.append([])
    for d in elem.find_all("div", {"class": "description"}):
        res[-1] += d.find("div", {"class": "item_table-header"}).h3.text.strip().split(", ")
        res[-1].append(d.find("div", {"class": "about"}).text.strip().split('\n')[0].strip())
        res[-1].append(d.find("i", {"class": "i-metro"}).attrs['title'])
        res[-1].append(d.find("i", {"class": "i-metro"}).next_element.string.strip())
        res[-1].append(d.find("i", {"class": "i-metro"}).next_element.next_element.string.strip())
        res[-1].append(d.find("i", {"class": "i-metro"}).next_element.next_element.next_element.next_element.string.strip())


print(len(res))
print(*res, sep="\n")