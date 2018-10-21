# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render
from models import Provider, Purchaser
import requests
import json
import paypalrestsdk


def init_db(request):
    provider = Provider(max_credit=1000, remaining_credit=1000, credit_risk_level=80000, avg_roi=0);
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
    data = {'grant_type': 'client_credentials', 'client_id': 'sqieoAlEQUV7wyBjkjx5XxqxgSPxzbIm', 'client_secret': 'bojHgTuOJPw21zyF'}
    headers = {'Content-type': 'application/x-www-form-urlencoded'}
    r = requests.post('https://api-stg.syf.com/oauth2/v1/token', headers=headers, data=data)
    j = json.loads(r.text)
    access_token = j['access_token']
    headers = {'Authorization': 'Bearer ' + access_token}
    r = requests.get('https://api-stg.syf.com/m2020/credit/customers/1/profile', headers=headers)
    j = json.loads(r.text)
    syfCreditScore = j['syfCreditScore']

    """
    ficoScore = r['ficoScore']
    delinquentAccounts = r['delinquentAccounts']
    bankruptAccounts = ['bankruptAccounts']
    averageAccountAge = ['averageAccountAge']
    paymentHistory = ['paymentHistory']
    """

    providers = Provider.objects.filter(credit_risk_level__gte=syfCreditScore)
    if providers:
        return HttpResponse("success")
    return HttpResponse("no providers")

def paypal(request):
    paypalrestsdk.configure({
        "mode": "sandbox",  # sandbox or live
        "client_id": "ASXRmwdmW2zos1V3w1z50p2_wxEd212rHfBCJ6ltdEYIOkDMY1c7pMQBPra1w4NHvcxxLmPArf2kym7N",
        "client_secret": "EF3Rrfl-AuboqCi_H9mh4QsQPCtvXuUVl_AcuvqQtLmRopH64yUjjxjavCe8ZO6GOuEwwxKx1asCER1F"})

    payment = paypalrestsdk.Payment({
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"},
        "redirect_urls": {
            "return_url": "http://localhost:3000/payment/execute",
            "cancel_url": "http://localhost:3000/"},
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "5.00",
                    "currency": "USD",
                    "quantity": 1}]},
            "amount": {
                "total": "5.00",
                "currency": "USD"},
            "description": "This is the payment transaction description."}]})

    """
    if payment.create():
        print("Payment created successfully")
        import pdb;pdb.set_trace();
        if payment.execute({"payer_id": "DUFRQ8GWYMJXC"}):
            print("Payment execute successfully")
        else:
            print(payment.error)  # Error Hash
    """
    return HttpResponse("success")


def visa(request):
    return HttpResponse("success")

