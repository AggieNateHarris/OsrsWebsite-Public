from django.urls import path

from . import views

app_name = 'xitem'
urlpatterns = [
    path('herbiboar', views.herbiboar, name='herbiboar'),
    path('challengecox', views.challengecox, name='challengecox'),
    path('chambers', views.chambers, name='chambers'),
    path('nightmare', views.nightmare, name='nightmare'),
    path('hardclue', views.hardclue, name='hardclue'),
]