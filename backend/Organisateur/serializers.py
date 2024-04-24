from rest_framework import serializers
from Organisateur.models import Organisateur


class OrganisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organisateur
        fields = '__all__'