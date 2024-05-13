#Configuración para el envio de correos
from BACKEND.PROJECT.settings.base import EMAIL_HOST,EMAIL_PORT,EMAIL_HOST_USER,EMAIL_HOST_PASSWORD

# Mostrar una interfaz para la API
from rest_framework.response import Response
from rest_framework.views import APIView

# Componentes necesarios para mandar mensajes con archivos y más contenido
import smtplib
from email.mime.multipart import MIMEMultipart # Aumentar cantidad de texto en el correo
from email.mime.base import MIMEBase  # Adjuntar archivos
from email.mime.text import MIMEText

# Import para operaciones con el sistema de archivos
import os  

# Serializador para leer el POST
from .serializers import documentSerializer 

def send_email(name, email, content):
    message = MIMEMultipart()  
    text_part = MIMEText(f'Traducción enviada con exito ✅\nMuchas gracias por utilizar el servicio! 🤙 \n\nTraducción:{content}\nEnviado a {email}! 👋')
    message.attach(text_part)   
    message['Subject'] = f'Traducción para {name}'
    message['From'] = EMAIL_HOST_USER
    message['To'] = email

    with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
        server.starttls()
        server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
        server.sendmail(message['From'], message['To'], message.as_string())

class SendEmailView(APIView):
    def post(self, request):
        serializer = documentSerializer(data=request.data)
        if serializer.is_valid():
            document = serializer.save()
            send_email(document.name, document.email, document.content)

            return Response({'message': 'Document created and email sent successfully.'}, status=201)
        else:
            return Response(serializer.errors, status=400)
