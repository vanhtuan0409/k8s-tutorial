start-tunnel:
	minikube tunnel

pod-forward:
	kubectl port-forward pod/redis-app-pod 3000
