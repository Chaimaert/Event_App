from django.db import models

class Local(models.Model):

    id = models.IntegerField(primary_key=True)
    nom = models.CharField(max_length = 255,null = False)
