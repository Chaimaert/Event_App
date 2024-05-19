from django.db import models
from User.models import User

# Create your models here.
class Organisateur(User):
    user = models.OneToOneField(User, parent_link=True, on_delete=models.CASCADE, related_name='organizer_profile')
    

 