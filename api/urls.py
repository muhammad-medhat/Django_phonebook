from django.urls import path
from . import views

urlpatterns = [
    path('tasks/<int:pk>', views.task_details),
    path('tasks', views.task_list),
    # path('tasks', views.TaskListApiView.as_view()),
    # path('tasks/<int:pk>', views.TaskDetails.as_view()),
]