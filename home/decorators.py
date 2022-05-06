from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import decorators

# def login_required(function, url):
#     try:
#         if request.auth == false:
#             print("permission granted!")
#             return function(request)
#         else:
#             print("permission denied!")
#             return render(request, url)
#     except:
#         print("permission denied!")

