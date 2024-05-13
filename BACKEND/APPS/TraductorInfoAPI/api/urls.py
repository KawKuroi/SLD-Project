from django.urls import path,include
from rest_framework import routers
from BACKEND.APPS.TraductorInfoAPI.api import views

router = routers.DefaultRouter()
router.register(r'',views.documentView, 'documents')

urlpatterns = [
    path('api/',include(router.urls)),
]
