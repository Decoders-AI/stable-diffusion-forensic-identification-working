# myapp/urls.py
from django.urls import path
from .views import receive_get_request
from .views import receive_first_get_request
from .views import receive_second_get_request
from .views import receive_third_get_request
from .views import receive_choices_get_request
from .views import receive_sliders_input_post_request
from .views import receive_image_num_get_request
from .views import receive_quality_get_request
from .views import promptSafeCheck
from .views import receive_ref_get_request


urlpatterns = [
    path('receive/', receive_get_request, name='receive_get_request'),
    path('receivefirst/', receive_first_get_request, name='receive_first_get_request'),
    path('receivesecond/', receive_second_get_request, name='receive_second_get_request'),
    path('receivethird/', receive_third_get_request, name='receive_third_get_request'),
    path('ref/', receive_ref_get_request, name='receive_ref_get_request'),
    path('receivechoices/', receive_choices_get_request, name='receive_third_get_request'),
    path('receiveslidersinput/', receive_sliders_input_post_request, name='receive_sliders_input_post_request'),
    path('receiveimagenum/', receive_image_num_get_request, name='receive_image_num_get_request'),
    path('receivequality/', receive_quality_get_request, name='receive_quality_get_request'),
    path('filter/', promptSafeCheck, name='promptSafeCheck'),
]
