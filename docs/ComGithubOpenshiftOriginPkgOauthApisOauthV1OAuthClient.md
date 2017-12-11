# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgOauthApisOauthV1OAuthClient

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalSecrets** | **[String]** | AdditionalSecrets holds other secrets that may be used to identify the client.  This is useful for rotation and for service account token validation | [optional] 
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**grantMethod** | **String** | GrantMethod determines how to handle grants for this client. If no method is provided, the cluster default grant handling method will be used. Valid grant handling methods are:  - auto:   always approves grant requests, useful for trusted clients  - prompt: prompts the end user for approval of grant requests, useful for third-party clients  - deny:   always denies grant requests, useful for black-listed clients | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**redirectURIs** | **[String]** | RedirectURIs is the valid redirection URIs associated with a client | [optional] 
**respondWithChallenges** | **Boolean** | RespondWithChallenges indicates whether the client wants authentication needed responses made in the form of challenges instead of redirects | [optional] 
**scopeRestrictions** | [**[ComGithubOpenshiftOriginPkgOauthApisOauthV1ScopeRestriction]**](ComGithubOpenshiftOriginPkgOauthApisOauthV1ScopeRestriction.md) | ScopeRestrictions describes which scopes this client can request.  Each requested scope is checked against each restriction.  If any restriction matches, then the scope is allowed. If no restriction matches, then the scope is denied. | [optional] 
**secret** | **String** | Secret is the unique secret associated with a client | [optional] 


