from django.apps import AppConfig
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate(
    "auth-test-44513-firebase-adminsdk-jcdiu-2d29c41d70.json")
firebase_admin.initialize_app(cred)


class AuthConfig(AppConfig):
    name = 'authz'
