#!/usr/bin/env bash

docker build -t sjsump-frontend:latest .
kubectl delete pod -l app=sjsump-frontend