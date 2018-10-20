# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render
from models import Provider, Purchaser


def init_db(request):
    provider = Provider(max_credit=1000, remaining_credit=1000, credit_risk_level=80, avg_roi=0);
    purchaser = Purchaser(qr_code=111111, credit_risk_level=0)
    provider.save();
    purchaser.save();
    return HttpResponse("success")

def charge(request):
    """
    1. get the credit risk level of the user for this transaction (via synchrony API)
    2. find a matching provider for the transaction
    3. issue the payment VISA API from the provider to the Merchant
    """
    return HttpResponse("success")
