from django.shortcuts import render

# Create your views here.

tasks = [
    {
        'id': 1,
        'title': 'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol'
    },
    {
        'id': 2,
        'title': 'Learn Python',
        'description': u'Need to find a good Python tutorial on the web'
    }
]


def index(request):
    return render(request, 'tasks/index.html', {'tasks': tasks})

def add(request):
    return render(request, 'tasks/add.html', {'tasks': tasks})