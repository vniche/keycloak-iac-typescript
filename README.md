# keycloak-iac-typescript

This Pulumi stack to privion a realm and non-user managed resources on a Keycloak instance.

## TLDR

```shell
# to provision keycloak and it's database with docker-compose
docker-compose up -d

# necessary configuration for pulumi to connect with keycloak
pulumi config set keycloak:url http://localhost:8080
pulumi config set keycloak:clientId admin-cli --secret
pulumi config set keycloak:username admin --secret
pulumi config set keycloak:password admin --secret

# run pulumi program
pulumi up

# enjoy things running
```

## Requirements

First things first, let's make sure we are all set up with our Google Cloud account, project and Pulumi itself.

- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Pulumi ([Account](http://app.pulumi.com/) and [CLI](https://www.pulumi.com/docs/get-started/install/))

## Hands on

### Provisioning Keycloak

Bear in mind that this is not a production-ready setup, but rather a easy development one for anyone to run and experiment on:

```shell
# this is provision an PostgreSQL and Keycloak instance
docker-compose up -d
```

### Connecting Pulumi to Keycloak

We need to authorize Pulumi to interact with Keycloak, in this example we do so by leveraging on Keycloak default credentials we configured on our docker-compose (which is user/pass admin/admin):

```shell
pulumi config set keycloak:url http://localhost:8080
pulumi config set keycloak:clientId admin-cli --secret
pulumi config set keycloak:username admin --secret
pulumi config set keycloak:password admin --secret
```

### Provisioning

Let's finally put Pulumi to work:

```shell
pulumi up
```

### Enjoy

You can access [http://localhost:8080](http://localhost:8080) and login in to the console with the same admin/admin credential and check the realm and it's client we just created