from django.urls import path

from . import views

app_name = 'calculator'
urlpatterns = [
    path('pickpocket', views.pickpocket, name='pickpocket'),
]