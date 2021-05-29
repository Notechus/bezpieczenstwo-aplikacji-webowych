from django.contrib.auth.backends import BaseBackend
from firebase_admin.auth import verify_id_token, InvalidIdTokenError, ExpiredIdTokenError, RevokedIdTokenError, \
    CertificateFetchError
from .models import FirebaseUser


class FirebaseTokenBackend(BaseBackend):

    def get_user(self, user_id):
        return FirebaseUser.objects.get(user_id=user_id)

    def authenticate(self, request, token=None):
        """Authenticates using token which came after login redirect and populates django user from it"""
        try:
            user_info = verify_id_token(token)
            firebase_user = FirebaseUser.objects.get(user_id=user_info['user_id'])
            return firebase_user
        except (FirebaseUser.DoesNotExist, ValueError, InvalidIdTokenError, ExpiredIdTokenError, RevokedIdTokenError,
                CertificateFetchError):
            return None
