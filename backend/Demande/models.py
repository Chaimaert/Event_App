from django.db import models
from Organisateur.models import Organisateur
from Manager.models import Manager
from User.models import User
from Local.models import Local
import datetime
# Create your models here.
from django.utils.translation import gettext_lazy as _


class Demande(models.Model):
    class Etat(models.TextChoices):
        ENCOURS = "EC", _("En Cours")
        ACCEPTE = "ACC", _("Accepté")
        REFUSE = "REF", _("Refusé")

    class Types(models.TextChoices):
        OPEN_HOUSE = "OH", _("Open House")
        GRADUATION_CEREMONY = "GC", _("Graduation Ceremony")
        PERFORMANCES_AND_PLAYS = "PP", _("Performances and Plays")
        CULTURAL_DAYS = "CD", _("Cultural Days")
        CAREER_FAIRS = "CF", _("Career Fairs")
        SCIENCE_DAY = "ScD", _("Science Day")
        ACADEMIC_COMPETITIONS = "ACC", _("Academic Competitions")
        SCHOOL_CARNIVAL = "SC", _("School Carnival")
        AWARENESS_WEEK = "AW", _("Awareness Week")
        EDUCATIONAL_FIELD_TRIPS = "EFT", _("Educational Field Trips")
        SCHOOL_FESTIVAL = "SF", _("School Festival")
        BOOK_WEEK = "BW", _("Book Week")
        SPORTS_DAY = "SpD", _("Sports Day")
        TALENT_WEEK = "TW", _("Talent Week")
        AWARENESS_CAMPAIGNS = "AWC", _("Awareness Campaigns")


        


    id = models.IntegerField(primary_key=True)
    etat = models.CharField(
        max_length=3,
        choices=Etat,
        default=Etat.ENCOURS,
    )

    types = models.CharField(
        max_length=4,
        choices=Types,
        default=Types.CULTURAL_DAYS,
    )
    
    besoin = models.CharField(max_length = 255,null=False)
    commite = models.CharField(max_length = 255,null=False)
    description = models.CharField(max_length = 255,null=False)
    titre = models.CharField(max_length = 255,null=False)
    org = models.ForeignKey(Organisateur, on_delete=models.CASCADE,null=False,related_name='%(class)s') 
    start_date = models.DateField(default=datetime.date.today)
    end_date = models.DateField(default=datetime.date.today)
    man = models.ForeignKey(Manager, on_delete=models.CASCADE,null=False,related_name='%(class)s') 
    loc = models.ForeignKey(Local, on_delete=models.CASCADE,null=False,related_name='%(class)s') 