#!/usr/bin/env bash

kubectl apply -f sjsump-cassandra-svc.yaml
kubectl apply -f sjsump-cassandra-statefulset.yaml
