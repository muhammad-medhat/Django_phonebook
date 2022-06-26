from django.http import HttpResponse, HttpResponseRedirect
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
    # if "tasks" not in request.session:
        # request.session['tasks'] = []

    return render(request, 'tasks/index.html', {'tasks': tasks})

def add(request):
    if request.method == 'POST':
        if "tasks" not in request.session:
            request.session['tasks'] = []
        else:
            print(70 * '-')
            print(request.session['tasks'])
            task = {
                # 'id': request.session['tasks'][-1]['id'] + 1,
                'title': request.POST['title'],
                'description': request.POST['description']
            }
            # request.session['tasks'] += task
            tasks.append(task)
        # redirect user to index page
        return HttpResponseRedirect('/tasks')

    return render(request, 'tasks/add.html')