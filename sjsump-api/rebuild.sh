#!/usr/bin/env bash

docker build -t sjsump-api:latest .
kubectl delete pod -l app=sjsump-api