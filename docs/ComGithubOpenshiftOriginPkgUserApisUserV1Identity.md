# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgUserApisUserV1Identity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**extra** | **{String: String}** | Extra holds extra information about this identity | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**providerName** | **String** | ProviderName is the source of identity information | 
**providerUserName** | **String** | ProviderUserName uniquely represents this identity in the scope of the provider | 
**user** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | User is a reference to the user this identity is associated with Both Name and UID must be set | 


