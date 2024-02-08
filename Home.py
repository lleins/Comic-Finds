import smtplib
import ssl
from email.message import EmailMessage
from tkinter import *
import os.path
from os.path import exists
import socket
import platform
from datetime import datetime
from tkinter import scrolledtext  # For Beta Version the password is always "Pass"
import os
import time
import datetime
import requests
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin


#Webscraping------------------------------------------------------------------------------------------------------------

'''
Test_Url = 'https://www.ebay.ca/sch/i.html?_from=R40&_trksid=p4432023.m570.l1313&_nkw=Comic&_sacat=0'

response = requests.get(Test_Url)
html_content = response.text

soup = BeautifulSoup(html_content, 'html.parser')



items = soup.select('.s-item')

if len(items) > 1:
    First_item = items[1]
    image_element1 = First_item.find('img')
    image_url1 = image_element1['src']

    second_item = items[2]  # Get the second item
    image_element2 = second_item.find('img')  # Find the <img> tag
    image_url2 = image_element2['src']

    Third_item = items[3]  # Get the second item
    image_element3 = Third_item.find('img')  # Find the <img> tag
    image_url3 = image_element3['src']

    Fourth_item = items[4]  # Get the second item
    image_element4 = Fourth_item.find('img')  # Find the <img> tag
    image_url4 = image_element4['src']

    Fifth_item = items[5]  # Get the second item
    image_element5 = Fifth_item.find('img')  # Find the <img> tag
    image_url5 = image_element5['src']

    Sixth_item = items[6]  # Get the second item
    image_element6 = Sixth_item.find('img')  # Find the <img> tag
    image_url6 = image_element6['src']

    Seventh_item = items[7]  # Get the second item
    image_element7 = second_item.find('img')  # Find the <img> tag
    image_url7 = image_element7['src']

    Eigth_item = items[8]  # Get the second item
    image_element8 = Eigth_item.find('img')  # Find the <img> tag
    image_url8 = image_element8['src']

else:
    print('No second item found.')
'''


#Scraping for Featured Today-------------------


url = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=marvel&Submit.x=0&Submit.y=0"

response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")

soup2 = BeautifulSoup(response.content, "html.parser")


# Find all image elements on the page
image_elements_img = soup.find_all("img")
elements_a = soup2.find_all("a")
elements_div = soup2.find_all("div")

if len(elements_a) >= 20:
    a_element1 = elements_a[3]
    a_element2 = elements_a[5]
    a_element3 = elements_a[7]
    a_element4 = elements_a[9]
    a_element5 = elements_a[11]
    a_element6 = elements_a[13]
    a_element7 = elements_a[15]
    a_element8 = elements_a[17]

    Description_1 = a_element1.get_text()
    Description_2 = a_element2.get_text()
    Description_3 = a_element3.get_text()
    Description_4 = a_element4.get_text()
    Description_5 = a_element5.get_text()
    Description_6 = a_element6.get_text()
    Description_7 = a_element7.get_text()
    Description_8 = a_element8.get_text()



else:
    ""



# Check if there is a third image element
if len(image_elements_img) >= 8:
    image_element1 = image_elements_img[4]
    image_element2 = image_elements_img[5]
    image_element3 = image_elements_img[6]
    image_element4 = image_elements_img[7]
    image_element5 = image_elements_img[8]
    image_element6 = image_elements_img[9]
    image_element7 = image_elements_img[10]
    image_element8 = image_elements_img[11]

    relative_image_url1 = image_element1.get("src")
    relative_image_url2 = image_element2.get("src")
    relative_image_url3 = image_element3.get("src")
    relative_image_url4 = image_element4.get("src")
    relative_image_url5 = image_element5.get("src")
    relative_image_url6 = image_element6.get("src")
    relative_image_url7 = image_element7.get("src")
    relative_image_url8 = image_element8.get("src")


    absolute_image_url1 = urljoin(url, relative_image_url1)
    absolute_image_url2 = urljoin(url, relative_image_url2)
    absolute_image_url3 = urljoin(url, relative_image_url3)
    absolute_image_url4 = urljoin(url, relative_image_url4)
    absolute_image_url5 = urljoin(url, relative_image_url5)
    absolute_image_url6 = urljoin(url, relative_image_url6)
    absolute_image_url7 = urljoin(url, relative_image_url7)
    absolute_image_url8 = urljoin(url, relative_image_url8)



