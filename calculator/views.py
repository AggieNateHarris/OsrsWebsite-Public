from django.shortcuts import render

# Create your views here.

def pickpocket(request):
    return render(request, 'calculator/pickpocket.html')