#start containers in dev environment
start-dev:
	#build and start docker containers
	docker-compose -f docker-compose.dev.yml up -d --build --remove-orphans
#stop containers in dev environment
stop-dev:
	docker-compose -f docker-compose.dev.yml down --remove-orphans

#start containers in prod mode
start-production:
	docker-compose -f docker-compose.yml up -d --build --remove-orphans --scale node_server=3

stop-production:
	docker-compose -f docker-compose.yml down --remove-orphans

# install ingress nginx
install-ingress-nginx:
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml

# start k8s dev
start-dev-k8:
	cd k8s/dev_base/
	kubectl apply -k .