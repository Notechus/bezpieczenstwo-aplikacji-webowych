from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required


@login_required
def home(request):
    print('homepage user is ' + str(request.user))
    return render(request, 'home.html')


# Create your views here.
def continue_login(request):
    token = request.GET.get('token')
    user = authenticate(request, token=token)
    if user:
        login(request, user)

    return redirect('/')
