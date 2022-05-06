from django.shortcuts import render

# Create your views here.

def herbiboar(request):
    return render(request, 'xitem/herbiboar.html')

def challengecox(request):
    return render(request, 'xitem/challengecox.html')

def chambers(request):
    return render(request, 'xitem/chambers.html')

def nightmare(request):
    return render(request, 'xitem/nightmare.html')

def hardclue(request):
    return render(request, 'xitem/hardclue.html')