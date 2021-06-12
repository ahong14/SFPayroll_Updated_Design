#!/bin/bash

echo 'Renewing ssl certificate'

sudo make stop-production

certbot renew

echo 'ssl certificate successfully renewed'

sudo make start-production

