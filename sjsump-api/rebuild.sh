#!/usr/bin/env bash
eval $(minikube -p minikube docker-env)
docker build -t sjsump-api:latest .
kubectl delete pod -l app=sjsump-api