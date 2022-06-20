
from django.shortcuts import render
import requests

# Create your views here.
def index(request):
    api_key='46c7fc7bcf30a55f6746a8e1c1832475'
    api_url='http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid='+api_key

    url='http://api.openweathermap.org./data/2.5/weather?appid=0c42f7f6b53b244c78a418f4f181282a&q=London'
    response=requests.get(url)
    data=response.json()

    return render(request, 'weather/index.html', {'data': data})

