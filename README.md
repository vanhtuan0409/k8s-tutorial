# K8s Tutorial

Presentation slide: https://docs.google.com/presentation/d/1UmwDrVMzf5PwmxFb1KgQT-W1ZYy2WKoopBpWZRNm-rk/

### Prerequisites
Please install the following software beforehand:
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)
- [Docker](https://www.docker.com/)

After installation, please start a Minikube cluster by running:

```sh
# Starting minikube cluster
minikube start

# Double check cluster status
minikube status

# Trying to connect with minikube cluster using kubectl
# Should show `No resources found`
kubectl get pod
```
