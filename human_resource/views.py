from django.shortcuts import render

from django.http import HttpResponseRedirect #Redirect the page after the submit 
from django.contrib import messages
from django.core.mail import EmailMultiAlternatives
from django.template import loader

# Create your views here.
# =============================== RESUMES ========================= 

 # Function to send frontend form
 # Function to send frontend form
def send_email_frontend(request):
    if request.method == 'POST':

        #Check if email exists in database

        email = request.POST['email']
        if Registered_email.objects.filter(email=email).exists():
            messages.error(request,"We already have your resume in our DB")
            return HttpResponseRedirect(reverse("opportunities"))
        
        else:
            name = request.POST.get('name')
            age = request.POST.get('age')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            experience = request.POST.get('experience')
            skills = request.POST.get('skills')

            #Register inside DB
            contact = Registered_email()
            contact.email=email
            contact.save()

           
        
            template = loader.get_template('resume_form.txt')
            context ={

            'name':name,
            'age':age,
            'email':email,
            'phone':phone,
            'address':address,
            'experience':experience,
            'skills':skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
           "Frontend - Candidiate",message,
           "Frontend Opportunity",
           ["iifeanyi570@gmail.com"] 
            )
            email.content_subtype='html'
            file = request.FILES['file']
            email.attach(file.name,file.read(),file.content_type)
            email.send()
            
            messages.success(request,"Frontend resume sent successfully !")
            return HttpResponseRedirect('/')


 # Function to send backend form
def send_email_backend(request):
    if request.method == 'POST':

        #Check if email exists in database

        email = request.POST['email']
        if Registered_email.objects.filter(email=email).exists():
            messages.error(request,"We already have your resume in our DB")
            return HttpResponseRedirect(reverse("opportunities"))
        
        else:
            name = request.POST.get('name')
            age = request.POST.get('age')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            experience = request.POST.get('experience')
            skills = request.POST.get('skills')
            #Register inside DB
            contact = Registered_email()
            contact.email=email
            contact.save()


           
        
            template = loader.get_template('resume_form.txt')
            context ={

            'name':name,
            'age':age,
            'email':email,
            'phone':phone,
            'address':address,
            'experience':experience,
            'skills':skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
           "Backend - Candidiate",message,
           "Backend Opportunity",
           ["iifeanyi570@gmail.com"] 
            )
            email.content_subtype='html'
            file = request.FILES['file']
            email.attach(file.name,file.read(),file.content_type)
            email.send()
           
            messages.success(request,"Backend resume sent successfully !")
            return HttpResponseRedirect('/')

 # Function to send fullstack form

def send_email_fullstack(request):
    if request.method == 'POST':

        #Check if email exists in database

        email = request.POST['email']
        if Registered_email.objects.filter(email=email).exists():
            messages.error(request,"We already have your resume in our DB")
            return HttpResponseRedirect(reverse("opportunities"))
        
        else:
            name = request.POST.get('name')
            age = request.POST.get('age')
            email = request.POST.get('email')
            phone = request.POST.get('phone')
            address = request.POST.get('address')
            experience = request.POST.get('experience')
            skills = request.POST.get('skills')
            #Register inside DB
            contact = Registered_email()
            contact.email=email
            contact.save()

           
        
            template = loader.get_template('resume_form.txt')
            context ={

            'name':name,
            'age':age,
            'email':email,
            'phone':phone,
            'address':address,
            'experience':experience,
            'skills':skills,
            }
            message = template.render(context)
            email = EmailMultiAlternatives(
           "Fullstack - Candidiate",message,
           "Fullstack Opportunity",
           ["iifeanyi570@gmail.com"] 
            )
            email.content_subtype='html'
            file = request.FILES['file']
            email.attach(file.name,file.read(),file.content_type)
            email.send()
            
            messages.success(request,"Fullstack resume sent successfully !")
            return HttpResponseRedirect('/')
