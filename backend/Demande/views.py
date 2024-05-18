from django.test import TestCase
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Demande.serializers import DemandeSerializer
from Demande.models import Demande
from Local.models import Local

@csrf_exempt
def Current(request):
    demandes_en_cours = Demande.objects.filter(etat=Demande.Etat.ENCOURS)
    data = []
    for demande in demandes_en_cours:
        local= Local.objects.get(id= demande.id)
        demande_data = {
            'id' : demande.id,
            'etat': demande.etat,
            'besoin': demande.besoin, 
            'commite' : demande.commite,
            'description' : demande.description,
            'titre' : demande.titre,
            'local': local.nom
        }
        data.append(demande_data)
    return JsonResponse(data,safe=False)

@csrf_exempt
def Accepted(request):
    accepted = Demande.objects.filter(etat=Demande.Etat.ACCEPTE)
    data = []
    for demande in accepted:
        local= Local.objects.get(id= demande.id)
        demande_data = {
            'id' : demande.id,
            'etat': demande.etat,
            'besoin': demande.besoin, 
            'commite' : demande.commite,
            'description' : demande.description,
            'titre' : demande.titre,
            'local': local.nom
            
        }
        data.append(demande_data)
    return JsonResponse(data,safe=False)

@csrf_exempt
def Refused(request):
    refused = Demande.objects.filter(etat=Demande.Etat.REFUSE)
    data = []
    for demande in refused :
        local= Local.objects.get(id= demande.id)
        demande_data = {
            'id' : demande.id,
            'etat': demande.etat,
            'besoin': demande.besoin, 
            'commite' : demande.commite,
            'description' : demande.description,
            'titre' : demande.titre,
            'local': local.id
        }
        data.append(demande_data)
    return JsonResponse(data,safe=False)


@csrf_exempt
def Accept(request,id_dem):
    if request.method == 'PUT':
        dem =get_object_or_404(Demande,id=id_dem)
        dem.etat= Demande.Etat.ACCEPTE
        dem.save()
        return JsonResponse({'status': 'success', 'message' : 'Accepted !!!'})
    else:
        return JsonResponse({'status': 'error', 'message' : 'Not authorized !!!'})

@csrf_exempt
def Refus(request,id_dem):
    if request.method == 'PUT':
        dem =get_object_or_404(Demande,id=id_dem)
        dem.etat= Demande.Etat.REFUSE
        dem.save()
        return JsonResponse({'status': 'success', 'message' : 'Resued !!!'})
    else:
        return JsonResponse({'status': 'error', 'message' : 'Not authorized !!!'})



@csrf_exempt
def Add(request):
    if request.method == 'POST':
        titre = request.Post()
        description = request.Post()
        commite = request.Post()
        types = request.Post()

        besoin = request.POST()

        
        dem.save()
        return JsonResponse({'status': 'success', 'message' : 'Resued !!!'})
    else:
        return JsonResponse({'status': 'error', 'message' : 'Not authorized !!!'})