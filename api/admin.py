from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(BlogModel)
admin.site.register(CategoryModel)
admin.site.register(MessageModel)
admin.site.register(CommentModel)