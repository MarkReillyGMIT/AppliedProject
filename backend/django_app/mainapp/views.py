from django.http import response
from django.http.response import JsonResponse
from django.shortcuts import render 
# import json to load json data to python dictionary 
import json 
# urllib.request to make a request to api 
import urllib.request 
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt 
def weather(request): 
    if request.method == 'POST': 
        city = request.POST['city']
        print(type(city))
        print("City" +city)
        ''' api key might be expired use your own api_key 
            place api_key in place of appid ="your_api_key_here "  '''
  
        # source contain JSON data from API 
        apiKey = '4c877f2673f01a25cab9395e71356dad'
        weather = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID='+apiKey+'&units=metric'
  
        sourceForecast = urllib.request.urlopen(weather).read() 
  
        # converting JSON data to a dictionary 
        list_of_data = json.loads(sourceForecast) 
  
        # data for variable list_of_data 
        data = {} 
        return JsonResponse(list_of_data)
    else: 
        data ={} 
    
    return JsonResponse(data)

@csrf_exempt 
def forecast(request): 
    if request.method == 'POST': 
        city = request.POST['city']
       # print(type(city))
        #print("City" +city)
        ''' api key might be expired use your own api_key 
            place api_key in place of appid ="your_api_key_here "  '''
  
        # source contain JSON data from API 
        apiKey = '4c877f2673f01a25cab9395e71356dad'
        forecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&APPID='+apiKey+'&units=metric'
  
        sourceForecast = urllib.request.urlopen(forecast).read() 
  
        # converting JSON data to a dictionary 
        list_of_data = json.loads(sourceForecast) 
  
        # data for variable list_of_data 
        data = { } 
        return JsonResponse(list_of_data)
    else: 
        data ={} 
    
    return JsonResponse(data)