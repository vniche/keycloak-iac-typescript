import * as keycloak from "@pulumi/keycloak";

const realm = new keycloak.Realm("new-typescript-realm", {
  realm: "my-example-typescript-realm",
});

new keycloak.openid.Client("new-typescript-client", {
  realmId: realm.id,
  clientId: "my-example-typescript-client",
  accessType: "CONFIDENTIAL",
});

export const realmId = realm.id;