else:
   ""



if len(elements_div) >= 20:

    div_element1 = elements_div[6]
    div_element2 = elements_div[8]
    div_element3 = elements_div[10]
    div_element4 = elements_div[12]
    div_element5 = elements_div[14]
    div_element6 = elements_div[16]
    div_element7 = elements_div[18]
    div_element8 = elements_div[20]

    Price1 = div_element1.get_text()
    Price2 = div_element2.get_text()
    Price3 = div_element3.get_text()
    Price4 = div_element4.get_text()
    Price5 = div_element5.get_text()
    Price6 = div_element6.get_text()
    Price7 = div_element7.get_text()
    Price8 = div_element8.get_text()



else:
    ""

#Scraping for Featured Today-----------------------------------------



def Desc_Position(element_list):
    j = 0 #Item Count
    counter = 0 #Counts index position of description in scraped list
    List_Index = []
    while j < 8:
        for i in element_list:
            if len(i.get_text()) == 2:  #If index is a new listing
                j += 1
                List_Index.append(counter)
                counter += 1
                if j >= 8:
                    break
            else:
                counter += 1
    return(List_Index)

def Description_Price(element_list):
    Index_List = Desc_Position(element_list)
    Info_List = []
    for i in Index_List:

        test = element_list[i + 1] #Description
        test_Reg = element_list[i + 3] #Price for Regular
        test_Sale = element_list[i + 4] #Price for on sale
        Info_List.append(test.get_text())
        if len(test_Reg.get_text()) < 20:
            Price_Reg = test_Reg.get_text()
            Price_Reg_Strip = Price_Reg.replace(" ON SALE!", "")
            Price_Reg_Strip_Sec = Price_Reg_Strip.replace("Price: ", "")

            Info_List.append(Price_Reg_Strip_Sec)
        elif len(test_Reg.get_text()) >= 20:

            Price_Sale = test_Sale.get_text()
            Price_Sale_Strip = Price_Sale.replace(" ON SALE!", "")
            Price_Sale_Strip_Sec = Price_Sale_Strip.replace("Price: ", "")

            Info_List.append(Price_Sale_Strip_Sec)    #Items are saved in 2s. Description is 1 Price is 2, Description is 3 Price is 4.....
    return Info_List




#Scraping for Avengers-------------------------------------

url_Marvel = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=Avengers"
response_Marvel = requests.get(url_Marvel)
soup_Marvel = BeautifulSoup(response_Marvel.content, "html.parser")
elements_fonts_Marvel = soup_Marvel.find_all("font")
image_elements_img_Marvel = soup_Marvel.find_all("img")

#Price/Description---------

Marvel_Info = Description_Price(elements_fonts_Marvel)

Description_1_Marvel = Marvel_Info[0]
Price_1_Marvel = Marvel_Info[1]

Description_2_Marvel = Marvel_Info[2]
Price_2_Marvel = Marvel_Info[3]

Description_3_Marvel = Marvel_Info[4]
Price_3_Marvel = Marvel_Info[5]

Description_4_Marvel = Marvel_Info[6]
Price_4_Marvel = Marvel_Info[7]

Description_5_Marvel = Marvel_Info[8]
Price_5_Marvel = Marvel_Info[9]

Description_6_Marvel = Marvel_Info[10]
Price_6_Marvel = Marvel_Info[11]

Description_7_Marvel = Marvel_Info[12]
Price_7_Marvel = Marvel_Info[13]

Description_8_Marvel = Marvel_Info[14]
Price_8_Marvel = Marvel_Info[15]

#Price/Description---------

#Images---------

