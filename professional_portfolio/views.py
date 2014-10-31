from django.shortcuts import render
from django.views import generic
from django.http import HttpResponse
from django.shortcuts import render_to_response
# class indexView(generic.View):
#     template_name = 'professional_portfolio/index.html'
#     render(template_name)


def index(request):
    return render_to_response('professional_portfolio/index.html')