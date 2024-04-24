from django.test import TestCase

# Create your tests here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from User.serializers import UserSerializer
from User.models import User

@csrf_exempt
def Allusers(request):
    if request.method=='GET':
        usr = User.objects.all()
        usr_serializer=UserSerializer(usr,many=True)
        return JsonResponse(usr_serializer.data,safe=False)
    