if len(image_elements_img_Marvel) >= 1:
    image_element1_Marvel = image_elements_img_Marvel[20]
    image_element2_Marvel = image_elements_img_Marvel[21]
    image_element3_Marvel = image_elements_img_Marvel[22]
    image_element4_Marvel = image_elements_img_Marvel[23]
    image_element5_Marvel = image_elements_img_Marvel[24]
    image_element6_Marvel = image_elements_img_Marvel[25]
    image_element7_Marvel = image_elements_img_Marvel[26]
    image_element8_Marvel = image_elements_img_Marvel[27]

    relative_image_url1_Marvel = image_element1_Marvel.get("src")
    relative_image_url2_Marvel = image_element2_Marvel.get("src")
    relative_image_url3_Marvel = image_element3_Marvel.get("src")
    relative_image_url4_Marvel = image_element4_Marvel.get("src")
    relative_image_url5_Marvel = image_element5_Marvel.get("src")
    relative_image_url6_Marvel = image_element6_Marvel.get("src")
    relative_image_url7_Marvel = image_element7_Marvel.get("src")
    relative_image_url8_Marvel = image_element8_Marvel.get("src")


    image_url1_Marvel = urljoin(url_Marvel, relative_image_url1_Marvel)
    image_url2_Marvel = urljoin(url_Marvel, relative_image_url2_Marvel)
    image_url3_Marvel = urljoin(url_Marvel, relative_image_url3_Marvel)
    image_url4_Marvel = urljoin(url_Marvel, relative_image_url4_Marvel)
    image_url5_Marvel = urljoin(url_Marvel, relative_image_url5_Marvel)
    image_url6_Marvel = urljoin(url_Marvel, relative_image_url6_Marvel)
    image_url7_Marvel = urljoin(url_Marvel, relative_image_url7_Marvel)
    image_url8_Marvel = urljoin(url_Marvel, relative_image_url8_Marvel)


else:
   print("Too Long")
#Images---------


#Scraping for Avengers-------------------------------------



#Scraping for Batman-------------------------------------
url_Batman = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=Batman"
response_Batman = requests.get(url_Batman)
soup_Batman = BeautifulSoup(response_Batman.content, "html.parser")
elements_fonts_Batman = soup_Batman.find_all("font")
image_elements_img_Batman = soup_Batman.find_all("img")


Batman_Info = Description_Price(elements_fonts_Batman)

Description_1_Batman = Batman_Info[0]
Price_1_Batman = Batman_Info[1]

Description_2_Batman = Batman_Info[2]
Price_2_Batman = Batman_Info[3]

Description_3_Batman = Batman_Info[4]
Price_3_Batman = Batman_Info[5]

Description_4_Batman = Batman_Info[6]
Price_4_Batman = Batman_Info[7]

Description_5_Batman = Batman_Info[8]
Price_5_Batman = Batman_Info[9]

Description_6_Batman = Batman_Info[10]
Price_6_Batman = Batman_Info[11]

Description_7_Batman = Batman_Info[12]
Price_7_Batman = Batman_Info[13]

Description_8_Batman = Batman_Info[14]
Price_8_Batman = Batman_Info[15]


if len(image_elements_img_Batman) >= 1:
    image_element1_Batman = image_elements_img_Batman[20]
    image_element2_Batman = image_elements_img_Batman[21]
    image_element3_Batman = image_elements_img_Batman[22]
    image_element4_Batman = image_elements_img_Batman[23]
    image_element5_Batman = image_elements_img_Batman[24]
    image_element6_Batman = image_elements_img_Batman[25]
    image_element7_Batman = image_elements_img_Batman[26]
    image_element8_Batman = image_elements_img_Batman[27]

    relative_image_url1_Batman = image_element1_Batman.get("src")
    relative_image_url2_Batman = image_element2_Batman.get("src")
    relative_image_url3_Batman = image_element3_Batman.get("src")
    relative_image_url4_Batman = image_element4_Batman.get("src")
    relative_image_url5_Batman = image_element5_Batman.get("src")
    relative_image_url6_Batman = image_element6_Batman.get("src")
    relative_image_url7_Batman = image_element7_Batman.get("src")
    relative_image_url8_Batman = image_element8_Batman.get("src")


    image_url1_Batman = urljoin(url_Batman, relative_image_url1_Batman)
    image_url2_Batman = urljoin(url_Batman, relative_image_url2_Batman)
    image_url3_Batman = urljoin(url_Batman, relative_image_url3_Batman)
    image_url4_Batman = urljoin(url_Batman, relative_image_url4_Batman)
    image_url5_Batman = urljoin(url_Batman, relative_image_url5_Batman)
    image_url6_Batman = urljoin(url_Batman, relative_image_url6_Batman)
    image_url7_Batman = urljoin(url_Batman, relative_image_url7_Batman)
    image_url8_Batman = urljoin(url_Batman, relative_image_url8_Batman)


else:
   print("Too Long")




#Scraping for Batman-------------------------------------

#Scraping for Spiderman-------------------------------------

