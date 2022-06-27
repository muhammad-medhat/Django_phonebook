from Django_phonebook.settings import BASE_DIR
from .models import Task
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
import os

# Create your views here.

# tasks = [
#     {
#         'id': 1,
#         'title': 'Buy groceries',
#         'description': u'Milk, Cheese, Pizza, Fruit, Tylenol'
#     },
#     {
#         'id': 2,
#         'title': 'Learn Python',
#         'description': u'Need to find a good Python tutorial on the web'
#     }
# ]
tasks = Task.objects.all()

def index(request):
    # if "tasks" not in request.session:
        # request.session['tasks'] = []
    # print(70 * '-')
    # print( os.path.join(BASE_DIR, 'reactapp', 'build'))
    # print(70 * '-')

    return render(request, 'tasks/index.html', {'tasks': tasks})

def add(request):
    if request.method == 'POST':
        if "tasks" not in request.session:
            request.session['tasks'] = []
        else:
            print(70 * '-')
            print(request.session['tasks'])
            t = task(
                title=request.POST['title'], 
                description=request.POST['description']
            )
            print('t:', t)
            # request.session['tasks'] += task
            # tasks.append(task)
            t.save()
        # redirect user to index page
        return HttpResponseRedirect('/tasks')

    return render(request, 'tasks/add.html')