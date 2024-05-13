from rest_framework import serializers
from BACKEND.APPS.TraductorInfoAPI.models import documents

class documentSerializer(serializers.ModelSerializer):
    class Meta:
        model = documents
        fields = '__all__' # Alternativa = ['content','user']