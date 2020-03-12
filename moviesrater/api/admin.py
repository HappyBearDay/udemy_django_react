from django.contrib import admin
from .models import Movie, Rating
# Register your models here.

#admin.site.register(Movie)

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    fields = ['title', 'description']
    list_display = ['title', 'description']
    

@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ['get_movie', 'user']

    def get_movie(self, obj):
        return obj.movie.title
    get_movie.short_description = 'Movie'
    get_movie.admin_order_field = 'movie__title'