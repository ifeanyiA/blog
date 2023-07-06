"""mywebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path,include
from django.contrib.auth import views as auth_views
from blog.views import blog_post_create_view,profile
from searches.views import search_view
from account.views import CreateUser,CustomLoginView

from .views import (
home_page,
about_page,
contact_page
)

urlpatterns = [

	path('',home_page,name='home'),
	path('accounts/login/',CustomLoginView.as_view(),name="login"),
	path('accounts/', include('django.contrib.auth.urls')),
	path('accounts/user/',profile,name='my_profile'),
	path('accounts/signup/',CreateUser.as_view(),name="createuser"),
	
  	path('blog-new/',blog_post_create_view,name="blog_new"),
	path('blog/',include("blog.urls")),
	path('search/',search_view,name="search"),
	path('about/',about_page),
	path('contact/',contact_page),
    path('admin/', admin.site.urls),
]


if settings.DEBUG:
	from django.conf.urls.static import static
	urlpatterns +=static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)
	urlpatterns +=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)