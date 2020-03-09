from django.urls import path, include
from . import views
from .views import Another
from rest_framework import routers

router = routers.DefaultRouter()
router.register('books', views.BookViewSet)

urlpatterns = [
    path('first', views.first),
    path('second', views.second),
    path('another', Another.as_view()),
    path('', include(router.urls)),
]
