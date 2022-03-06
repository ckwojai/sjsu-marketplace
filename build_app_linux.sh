#!/bin/bash
declare -a build_folders=("sjsump-api" "sjsump-cassandra" "sjsump-frontend")

install_docker() {
    sudo apt-get remove docker docker-engine docker.io containerd runc
    sudo apt-get update
    sudo apt-get install ca-certificates curl gnupg lsb-releasesudo --yes
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io --yes
    sudo docker run hello-world
    if [ "$?" -ne 0 ]; then
        echo "Failed to install docker - exiting..."
        return 1
    fi
    echo "Successfully install Docker!"
    return 0
}

install_minikube() {
    curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
    sudo install minikube-linux-amd64 /usr/local/bin/minikube
    sudo usermod -aG docker $USER && newgrp docker
    return 0
}

install_kubectl() {
    sudo snap install kubectl --classic
    return 0
}


start_minikube() {
    minikube start --cpus='4' —-nodes=1 --memory="8g" --kubernetes-version=v1.23.3 --driver=docker
    if [ "$?" -ne 0 ]; then
        echo "Failed to start minikube - exiting..."
        return 1
    fi
    echo "Verifying that minikube is running. Its IP address is: "
    minikube ip
    if [ "$?" -ne 0 ]; then
        echo "Failed to get IP address of minikube - exiting..."
        return 1
    fi
    return 0
}

build_images() {
    for i in "${build_folders[@]}"
    do
        echo "building $i..."
        docker build -t $i:latest $i
        echo "done building $i"
    done
    return 0
}

deploy_app() {
    for i in "${build_folders[@]}"
    do
        echo "deploying $i..."
        kubectl apply -f $i
        echo "done deploying $i"
    done
}

# Check user root
USER=`id -u`
if [ $USER -eq 0 ]; then
    echo "Please do not run as root or with sudo"
    exit 2
fi
install_docker
install_minikube
install_kubectl
# Must run docker at least once to ensure the network plumbing is setup by docker rather than minikube
# Minikube doesn't set up networking properly if it is installed before docker is run at least once.
echo "Testing docker..."
docker run --rm hello-world
if [ "$?" -ne 0 ]; then
    echo "failed to setup docker correctly. Please install docker manually and rerun this script"
    exit 2
fi
echo "Docker test successful"

echo "Starting minikube"
start_minikube

echo "Building images"
eval $(minikube -p minikube docker-env)
build_images

echo "Deploying app"
deploy_app