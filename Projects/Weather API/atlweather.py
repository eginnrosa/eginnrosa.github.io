# Initialize pymysql
import pymysql
pymysql.install_as_MySQLdb()

# Transformation
import pandas as pd
import numpy as np

# API
import json
import pprint
pp = pprint.PrettyPrinter(indent=4)
import requests
from config import api_key
from pandas.io.json import json_normalize

# Handling date/time
import datetime
now = datetime.datetime.now()

# SQL
from sqlalchemy import create_engine

# Save config information
url = "http://api.openweathermap.org/data/2.5/weather?"
city_name = "Atlanta"

# Build query URL
query_url = url + "appid=" + api_key + "&q=" + city_name

# Get weather data
weather_response = requests.get(query_url)
weather_json = weather_response.json()

# Get the temperature from the response
print(f"The weather API responded with: ")
pp.pprint(weather_json)

weather_df = pd.DataFrame.from_dict(json_normalize([weather_json]), orient='columns')
weather_df["api_date"] = now
weather_df = weather_df.rename(columns= {
    'clouds.all' : 'cloud',
    'coord.lat' : 'lat',
    'coord.lon' : 'lon',
    'id' : 'weatherid',
    'main.humidity' : 'humidity',
    'main.pressure' : 'pressure',
    'main.temp' : 'temp',
    'main.temp_max' : 'temp_max',
    'main.temp_min' : 'temp_min',
    'name' : 'cityname',
    'sys.country' : 'country',
    'sys.id' : 'sysid',
    'sys.message' : 'sysmessage',
    'sys.sunrise' : 'sunrise',
    'sys.sunset' : 'sunset',
    'sys.type' : 'systype',
    'wind.deg' : 'wind_degree',
    'wind.speed' : 'wind_speed'
})
weather_df = weather_df.drop(columns= ['weather'])

weather_list = weather_df.columns.tolist()
weather_df = weather_df.applymap(str)

# Load to database
connection_string = "root:toor2@localhost/atlweather_db"
engine = create_engine(f'mysql://{connection_string}')

# Append current table to existing table
weather_df.to_sql(name='atlweather_table', con=engine, if_exists='append', index=False)

running_weather_df = pd.DataFrame(engine.execute("SELECT * FROM atlweather_table").fetchall())
running_weather_df = running_weather_df.rename(columns= {
    0 : 'base',
    1 :  'cloud',
    2 :  'cod',
    3 :  'lat',
    4 :  'lon',
    5 :  'dt',
    6 :  'weatherid',
    7 :  'humidity',
    8 :  'pressure',
    9 :  'temp',
    10 :  'temp_max',
    11 :  'temp_min',
    12 :  'cityname',
    13 :  'country',
    14 :  'sysid',
    15 :  'sysmessage',
    16 :  'sunrise',
    17 :  'sunset',
    18 :  'systype',
    19 :  'visibility',
    20 :  'wind_degree',
    21 :  'wind_speed',
    22 :  'api_date'
})

running_weather_df.to_csv('./atlweather.csv')