url_Spiderman = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=Spider-Man"
response_Spiderman = requests.get(url_Spiderman)
soup_Spiderman = BeautifulSoup(response_Spiderman.content, "html.parser")
elements_fonts_Spiderman = soup_Spiderman.find_all("font")
image_elements_img_Spiderman = soup_Spiderman.find_all("img")


Spiderman_Info = Description_Price(elements_fonts_Spiderman)

Description_1_Spiderman = Spiderman_Info[0]
Price_1_Spiderman = Spiderman_Info[1]

Description_2_Spiderman = Spiderman_Info[2]
Price_2_Spiderman = Spiderman_Info[3]

Description_3_Spiderman = Spiderman_Info[4]
Price_3_Spiderman = Spiderman_Info[5]

Description_4_Spiderman = Spiderman_Info[6]
Price_4_Spiderman = Spiderman_Info[7]

Description_5_Spiderman = Spiderman_Info[8]
Price_5_Spiderman= Spiderman_Info[9]

Description_6_Spiderman = Spiderman_Info[10]
Price_6_Spiderman = Spiderman_Info[11]

Description_7_Spiderman = Spiderman_Info[12]
Price_7_Spiderman = Spiderman_Info[13]

Description_8_Spiderman = Spiderman_Info[14]
Price_8_Spiderman = Spiderman_Info[15]

if len(image_elements_img_Spiderman) >= 1:
    image_element1_Spiderman = image_elements_img_Spiderman[20]
    image_element2_Spiderman = image_elements_img_Spiderman[21]
    image_element3_Spiderman = image_elements_img_Spiderman[22]
    image_element4_Spiderman = image_elements_img_Spiderman[23]
    image_element5_Spiderman = image_elements_img_Spiderman[24]
    image_element6_Spiderman = image_elements_img_Spiderman[25]
    image_element7_Spiderman = image_elements_img_Spiderman[26]
    image_element8_Spiderman = image_elements_img_Spiderman[27]

    relative_image_url1_Spiderman = image_element1_Spiderman.get("src")
    relative_image_url2_Spiderman = image_element2_Spiderman.get("src")
    relative_image_url3_Spiderman = image_element3_Spiderman.get("src")
    relative_image_url4_Spiderman = image_element4_Spiderman.get("src")
    relative_image_url5_Spiderman = image_element5_Spiderman.get("src")
    relative_image_url6_Spiderman = image_element6_Spiderman.get("src")
    relative_image_url7_Spiderman = image_element7_Spiderman.get("src")
    relative_image_url8_Spiderman = image_element8_Spiderman.get("src")


    image_url1_Spiderman = urljoin(url_Spiderman, relative_image_url1_Spiderman)
    image_url2_Spiderman = urljoin(url_Spiderman, relative_image_url2_Spiderman)
    image_url3_Spiderman = urljoin(url_Spiderman, relative_image_url3_Spiderman)
    image_url4_Spiderman = urljoin(url_Spiderman, relative_image_url4_Spiderman)
    image_url5_Spiderman = urljoin(url_Spiderman, relative_image_url5_Spiderman)
    image_url6_Spiderman = urljoin(url_Spiderman, relative_image_url6_Spiderman)
    image_url7_Spiderman = urljoin(url_Spiderman, relative_image_url7_Spiderman)
    image_url8_Spiderman = urljoin(url_Spiderman, relative_image_url8_Spiderman)


else:
   print("Too Long")

#Scraping for Spiderman-------------------------------------





#Scraping for Superman-------------------------------------

url_Superman = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=Superman"
response_Superman = requests.get(url_Superman)
soup_Superman = BeautifulSoup(response_Superman.content, "html.parser")
elements_fonts_Superman = soup_Superman.find_all("font")
image_elements_img_Superman = soup_Superman.find_all("img")


Superman_Info = Description_Price(elements_fonts_Superman)

Description_1_Superman = Superman_Info[0]
Price_1_Superman = Superman_Info[1]

Description_2_Superman = Superman_Info[2]
Price_2_Superman = Superman_Info[3]

Description_3_Superman = Superman_Info[4]
Price_3_Superman = Superman_Info[5]

Description_4_Superman = Superman_Info[6]
Price_4_Superman = Superman_Info[7]

Description_5_Superman = Superman_Info[8]
Price_5_Superman = Superman_Info[9]

