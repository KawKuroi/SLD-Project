from django.db import models
class documents(models.Model):
    name = models.CharField(max_length=255, default='')
    email = models.EmailField(max_length=255, default='')
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True) 

    def __str__(self):
        return self.content + ' - by: ' + self.name