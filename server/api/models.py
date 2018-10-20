# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Purchaser(models.Model):
    qr_code = models.CharField(max_length=16)
    credit_risk_level = models.IntegerField()

# creating a model for just one provider
class Provider(models.Model):
    max_credit = models.IntegerField()
    remaining_credit = models.IntegerField()
    credit_risk_level = models.IntegerField()
    avg_roi = models.IntegerField()

class Merchant(models.Model):
    pass
