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

# Serializador para leer el POST
from .serializers import documentSerializer 
import os

def create_text_file(name, content):
    with open(f"{name}.txt", "w", encoding='utf-8') as file:
        file.write(f"{name}\n{content}")


def send_email(name, email, content):
    message = MIMEMultipart()
    message['Subject'] = f'Traducción para {name}'
    message['From'] = EMAIL_HOST_USER
    message['To'] = email

    text_file_path = f"{name}.txt"
    with open(text_file_path, "w", encoding='utf-8') as file:
        file.write(f"Traducción enviada con exito ✅\n\nMuchas gracias por utilizar el servicio {name} !  \n\n\nTraducción: {content}\n\nEnviado a {email}! ")

    try:
        # Attach text file to email
        with open(text_file_path, "r", encoding='utf-8') as attachment:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(attachment.read())
            part.add_header('Content-Disposition', f'attachment; filename="{text_file_path}"')
            message.attach(part)
            message_as_string = message.as_string().encode('utf-8')

        # Send email with attachment
        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            server.starttls()
            server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
            server.sendmail(message['From'], message['To'], message_as_string)
    except (IOError, UnicodeDecodeError) as e:
        print(f"Error creating or opening text file / sending email: {e}")

    # Delete the generated text file after sending
    os.remove(text_file_path)

class SendEmailView(APIView):
    def post(self, request):
        serializer = documentSerializer(data=request.data)
        if serializer.is_valid():
            document = serializer.save()
            send_email(document.name, document.email, document.content)

            return Response({'message': 'Document created and email sent successfully.'}, status=201)
        else:
            return Response(serializer.errors, status=400)
