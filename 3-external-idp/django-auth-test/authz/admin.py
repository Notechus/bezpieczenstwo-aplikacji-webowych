from django.contrib import admin
from .models import FirebaseUser, AppSuperUser

admin.site.register(FirebaseUser, AppSuperUser)
