from rest_framework import viewsets
from .serializers import documentSerializer
from BACKEND.APPS.TraductorInfoAPI.models import documents

class documentView(viewsets.ModelViewSet):
    serializer_class = documentSerializer
    queryset = documents.objects.all()

