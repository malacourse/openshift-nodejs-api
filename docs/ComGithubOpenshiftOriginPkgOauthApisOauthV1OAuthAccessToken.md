# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgOauthApisOauthV1OAuthAccessToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**authorizeToken** | **String** | AuthorizeToken contains the token that authorized this token | [optional] 
**clientName** | **String** | ClientName references the client that created this token. | [optional] 
**expiresIn** | **Number** | ExpiresIn is the seconds from CreationTime before this token expires. | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**redirectURI** | **String** | RedirectURI is the redirection associated with the token. | [optional] 
**refreshToken** | **String** | RefreshToken is the value by which this token can be renewed. Can be blank. | [optional] 
**scopes** | **[String]** | Scopes is an array of the requested scopes. | [optional] 
**userName** | **String** | UserName is the user name associated with this token | [optional] 
**userUID** | **String** | UserUID is the unique UID associated with this token | [optional] 


