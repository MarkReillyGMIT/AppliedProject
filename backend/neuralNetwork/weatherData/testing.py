import json,requests
import csv 
Token = 'TcmFzxHXRfnsixEvmnOtaNOIJPqmQCXa'
list = []

#Manipulating API data
for year in range(2016, 2020):
        year = str(year)
        print('working on year '+year)
        
        #make the api call
        response = requests.get('https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&datatypeid=TAVG&limit=1000&stationid=GHCND:USW00023129&startdate='+year+'-01-01&enddate='+year+'-12-31', headers={'token':Token})
        #print(response.json())
        dict = json.loads(response.text)
        avg_temps = [item for item in dict['results'] if item['datatype']=='TAVG']
        for item in avg_temps:
            list.append((item['date'], item['value']))


text = json.dumps(list, sort_keys=True, indent=2)

x = json.loads(text)

f = csv.writer(open("weatherData.csv", "w", newline=''))

# Write CSV Header
f.writerow(["date", "value"])

for x in x:
    f.writerow([x])