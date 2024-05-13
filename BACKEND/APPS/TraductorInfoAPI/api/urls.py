from django.urls import path,include
from BACKEND.APPS.TraductorInfoAPI.api.api import document_api_view, document_detail_view

urlpatterns = [
    path('api/', document_api_view, name='documentAPI'),
    path('api/<int:pk>/',document_detail_view, name='searchAPI')
]
