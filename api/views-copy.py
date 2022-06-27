from rest_framework.response import Response
from rest_framework.decorators import api_view
from tasks.models import task
from .serializer import TaskSerializer

 
@api_view(['GET']) # only allow GET requests
def get_data(request):
    tasks=task.objects.all()

    # tasks_json=[{task.id: task.title} for task in tasks]
# using serializer to serialize the data is better than using list comprehension


    return Response(TaskSerializer(tasks, many=True).data)
@api_view(['post'])
def add_task(request):
    if request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    return Response(status=400)
