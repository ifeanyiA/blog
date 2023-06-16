from django.shortcuts import render
from .models import SearchQuery
from blog.models import BlogPost
from account.models import AccountUser
from searches.api.serializers import SearchQuerySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.


def search_view(request):
	query=request.GET.get('q',None)
	user=None
	if request.user.is_authenticated:
		user=request.user
	context={"query":query}
	if query is not None:
		SearchQuery.objects.create(user=user,query=query)
		blog_list=BlogPost.objects.search(query=query)
		
		context['blog_list']=blog_list
		
	return render(request,"searches/view.html",context)


@api_view(['GET'])
def search_view_api(request):
	pass
			
		
	