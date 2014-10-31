from django.conf.urls import patterns, url

from professional_portfolio import views

urlpatterns = patterns('',
 # url(r'^$', views.indexView.as_view(), name='index'),
 url(r'^$', views.index, name='index'),
 )