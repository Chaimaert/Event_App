from django.db import models
from User.models import User

# Create your models here.
class Manager(User):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='manager_profile') 
    