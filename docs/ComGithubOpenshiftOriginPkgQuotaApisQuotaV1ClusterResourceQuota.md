# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | 
**spec** | [**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaSpec**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaSpec.md) | Spec defines the desired quota | 
**status** | [**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaStatus**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaStatus.md) | Status defines the actual enforced quota and its current usage | [optional] 


