import json

from django.shortcuts import render
from django.views import generic
from django.http import HttpResponse
from django.shortcuts import render_to_response
# class indexView(generic.View):
#     template_name = 'professional_portfolio/index.html'
#     render(template_name)


def index(request):
    # return render_to_response('professional_portfolio/index.html')
    return render_to_response('professional_portfolio/index_edit.html')


def load_dcmd(request):
    # background: light purple
    image_ref = "<a href=&quot;{%static&apos;professional_portfolio/images/singing.png&apos;%}&quot;rel=&quot;shadowbox&quot;>Image</a>"
    data = {'image_ref': image_ref}
    return HttpResponse(json.dumps(data), content_type='application/json')
    # message = "ajax worked! loading dcmd data"
    # return HttpResponse(background)

def scroll_test(request):
    return render_to_response("professional_portfolio/scroll_test.html")