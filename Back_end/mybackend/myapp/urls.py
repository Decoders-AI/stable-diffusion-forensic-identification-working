# myapp/urls.py
from django.urls import path
from .views import receive_get_request,audiototext,test_view

urlpatterns = [
    path('receive/', receive_get_request, name='receive_get_request'),
    path('audiototext/', audiototext, name='audiototext'),
    path('test/', test_view, name='test_view'),

]
