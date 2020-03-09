from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from rest_framework import viewsets

from .models import Book
from .serializer import BookSerializer, BookMiniSerializer

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Create your views here.

class Another(View):

    def get(self, request):
        books = Book.objects.all()
        output = f"We have {len(books)} books in DB"
        return render(request, 'second.html', {
        'books': books})

def first(request ):
    return HttpResponse('first message')

def second(request ):
    return render(request, 'second.html', {
        'data': 'data_content'
    })

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookMiniSerializer# BookSerializer
    queryset = Book.objects.all()
    authentication_classes = ( TokenAuthentication, )
    permission_classes = ( IsAuthenticated, )
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = BookSerializer(instance)
        return Response(serializer.data)