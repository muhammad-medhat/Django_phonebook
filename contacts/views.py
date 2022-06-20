from django.http import HttpResponse
from django.shortcuts import render

def david(request):
    return HttpResponse('contacts/views.py: david()')

def index(request):
    # return HttpResponse('contacts/views.py: index()')
    return render(request, 'index.html')

def greeting(request, name):
    # return HttpResponse(f' hello, {name}')
    return render(request, 'index.html', {'name': name})