from rest_framework.serializers import ModelSerializer
from blog.models import BlogPost


class BlogPostSerializer(ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id','user','image','title','slug','content','publish_date','timestamp','updated','likes']
        #fields = ['likes']





