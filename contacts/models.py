from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    #not required field
    # address = models.CharField(max_length=100, blank=True)

    description = models.TextField(blank=True)

    def __str__(self):
        return f'{self.name}: {self.phone}'
