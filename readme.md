
# Students APINodeDockerMongo-IngeWeb

  

### **Pre-requisites**

  

- Git - [Installation guide here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- Docker - [Installation guide here](https://docs.docker.com/engine/install/)

- Docker-compose - [Installation guide here](https://docs.docker.com/compose/install/)

  

### **Importance of docker**

  

Under the concept of containers, Docker can work with different containers that share the same system resources, allowing us to work with different applications.
Another functionality of Docker is that it allows us to package an application with all the characteristics and dependencies that it needs, and send it as a single package, by doing this, the developer will know that his application can be run on another machine regardless of its characteristics.

  
### **How to run**

1. Clone the repository using one of the options that github allows.

2. Enter the project folder, in linux use the command cp .env.example .env to generate the file with the example environment variables. 

    **Note:** If you want to set other environment variables, simply use the above command and modify them in some text editor.

3. To be able to run the project you must create the volume and the network, for this you launch the command `docker network create ing-web` and for the `docker volume create dbdata`.

4. Run `docker-compose -f Docker-compose.yaml up --build`

### **How to use the API**
  
- ***Get:***

	- Get all students: 
		```json
        curl --request GET \
            --url http://localhost:4000/students
		```

	- Get student by id: 
		```json
		curl --request GET \ 
		    --url http://localhost:4000/students/5fdae088a819cafc65bedc5d
		```
	
	- Get average:
		```json
		curl --request GET \
  			--url http://localhost:4000/students/average
		```
  

- ***Post:*** 
	- Create a new stundent: 
		```json
		curl --request POST \
		--url http://localhost:4000/students/add \ 
		--header 'Content-Type: application/json' \
		--data '{
				"name": "Daniel Torres",
				"id": "1020492000",
				"grades": [4.2, 4, 4.2],
				"approved": true
		}'
		```
	-  Update a student: 
		```json
		curl --request POST \
		  --url http://localhost:4000/students/5fdae088a819cafc65bedc \
		  --header 'Content-Type: application/json' \
		  --data '{
				"name": "Daniel Torres",
				"id": "1020492000",
				"grades": [4.2, 4, 4.2],
				"approved": true
		}'
		```

- ***Delete:***
	-  Delete a student:
		```json
        curl --request DELETE \
            --url http://localhost:4000/students/5fda837f3337484700217e5e
		```
	- Delete with criterion: 
		```json
		curl --request DELETE \
		    --url http://localhost:4000/students/approved/{grade}
		```