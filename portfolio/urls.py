from django.conf.urls import patterns, include, url
from django.contrib import admin
from professional_portfolio import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'portfolio.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^professional_portfolio/', include('professional_portfolio.urls', namespace='professional_portfolio')),
    url(r'^admin/', include(admin.site.urls)),
)
