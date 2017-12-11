# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgAuthorizationApisAuthorizationV1ClusterPolicy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**lastModified** | [**IoK8sApimachineryPkgApisMetaV1Time**](IoK8sApimachineryPkgApisMetaV1Time.md) | LastModified is the last time that any part of the ClusterPolicy was created, updated, or deleted | 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**roles** | [**[ComGithubOpenshiftOriginPkgAuthorizationApisAuthorizationV1NamedClusterRole]**](ComGithubOpenshiftOriginPkgAuthorizationApisAuthorizationV1NamedClusterRole.md) | Roles holds all the ClusterRoles held by this ClusterPolicy, mapped by ClusterRole.Name | 


