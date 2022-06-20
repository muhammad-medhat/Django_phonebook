import datetime
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    res=datetime.datetime.now()
    print('==================')
    print(res)
    # return HttpResponse(f' today is {res}')
    return render(request, 'newyear/index.html', {
        'date': res,
        'newyear': res.day==1 and res.month==1
    })