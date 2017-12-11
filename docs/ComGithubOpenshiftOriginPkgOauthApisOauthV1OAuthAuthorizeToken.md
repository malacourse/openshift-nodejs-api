# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgOauthApisOauthV1OAuthAuthorizeToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**clientName** | **String** | ClientName references the client that created this token. | [optional] 
**codeChallenge** | **String** | CodeChallenge is the optional code_challenge associated with this authorization code, as described in rfc7636 | [optional] 
**codeChallengeMethod** | **String** | CodeChallengeMethod is the optional code_challenge_method associated with this authorization code, as described in rfc7636 | [optional] 
**expiresIn** | **Number** | ExpiresIn is the seconds from CreationTime before this token expires. | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**redirectURI** | **String** | RedirectURI is the redirection associated with the token. | [optional] 
**scopes** | **[String]** | Scopes is an array of the requested scopes. | [optional] 
**state** | **String** | State data from request | [optional] 
**userName** | **String** | UserName is the user name associated with this token | [optional] 
**userUID** | **String** | UserUID is the unique UID associated with this token. UserUID and UserName must both match for this token to be valid. | [optional] 


