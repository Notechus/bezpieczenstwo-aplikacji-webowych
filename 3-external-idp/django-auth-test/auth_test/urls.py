from django.contrib import admin
import django.contrib.auth.views as auth_views
from django.urls import path
from authz.views import continue_login, home

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('login/', auth_views.LoginView.as_view()),
    path('logout/', auth_views.LogoutView.as_view()),
    path('auth/continue_login/', continue_login)
]
