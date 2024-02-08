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


def Desc_Position_Search(element_list):
    j = 0 #Item Count
    counter = 0 #Counts index position of description in scraped list
    List_Index = []
  
    for i in element_list:
        if i.get_text().endswith(".") and len(i.get_text()) <= 3:  #If index is a new listing (index text ends with a period and text length is <= 3)
            j += 1
            List_Index.append(counter)
            counter += 1
        else:
            counter += 1
    #print("list before: ", List_Index)      
    return(List_Index)

def Description_Price_Search(element_list):
    Index_List = Desc_Position_Search(element_list)
    write_up_List = []
    Info_List = []
    for i in Index_List:
        test = element_list[i + 1] #Description
        write_up = element_list[i + 2]
        test_Reg = element_list[i + 3] #Price for Regular
        test_Sale = element_list[i + 4] #Price for on sale
        Info_List.append(test.get_text())
        write_up_List.append(write_up.get_text())
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
       
    return Info_List, write_up_List


def Find_Total_Result(element_list):
    for i, element in enumerate(element_list):
        if element.get_text() == "Total Results: ": #Finds index with text "Total Results: " and grabs the index + 1 text
            if i + 1 < len(element_list):
                numb = element_list[i + 1]
                return numb.get_text()
            else:
                
                return None
    return

#Scraping for Avengers-------------------------------------

'''
url_Search = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=" +""
response_Search = requests.get(url_Search)
soup_Search = BeautifulSoup(response_Search.content, "html.parser")
elements_fonts_Search = soup_Search.find_all("font")
image_elements_img_Search = soup_Search.find_all("img")



#Price/Description---------
Search_Info = Description_Price_Search(elements_fonts_Search)

# Create variables dynamically
num_items = len(Search_Info) // 2
descriptions = []
prices = []
total_results = [] 

total_results.append(Find_Total_Result(elements_fonts_Search))

for i in range(num_items):
    description = Search_Info[i * 2]
    price = Search_Info[i * 2 + 1]
    descriptions.append(description)
    prices.append(price)

# Images---------
if len(image_elements_img_Search) >= num_items:
    image_urls = []
    for i in range(num_items):
        image_element = image_elements_img_Search[20 + i]
        relative_image_url = image_element.get("src")
        image_url = urljoin(url_Search, relative_image_url)
        image_urls.append(image_url)
else:
    print("Too Long")

#Images---------

#print("Descriptions: ", descriptions)
#print("price: ", prices)
#print("images: ", image_urls)
#Scraping for Avengers-------------------------------------
'''






#Flask Communication------------------------------------------------------------------------------------------------------------

#cd C:\Users\Big_T\OneDrive\Desktop\VsCode\Personal Project\Result_L
#set FLASK_APP=Result.py
#set FLASK_ENV=development
#flask run --port=5500

app = Flask(__name__)

CORS(app)
@app.route('/Search_Data', methods=['POST'])
def search_data():
    try:
        search_data = request.json

        search_query = search_data.get('searchTerm', 'DefaultSearchTerm')
        url_Search = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=" + search_query
        response_Search = requests.get(url_Search)
        soup_Search = BeautifulSoup(response_Search.content, "html.parser")
        elements_fonts_Search = soup_Search.find_all("font")
        image_elements_img_Search = soup_Search.find_all("img")


        #Price/Description---------
        Search_Info, Write_up = Description_Price_Search(elements_fonts_Search)

        # Create variables dynamically
        num_items = len(Search_Info) // 2
        descriptions = []
        prices = []
        total_results = [] 
        writes = []

        total_results.append(Find_Total_Result(elements_fonts_Search))

        for i in range(num_items):
            description = Search_Info[i * 2]
            write = Write_up[i]
            price = Search_Info[i * 2 + 1]
            descriptions.append(description)
            prices.append(price)
            writes.append(write)

        # Images---------
        if len(image_elements_img_Search) >= num_items:
            image_urls = []
            for i in range(num_items):
                image_element = image_elements_img_Search[20 + i]
                relative_image_url = image_element.get("src")
                image_url = urljoin(url_Search, relative_image_url)
                image_urls.append(image_url)
        else:
            print("Too Long")



        data = {
            "Description": descriptions,
            "Price": prices,
            "Image": image_urls,
            "Total_Result": total_results[0],
            "Writes": writes,
        }

        return jsonify(data)

    except Exception as e:
        return jsonify({"error": str(e)})
    



