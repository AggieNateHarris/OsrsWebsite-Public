from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required

# Create your views here.

def home(request):
#     if request.method=='POST':
#         logout_request(request) #Ensure logged out before attempting to log in
#         username = request.POST['usernametext']
#         password = request.POST['passwordtext']
#
#         user = auth.authenticate(username=username, password=password)
#
#         if user is not None:
#             auth.login(request, user)
#             print("login successful")
#             return render(request, 'home/about.html')
#         else:
#             print("login unsuccessful!")

    return render(request, 'home/homepage.html')

# def logout_request(request):
#     logout(request)
#     messages.info(request, "Logged out successfully")
#     return redirect('home/homepage.html')

def about(request):
    return render(request, 'home/about.html')

def calculators(request):
    return render(request, 'home/calculators.html')

#@login_required(login_url='home')
def simulations(request):
    return render(request, 'home/simulations.html')

def register(request):
#     if request.method == "POST":
#         username = request.POST['usernametext']
#         password1 = request.POST['passwordtext1']
#         password2 = request.POST['passwordtext2']
#
#         if password1 == password2:
#             user = User.objects.create_user(username=username, password=password1)
#             user.save()
#             print('new user created')
#         else:
#             print("passwords didn't match")
#         return render(request, 'home/homepage.html')

    return render(request, 'home/register.html')