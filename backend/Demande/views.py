from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Demande.serializers import DemandeSerializer
from Demande.models import Demande
from Local.models import Local
from .models import Organisateur
from datetime import datetime

@csrf_exempt
def CurrentM(request):
    demandes_en_cours = Demande.objects.filter(etat=Demande.Etat.ENCOURS)
    data = []
    for demande in demandes_en_cours:
        
        
        demande_data = {
            'id': demande.id,
            'etat': demande.etat,
            'besoin': demande.besoin,
            'commite': demande.commite,
            'description': demande.description,
            'titre': demande.titre,
            'start_date' : demande.start_date,
            'end_date': demande.end_date,
            #'local': demande.local.nom
        }
        data.append(demande_data)
    return JsonResponse(data, safe=False)



@csrf_exempt
def CurrentO(request, email):
    organisateur = Organisateur.objects.get(email=email)
    demandes_en_cours = Demande.objects.filter(etat=Demande.Etat.EC, organisateur=organisateur)
    
    data = []
    for demande in demandes_en_cours:
        demande_data = {
            'id': demande.id,
            'etat': demande.etat,
            'besoin': demande.besoin,
            'commite': demande.commite,
            'description': demande.description,
            'titre': demande.titre,
            'start_date' : demande.start_date,
            'end_date': demande.end_date,
            #'local': demande.local.nom
        }
        data.append(demande_data)
    
    return JsonResponse(data, safe=False)
    
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
            'start_date' : demande.start_date,
            'end_date': demande.end_date,
            'titre' : demande.titre,
            #'local': local.nom
            
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
            'start_date' : demande.start_date,
            'end_date': demande.end_date,
            'description' : demande.description,
            'titre' : demande.titre,
            #'local': local.id
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
        if 'titre' in request.POST and 'description' in request.POST and 'commite' in request.POST and 'types' in request.POST and 'start_date' in request.POST and 'end_date' in request.POST and 'besoin' in request.POST:
            # Récupération des valeurs des champs
            titre = request.POST.get('titre')
            description = request.POST.get('description')
            commite = request.POST.get('commite')
            types = request.POST.get('types')
            start_date = datetime.strptime(request.POST.get('start_date'), '%Y-%m-%d')
            end_date = datetime.strptime(request.POST.get('end_date'), '%Y-%m-%d')
            besoin = request.POST.get('besoin')
            
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
            
            # Définition de l'état par défaut
            dem.etat = "EC"
            
            # Sauvegarde de l'instance de la demande dans la base de données
            dem.save()
            
            # Renvoi d'une réponse JSON indiquant le succès de l'ajout de la demande
            return JsonResponse({'status': 'success', 'message': 'Demande ajoutée avec succès !'})
        else:
            # Renvoi d'une réponse JSON indiquant les champs manquants dans la requête
            return JsonResponse({'status': 'error', 'message': 'Certains champs sont manquants dans la requête.'})
    else:
        # Renvoi d'une réponse JSON indiquant une erreur d'autorisation pour les méthodes autres que POST
        return JsonResponse({'status': 'error', 'message': 'Not authorized !!!'})