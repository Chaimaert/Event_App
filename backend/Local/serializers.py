from rest_framework import serializers
from Local.models import Local

class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = '__all__'