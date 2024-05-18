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
            'start_date' = demande.start_date,
            'end_date'= demande.end_date,
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
        # Récupération des valeurs des champs du formulaire
        titre = request.POST['titre']
        description = request.POST['description']
        commite = request.POST['commite']
        types = request.POST['types']
        start_date = request.POST['start_date']
        end_date = request.POST['end_date']
        besoin = request.POST['besoin']
        
        # Création de l'instance de la demande avec les valeurs récupérées
        dem = Demande(
            titre=titre,
            description=description,
            commite=commite,
            types=types,
            start_date=start_date,
            end_date=end_date,
            besoin=besoin
        )
        
        # Sauvegarde de l'instance de la demande dans la base de données
        dem.save()
        
        # Renvoi d'une réponse JSON indiquant le succès de l'ajout de la demande
        return JsonResponse({'status': 'success', 'message': 'Demande ajoutée avec succès !'})
    else:
        # Renvoi d'une réponse JSON indiquant une erreur d'autorisation pour les méthodes autres que POST
        return JsonResponse({'status': 'error', 'message': 'Not authorized !!!'})