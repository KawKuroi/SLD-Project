from rest_framework.response import Response
from BACKEND.APPS.TraductorInfoAPI.models import documents
from BACKEND.APPS.TraductorInfoAPI.api.serializers import documentSerializer
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['GET','POST'])
def document_api_view(request):
    # list
    if request.method == 'GET':
        document = documents.objects.all() 
        document_serializer = documentSerializer(document, many=True) 
        return Response(document_serializer.data, status = status.HTTP_200_OK)    

    # create
    elif request.method == 'POST':
        document_serializer = documentSerializer(data = request.data)
        if document_serializer.is_valid():
            document_serializer.save()
            return Response({'message':'Usuario creado correctamente'}, status = status.HTTP_200_OK)
        return Response(document_serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def document_detail_view(request,pk = None):
    #queryset
    doc = documents.objects.filter(id = pk).first()
    if doc: 
        # validation   
        if request.method == 'GET':
            document_serializer = documentSerializer(doc)
            return Response(document_serializer.data, status = status.HTTP_200_OK)

        # update
        elif request.method == 'PUT':
            document_serializer = documentSerializer(doc, data = request.data)
            if document_serializer.is_valid():
                document_serializer.save()
                return Response(document_serializer.data, status = status.HTTP_200_OK)
            return Response(document_serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        
        # delete
        elif request.method == 'DELETE':
            doc.delete()
            return Response({'message':'Usuario eliminado correctamente'},status = status.HTTP_200_OK)
    else:
        Response({'message':'Usuario no encontrado'}, status = status.HTTP_400_BAD_REQUEST)