from django.urls import path

from . import views

app_name = 'xkills'
urlpatterns = [
    path('herbiboar', views.herbiboar, name='herbiboar'),
    path('challengecox', views.challengecox, name='challengecox'),
    path('chambers', views.chambers, name='chambers'),
    path('zulrah', views.zulrah, name='zulrah'),
    path('vorkath', views.vorkath, name='vorkath'),
    path('gauntlet', views.gauntlet, name='gauntlet'),
    path('corruptgauntlet', views.corruptgauntlet, name='corruptgauntlet'),
    path('hardclue', views.hardclue, name='hardclue'),
    path('eliteclue', views.eliteclue, name='eliteclue'),
    path('nightmare', views.nightmare, name='nightmare'),
    path('giantmole', views.giantmole, name='giantmole'),
    path('sarachnis', views.sarachnis, name='sarachnis'),
    path('theatre', views.theatre, name='theatre'),
]