from django.db import models
from django.contrib import admin
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class FirebaseUserManager(BaseUserManager):
    def create_user(self, email, user_id):
        user = FirebaseUser()
        user.user_id = user_id
        user.email = email
        user.save()
        return user

    def create_superuser(self, email, password=None):
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class FirebaseUser(AbstractBaseUser, PermissionsMixin):
    objects = FirebaseUserManager()

    USERNAME_FIELD = 'email'
    # user specific fields from the token
    user_id = models.CharField(max_length=50, primary_key=True)
    email = models.CharField(max_length=200, unique=True)
    email_verified = models.BooleanField(default=False)
    # profile specific fields
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    # django specific fields
    is_staff = models.BooleanField(
        'staff status',
        default=False,
        help_text='Designates whether the user can log into this admin site.',
    )
    is_active = models.BooleanField(
        'active',
        default=True,
        help_text=(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )


class AppSuperUser(admin.ModelAdmin):
    pass
