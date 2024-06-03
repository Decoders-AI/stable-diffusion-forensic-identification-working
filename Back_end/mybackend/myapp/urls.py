# myapp/urls.py
from django.urls import path
from .views import receive_get_request

urlpatterns = [
    path('receive/', receive_get_request, name='receive_get_request'),
]