Description_6_Superman = Superman_Info[10]
Price_6_Superman = Superman_Info[11]

Description_7_Superman = Superman_Info[12]
Price_7_Superman = Superman_Info[13]

Description_8_Superman = Superman_Info[14]
Price_8_Superman = Superman_Info[15]

if len(image_elements_img_Superman) >= 1:
    image_element1_Superman = image_elements_img_Superman[20]
    image_element2_Superman = image_elements_img_Superman[21]
    image_element3_Superman = image_elements_img_Superman[22]
    image_element4_Superman = image_elements_img_Superman[23]
    image_element5_Superman = image_elements_img_Superman[24]
    image_element6_Superman = image_elements_img_Superman[25]
    image_element7_Superman = image_elements_img_Superman[26]
    image_element8_Superman = image_elements_img_Superman[27]

    relative_image_url1_Superman = image_element1_Superman.get("src")
    relative_image_url2_Superman = image_element2_Superman.get("src")
    relative_image_url3_Superman = image_element3_Superman.get("src")
    relative_image_url4_Superman = image_element4_Superman.get("src")
    relative_image_url5_Superman = image_element5_Superman.get("src")
    relative_image_url6_Superman = image_element6_Superman.get("src")
    relative_image_url7_Superman = image_element7_Superman.get("src")
    relative_image_url8_Superman = image_element8_Superman.get("src")


    image_url1_Superman = urljoin(url_Superman, relative_image_url1_Superman)
    image_url2_Superman = urljoin(url_Superman, relative_image_url2_Superman)
    image_url3_Superman = urljoin(url_Superman, relative_image_url3_Superman)
    image_url4_Superman = urljoin(url_Superman, relative_image_url4_Superman)
    image_url5_Superman = urljoin(url_Superman, relative_image_url5_Superman)
    image_url6_Superman = urljoin(url_Superman, relative_image_url6_Superman)
    image_url7_Superman = urljoin(url_Superman, relative_image_url7_Superman)
    image_url8_Superman = urljoin(url_Superman, relative_image_url8_Superman)


else:
   print("Too Long")

#Scraping for Superman-------------------------------------



#Scraping for X-Men-------------------------------------
url_XMen = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=X-Men"
response_XMen = requests.get(url_XMen)
soup_XMen = BeautifulSoup(response_XMen.content, "html.parser")
elements_fonts_XMen = soup_XMen.find_all("font")
image_elements_img_XMen = soup_XMen.find_all("img")


XMen_Info = Description_Price(elements_fonts_XMen)

Description_1_XMen= XMen_Info[0]
Price_1_XMen = XMen_Info[1]

Description_2_XMen = XMen_Info[2]
Price_2_XMen = XMen_Info[3]

Description_3_XMen = XMen_Info[4]
Price_3_XMen = XMen_Info[5]

Description_4_XMen = XMen_Info[6]
Price_4_XMen= XMen_Info[7]

Description_5_XMen = XMen_Info[8]
Price_5_XMen = XMen_Info[9]

Description_6_XMen = XMen_Info[10]
Price_6_XMen = XMen_Info[11]

Description_7_XMen = XMen_Info[12]
Price_7_XMen = XMen_Info[13]

Description_8_XMen = XMen_Info[14]
Price_8_XMen = XMen_Info[15]

if len(image_elements_img_XMen) >= 1:
    image_element1_XMen = image_elements_img_XMen[20]
    image_element2_XMen = image_elements_img_XMen[21]
    image_element3_XMen = image_elements_img_XMen[22]
    image_element4_XMen = image_elements_img_XMen[23]
    image_element5_XMen = image_elements_img_XMen[24]
    image_element6_XMen = image_elements_img_XMen[25]
    image_element7_XMen = image_elements_img_XMen[26]
    image_element8_XMen = image_elements_img_XMen[27]

    relative_image_url1_XMen = image_element1_XMen.get("src")
    relative_image_url2_XMen = image_element2_XMen.get("src")
    relative_image_url3_XMen = image_element3_XMen.get("src")
    relative_image_url4_XMen = image_element4_XMen.get("src")
    relative_image_url5_XMen = image_element5_XMen.get("src")
    relative_image_url6_XMen = image_element6_XMen.get("src")
    relative_image_url7_XMen = image_element7_XMen.get("src")
    relative_image_url8_XMen = image_element8_XMen.get("src")


    image_url1_XMen = urljoin(url_XMen, relative_image_url1_XMen)
    image_url2_XMen = urljoin(url_XMen, relative_image_url2_XMen)
    image_url3_XMen = urljoin(url_XMen, relative_image_url3_XMen)
    image_url4_XMen = urljoin(url_XMen, relative_image_url4_XMen)
    image_url5_XMen = urljoin(url_XMen, relative_image_url5_XMen)
    image_url6_XMen = urljoin(url_XMen, relative_image_url6_XMen)
    image_url7_XMen = urljoin(url_XMen, relative_image_url7_XMen)
    image_url8_XMen = urljoin(url_XMen, relative_image_url8_XMen)


