# myapp/urls.py
from django.urls import path
from .views import receive_get_request
from .views import audiototext

urlpatterns = [
    path('receive/', receive_get_request, name='receive_get_request'),
    path('audiototext/', audiototext, name='audiototext'),

]
