#!/bin/bash
eval $(minikube -p minikube docker-env)
POD=$(kubectl get pod -l app=sjsump-cassandra -o jsonpath="{.items[0].metadata.name}")
echo $POD
kubectl exec $POD -- cqlsh -f /pre_sql.sql