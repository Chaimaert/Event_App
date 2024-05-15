from django.test import TestCase

# Create your tests here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Organisateur.serializers import OrganisateurSerializer
from Organisateur.models import Organisateur
from User.models import User

@csrf_exempt
def Allorg(request):
    if request.method=='GET':
        org = Organisateur.objects.all()
        org_serializer=OrganisateurSerializer(org,many=True)
        return JsonResponse(org_serializer.data,safe=False)
    


def Connexion(request,id_org):
    if request.method=='GET':
        orgs = Organisateur.objects.all()
        org = orgs.get(id= id_org)
        org_serializer=OrganisateurSerializer(org)
        return JsonResponse(org_serializer.data,safe=False)
    

def Inscription(request,id_org):    
    if request.method=='POST':
        org_data=JSONParser().parse(request)
        org_serializer=OrganisateurSerializer(data=org_data)
        if org_serializer.is_valid():
            org_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    
    

    