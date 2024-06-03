# myapp/urls.py
from django.urls import path
from .views import receive_first_get_request
from .views import receive_second_get_request
from .views import receive_third_get_request
from .views import receive_choices_get_request
from .views import receive_sliders_input_post_request

urlpatterns = [
    path('receivefirst/', receive_first_get_request, name='receive_first_get_request'),
    path('receivesecond/', receive_second_get_request, name='receive_second_get_request'),
    path('receivethird/', receive_third_get_request, name='receive_third_get_request'),
    path('receivechoices/', receive_choices_get_request, name='receive_third_get_request'),
    path('receiveslidersinput/', receive_sliders_input_post_request, name='receive_sliders_input_post_request'),
]
