# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1ServiceAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**automountServiceAccountToken** | **Boolean** | AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level. | [optional] 
**imagePullSecrets** | [**[IoK8sKubernetesPkgApiV1LocalObjectReference]**](IoK8sKubernetesPkgApiV1LocalObjectReference.md) | ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: http://kubernetes.io/docs/user-guide/secrets#manually-specifying-an-imagepullsecret | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata | [optional] 
**secrets** | [**[IoK8sKubernetesPkgApiV1ObjectReference]**](IoK8sKubernetesPkgApiV1ObjectReference.md) | Secrets is the list of secrets allowed to be used by pods running using this ServiceAccount. More info: http://kubernetes.io/docs/user-guide/secrets | [optional] 


