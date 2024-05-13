from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('testapp/', include('BACKEND.APPS.TESTAPP.api.urls')),
]