@app.route('/Change_Page', methods=['POST'])
def change_page():
    try:
        search_data = request.json
       
        
        search_query = search_data.get('search_term', 'DefaultSearchTerm')
        mode = search_data.get('page_prev_next', 'Defaultpage_prev_next')
        f_numb = search_data.get('f_numb', 'Defaulf_numb')
        l_numb = search_data.get('l_numb', 'Defaull_numb')
       
     
        if(mode == "next"): #If next page is triggered--------------------------------------------------------------------------------------------------------
        

            l_numb = str(l_numb)
            f_numb = str(f_numb)

            url_Search = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=" + search_query + "&" + f_numb + "=" + l_numb 
            response_Search = requests.get(url_Search)
            soup_Search = BeautifulSoup(response_Search.content, "html.parser")
            elements_fonts_Search = soup_Search.find_all("font")
            image_elements_img_Search = soup_Search.find_all("img")


            #Price/Description---------
            Search_Info, Write_up = Description_Price_Search(elements_fonts_Search)

            # Create variables dynamically
            num_items = len(Search_Info) // 2
            descriptions = []
            prices = []
            total_results = [] 
            writes = []

            total_results.append(Find_Total_Result(elements_fonts_Search))

            for i in range(num_items):
                description = Search_Info[i * 2]
                price = Search_Info[i * 2 + 1]
                write = Write_up[i]
                descriptions.append(description)
                prices.append(price)
                writes.append(write)

            # Images---------
            if len(image_elements_img_Search) >= num_items:
                image_urls = []
                for i in range(num_items):
                    image_element = image_elements_img_Search[20 + i]
                    relative_image_url = image_element.get("src")
                    image_url = urljoin(url_Search, relative_image_url)
                    image_urls.append(image_url)
            else:
                print("Too Long")

            
            data = {
                "Description": descriptions,
                "Price": prices,
                "Image": image_urls,
                "Total_Result": total_results[0],
                "Writes": writes,
            }
            return jsonify(data)
        

        elif(mode == "prev"):#If prev page is triggered--------------------------------------------------------------------------------------------------------
         
    
            l_numb = str(l_numb)
            f_numb = str(f_numb)

            url_Search = "https://www.dynamicforces.com/htmlfiles/search3.html?KMPP=" + search_query + "&" + f_numb + "=" + l_numb 
            response_Search = requests.get(url_Search)
            soup_Search = BeautifulSoup(response_Search.content, "html.parser")
            elements_fonts_Search = soup_Search.find_all("font")
            image_elements_img_Search = soup_Search.find_all("img")


            #Price/Description---------
            Search_Info, Write_up = Description_Price_Search(elements_fonts_Search)

            # Create variables dynamically
            num_items = len(Search_Info) // 2
            descriptions = []
            prices = []
            total_results = [] 
            writes = []
            
            total_results.append(Find_Total_Result(elements_fonts_Search))

            for i in range(num_items):
                description = Search_Info[i * 2]
                price = Search_Info[i * 2 + 1]
                write = Write_up[i]
                descriptions.append(description)
                prices.append(price)
                writes.append(write)

            # Images---------
            if len(image_elements_img_Search) >= num_items:
                image_urls = []
                for i in range(num_items):
                    image_element = image_elements_img_Search[20 + i]
                    relative_image_url = image_element.get("src")
                    image_url = urljoin(url_Search, relative_image_url)
                    image_urls.append(image_url)
            else:
                print("Too Long")

            data = {
                "Description": descriptions,
                "Price": prices,
                "Image": image_urls,
                "Total_Result": total_results[0],
                "Writes": writes,
            }

            return jsonify(data)

        

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)

#Flask Communication------------------------------------------------------------------------------------------------------------


























