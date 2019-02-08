from bs4 import BeautifulSoup
import requests
from splinter import Browser
import pandas as pd 
from time import sleep
import pymongo

#scrape

def init_browser():
    executable_path = {'executable_path': 'chromedriver.exe'}
    return Browser('chrome', **executable_path, headless=False)

def scrape():
    # call in browser
    browser = init_browser()
    #create dictionary for all scraped data
    kc = {}

    #kc data
    url = "http://www.city-data.com/city/Kansas-City-Missouri.html"
    browser.visit(url)

    html = browser.html
    soup = BeautifulSoup(html, 'html.parser')

    kc["city"] = soup.find("div", class_="container-fluid").find("h1", class_="city").find("span").get_text()
    kc["population"] = soup.find('div', class_="container-fluid").find("section", class_="city-population").get_text()
    kc["costOfLiving"] = soup.find('div', class_="container-fluid").find("section", class_="cost-of-living-index").get_text()
    
    kc["nickNames"] = soup.find('div', class_="container-fluid").find("section", class_="city-nicknames").get_text()

    #twitter
    kansasCity_twitter = "https://twitter.com/KCMO"

    # browser.visit(kansasCity_twitter)
    response = requests.get(kansasCity_twitter)
    soup = BeautifulSoup(response.text, 'lxml')

    results = soup.find_all('p', class_='TweetTextSize')
    kcTweets = results[0].text
    
    kc["kcTweets"] = kcTweets
    
   #kcPictures

    kc1 = "https://wallpapercave.com/wp/wp1884170.jpg"
    kc2 = "https://wallpapercave.com/wp/wp1884177.jpg"

    kc_images_urls = [
        {"title": "KC skyline",  "img_url": kc1},
        {"title": "KC skyline2", "img_url": kc2}
    ]

    kc["kc_images_urls"] = kc_images_urls

    return kc