from django.contrib import admin
from django.urls import path, include
from BACKEND.APPS.TraductorInfoAPI.api.mailing import SendEmailView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('traductor/', include('BACKEND.APPS.TraductorInfoAPI.api.urls')),
    path('send_email/',SendEmailView.as_view(), name='mailing')
]
