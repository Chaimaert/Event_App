from django.db import models
from polymorphic.models import PolymorphicModel 

# Create your models here.
class User(models.Model):
    
    id  = models.IntegerField(primary_key=True)
    nom = models.CharField(max_length = 255, null=False)
    prenom = models.CharField(max_length = 255,null=False)
    email = models.CharField(max_length = 255,null=False)
    phone = models.CharField(max_length = 255,null=False)
    password = models.CharField(max_length = 255,null=False)
    
 