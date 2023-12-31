# Bin2Dec v2.0

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/arslan-dev/bin2dec)

https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md

## Features

- [x]  User can enter up to 8 binary digits in one input field
- [x]  User must be notified if anything other than a 0 or 1 was entered
- [x]  User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered

## Bonus features

- [x]  User can enter a variable number of binary digits

## Implementation details

In order to allow both 8 digits max and variable digits conditions, the solution have been equipped with two different modes of operation:
1. Simple mode. 8 digits max, uses `parseInt(binaryString, 2)`
2. Custom mode. Variable number of digits and custom conversion.
The "character limit exceeded" error will appear only for the simple mode.

## Build and run locally

```bash
docker compose up -d
```

- Then visit http://localhost:8080

I've also uploaded the image with built artifacts onto the Docker Hub.

## Run using built image from Docker Hub

```bash
docker run -d --rm --name bin2dec --publish 8080:80 arslandev/bin2dec:v2.0
```

- Then visit http://localhost:8080

## Deploy to Docker Swarm using Docker Playground

- Visit https://labs.play-with-docker.com/ and log in with your Docker account.
- Run new swarm with managers and workers (the wrench icon)
- Input these commands into one of the manager nodes:

```bash
curl https://raw.githubusercontent.com/arslan-dev/bin2dec/main/stack.yaml -o stack.yaml
docker stack deploy -c stack.yaml bin2dec
```

- Now click the 'OPEN PORT' button on any of the nodes, type '8080' and press OK.