# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSdnApisNetworkV1HostSubnet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**host** | **String** | Host is the name of the node. (This is the same as the object&#39;s name, but both fields must be set.) | 
**hostIP** | **String** | HostIP is the IP address to be used as a VTEP by other nodes in the overlay network | 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**subnet** | **String** | Subnet is the CIDR range of the overlay network assigned to the node for its pods | 


