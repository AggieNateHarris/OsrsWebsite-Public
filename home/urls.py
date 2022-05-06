from django.urls import path

from . import views

app_name = 'home'
urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('simulations', views.simulations, name='simulations'),
    path('register', views.register, name='register'),
    path('calculators', views.calculators, name='calculators'),
]