else:
   print("Too Long")
#Scraping for X-Men-------------------------------------

#Flask Communication------------------------------------------------------------------------------------------------------------

#cd C:\Users\Big_T\OneDrive\Desktop\VsCode\Personal Project
#set FLASK_APP=Home.py
#set FLASK_ENV=development
#flask run

app = Flask(__name__)

CORS(app)

@app.route('/Send_Data', methods=['GET'])
def Send_Data():
    data = {'Image_1': absolute_image_url1, "Desc_1" : Description_1 , "Price_1": Price1,
            'Image_2': absolute_image_url2, "Desc_2" : Description_2 , "Price_2": Price2,
            'Image_3': absolute_image_url3, "Desc_3" : Description_3 , "Price_3": Price3,
            'Image_4': absolute_image_url4, "Desc_4" : Description_4 , "Price_4": Price4,
            'Image_5': absolute_image_url5, "Desc_5" : Description_5 , "Price_5": Price5,
            'Image_6': absolute_image_url6, "Desc_6" : Description_6 , "Price_6": Price6,
            'Image_7': absolute_image_url7, "Desc_7" : Description_7 , "Price_7": Price7,
            'Image_8': absolute_image_url8, "Desc_8" : Description_8 , "Price_8": Price8,

            'Image_1_Marvel': image_url1_Marvel, "Desc_1_Marvel" : Description_1_Marvel  , "Price_1_Marvel": Price_1_Marvel,
            'Image_2_Marvel': image_url2_Marvel, "Desc_2_Marvel" : Description_2_Marvel  , "Price_2_Marvel": Price_2_Marvel,
            'Image_3_Marvel': image_url3_Marvel, "Desc_3_Marvel" : Description_3_Marvel  , "Price_3_Marvel": Price_3_Marvel,
            'Image_4_Marvel': image_url4_Marvel, "Desc_4_Marvel" : Description_4_Marvel  , "Price_4_Marvel": Price_4_Marvel,
            'Image_5_Marvel': image_url5_Marvel, "Desc_5_Marvel" : Description_5_Marvel  , "Price_5_Marvel": Price_5_Marvel,
            'Image_6_Marvel': image_url6_Marvel, "Desc_6_Marvel" : Description_6_Marvel  , "Price_6_Marvel": Price_6_Marvel,
            'Image_7_Marvel': image_url7_Marvel, "Desc_7_Marvel" : Description_7_Marvel  , "Price_7_Marvel": Price_7_Marvel,
            'Image_8_Marvel': image_url8_Marvel, "Desc_8_Marvel" : Description_8_Marvel  , "Price_8_Marvel": Price_8_Marvel, 
            
            'Image_1_Batman': image_url1_Batman, "Desc_1_Batman" : Description_1_Batman  , "Price_1_Batman": Price_1_Batman,
            'Image_2_Batman': image_url2_Batman, "Desc_2_Batman" : Description_2_Batman  , "Price_2_Batman": Price_2_Batman,
            'Image_3_Batman': image_url3_Batman, "Desc_3_Batman" : Description_3_Batman  , "Price_3_Batman": Price_3_Batman,
            'Image_4_Batman': image_url4_Batman, "Desc_4_Batman" : Description_4_Batman  , "Price_4_Batman": Price_4_Batman,
            'Image_5_Batman': image_url5_Batman, "Desc_5_Batman" : Description_5_Batman  , "Price_5_Batman": Price_5_Batman,
            'Image_6_Batman': image_url6_Batman, "Desc_6_Batman" : Description_6_Batman  , "Price_6_Batman": Price_6_Batman,
            'Image_7_Batman': image_url7_Batman, "Desc_7_Batman" : Description_7_Batman  , "Price_7_Batman": Price_7_Batman,
            'Image_8_Batman': image_url8_Batman, "Desc_8_Batman" : Description_8_Batman  , "Price_8_Batman": Price_8_Batman, 
            
            'Image_1_Spiderman': image_url1_Spiderman, "Desc_1_Spiderman" : Description_1_Spiderman  , "Price_1_Spiderman": Price_1_Spiderman,
            'Image_2_Spiderman': image_url2_Spiderman, "Desc_2_Spiderman" : Description_2_Spiderman  , "Price_2_Spiderman": Price_2_Spiderman,
            'Image_3_Spiderman': image_url3_Spiderman, "Desc_3_Spiderman" : Description_3_Spiderman  , "Price_3_Spiderman": Price_3_Spiderman,
            'Image_4_Spiderman': image_url4_Spiderman, "Desc_4_Spiderman" : Description_4_Spiderman  , "Price_4_Spiderman": Price_4_Spiderman,
            'Image_5_Spiderman': image_url5_Spiderman, "Desc_5_Spiderman" : Description_5_Spiderman  , "Price_5_Spiderman": Price_5_Spiderman,
            'Image_6_Spiderman': image_url6_Spiderman, "Desc_6_Spiderman" : Description_6_Spiderman  , "Price_6_Spiderman": Price_6_Spiderman,
            'Image_7_Spiderman': image_url7_Spiderman, "Desc_7_Spiderman" : Description_7_Spiderman  , "Price_7_Spiderman": Price_7_Spiderman,
            'Image_8_Spiderman': image_url8_Spiderman, "Desc_8_Spiderman" : Description_8_Spiderman  , "Price_8_Spiderman": Price_8_Spiderman,
            
            'Image_1_Superman': image_url1_Superman, "Desc_1_Superman" : Description_1_Superman  , "Price_1_Superman": Price_1_Superman,
            'Image_2_Superman': image_url2_Superman, "Desc_2_Superman" : Description_2_Superman  , "Price_2_Superman": Price_2_Superman,
            'Image_3_Superman': image_url3_Superman, "Desc_3_Superman" : Description_3_Superman  , "Price_3_Superman": Price_3_Superman,
            'Image_4_Superman': image_url4_Superman, "Desc_4_Superman" : Description_4_Superman  , "Price_4_Superman": Price_4_Superman,
            'Image_5_Superman': image_url5_Superman, "Desc_5_Superman" : Description_5_Superman  , "Price_5_Superman": Price_5_Superman,
            'Image_6_Superman': image_url6_Superman, "Desc_6_Superman" : Description_6_Superman  , "Price_6_Superman": Price_6_Superman,
            'Image_7_Superman': image_url7_Superman, "Desc_7_Superman" : Description_7_Superman  , "Price_7_Superman": Price_7_Superman,
            'Image_8_Superman': image_url8_Superman, "Desc_8_Superman" : Description_8_Superman  , "Price_8_Superman": Price_8_Superman, 
            
            'Image_1_XMen': image_url1_XMen, "Desc_1_XMen" : Description_1_XMen  , "Price_1_XMen": Price_1_XMen,
            'Image_2_XMen': image_url2_XMen, "Desc_2_XMen" : Description_2_XMen  , "Price_2_XMen": Price_2_XMen,
            'Image_3_XMen': image_url3_XMen, "Desc_3_XMen" : Description_3_XMen  , "Price_3_XMen": Price_3_XMen,
            'Image_4_XMen': image_url4_XMen, "Desc_4_XMen" : Description_4_XMen  , "Price_4_XMen": Price_4_XMen,
            'Image_5_XMen': image_url5_XMen, "Desc_5_XMen" : Description_5_XMen  , "Price_5_XMen": Price_5_XMen,
            'Image_6_XMen': image_url6_XMen, "Desc_6_XMen" : Description_6_XMen  , "Price_6_XMen": Price_6_XMen,
            'Image_7_XMen': image_url7_XMen, "Desc_7_XMen" : Description_7_XMen  , "Price_7_XMen": Price_7_XMen,
            'Image_8_XMen': image_url8_XMen, "Desc_8_XMen" : Description_8_XMen  , "Price_8_XMen": Price_8_XMen}  # Assuming your JavaScript sends data as JSON

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)



#Flask Communication------------------------------------------------------------------------------------------------------------
