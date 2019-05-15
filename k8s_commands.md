# K8s Command

### Minikube command
```sh
# Check status of minikube
minikube status

# Start minikube
minikube start

# Get minikube machine ip
# For pointing local DNS to ingress
minikube ip

# Create pseudo load balancer ip
# For service type LoadBalancer
minikube tunnel
```

### K8s command
```sh
# List object instances
# kubectl get <object_kind>
# For example:
kubectl get pod
kubectl get deployment
kubectl get service
kubectl get ingress

# Apply a config file
# kubectl apply -f <filename>
# For example:
kubectl apply -f app.pod.yml
kubectl apply -f app.deployment.yml
kubectl apply -f app.service.yml

# Get detail information about an object
# kubectl describe <object_kind> <object_name>
# For example:
kubectl desribe pod redis-app-pod
kubectl desribe deployment redis-app

# Delete an object
# kubectl delete <object_kind> <object_name>
# For example:
kubectl delete pod redis-app-pod
kubectl delete deployment redis-app

# Open a tunnel for connecting to object
# (Only for demo and debuging)
# kubectl port-forward <object_kind>/<object_name> <port>
# For example:
kubectl port-forward pod/redis-app-pod 3000
```

