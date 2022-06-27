from django.urls import path
from . import views

urlpatterns = [
    # path('', views.get_data),
    path('tasks', views.task_list),
    path('tasks/<int:pk>', views.task_details),
]