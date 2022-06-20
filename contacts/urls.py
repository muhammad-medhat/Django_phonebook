
from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.index, name='index'),
    path('david', views.david, name='david'),
    path('<str:name>', views.greeting, name='greeting'),
    # path(r'^$', views.index, name='index'),
    # path(r'^contacts/$', views.contacts, name='contacts'),
    # path(r'^contacts/new/$', views.new_contact, name='new_contact'),
    # path(r'^contacts/(?P<contact_id>\d+)/$', views.contact_details, name='contact_details'),
]