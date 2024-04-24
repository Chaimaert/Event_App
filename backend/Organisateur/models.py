from django.db import models
from User.models import User

# Create your models here.
class Organisateur(User):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='organizer_profile') 
    